import { GET_MEDIA_LIBRARY, GET_SITE, GET_SITE_ID } from './graphql';
import { Client, MediaLibrary, StrapiImage } from './types';
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

export const getMediaLibrary = async (
  client: ApolloClient<object>
): Promise<MediaLibrary> => {
  try {
    const res = await client.query({
      query: GET_MEDIA_LIBRARY,
    });
    const raw = res.data.uploadFiles.data;
    const images = raw.map((i) => ({ id: i.id, ...i.attributes }));
    // const images: StrapiImage[] = res?.data.uploadFiles.data;
    const imageObj = images.reduce(
      (acc, i) => ({
        [i.id]: i,
        ...acc,
      }),
      {}
    );
    console.log({ imageObj });
    return Promise.resolve(imageObj);
  } catch (err) {
    return Promise.resolve({});
  }
};
