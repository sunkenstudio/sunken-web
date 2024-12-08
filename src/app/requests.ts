import { GET_MEDIA_LIBRARY, GET_SITE, GET_SITE_ID } from './graphql';
import {
  Client,
  GetMediaLibraryResponse,
  MediaLibrary,
  UploadFile,
} from './types';
import { formatStrapiData, getClientIdFromUrl } from './helpers/utils';
import { ApolloClient } from '@apollo/client';

const getSiteId = async (
  client: ApolloClient<object>
): Promise<number | null> => {
  const ClientId = getClientIdFromUrl();
  if (!ClientId) {
    return Promise.resolve(null);
  }
  try {
    const res = await client.query({
      query: GET_SITE_ID,
      variables: {
        ClientId,
      },
    });
    const id: number = res.data.sites.data[0].id;
    return Promise.resolve(id);
  } catch (err) {
    return Promise.resolve(null);
  }
};

export const getSite = async (
  client: ApolloClient<object>
): Promise<Client | null> => {
  try {
    const id = await getSiteId(client);
    if (!id) {
      return Promise.resolve(null);
    }
    const res = await client.query({
      query: GET_SITE,
      variables: {
        id,
      },
    });
    const site = res.data.site.data.attributes;
    const clientData: Client = formatStrapiData(site);
    return clientData;
  } catch (err) {
    return Promise.resolve(null);
  }
};

const filterImagesByClient = (clientId: string, files: UploadFile[]) => {
  return files.filter((i) => {
    if (i.attributes.name.split('_')[0] === clientId) {
      return true;
    }
    return false;
  });
};

export const getMediaLibrary = async (
  client: ApolloClient<object>,
  clientId: string
): Promise<MediaLibrary> => {
  try {
    const res: GetMediaLibraryResponse = await client.query({
      query: GET_MEDIA_LIBRARY,
    });
    const raw = filterImagesByClient(clientId, res.data.uploadFiles.data);
    const images = raw.map((i) => ({ id: i.id, ...i.attributes }));
    const imageObj = images.reduce(
      (acc, i) => ({
        [i.id]: i,
        ...acc,
      }),
      {}
    );
    console.log({ images });
    return Promise.resolve(imageObj);
  } catch (err) {
    return Promise.resolve({});
  }
};
