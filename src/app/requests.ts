import { GET_SITE } from './graphql/queries';
import { Client } from './types';
import { formatStrapiData, getClientIdFromUrl } from './helpers/utils';
import { ApolloClient } from '@apollo/client';

export const getSite = async (
  client: ApolloClient<object>
): Promise<Client | null> => {
  const ClientId = getClientIdFromUrl();
  if (!ClientId) {
    return Promise.resolve(null);
  }
  try {
    const res = await client.query({
      query: GET_SITE,
      variables: {
        ClientId,
      },
    });
    const sites = res.data.sites.data;
    if (sites.length === 0) {
      return Promise.resolve(null);
    }
    const raw = res.data.sites.data[0];
    const clientData: Client = formatStrapiData(raw.attributes);
    return clientData;
  } catch (err) {
    console.log(err);
  }
  return Promise.resolve(null);
};
