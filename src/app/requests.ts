import { GET_IMAGES, GET_SITE, GET_SITE_ID } from './graphql/queries';
import { Client } from './types';
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

export const getMediaLibrary = async (client: ApolloClient<object>) => {
  try {
    const res = await client.query({
      query: GET_IMAGES,
    });
    const imageData = formatStrapiData(res.data);
    console.log({ imageData });
    return Promise.resolve(res);
  } catch (err) {
    return Promise.resolve(null);
  }
};
