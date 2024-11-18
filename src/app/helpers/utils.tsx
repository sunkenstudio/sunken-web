'use client';
import { camelCase } from 'lodash';
import { Client } from '../types';

export const emptyFunction = () => {
  // Default value for no behavior
};

export const scrollToElement = (e: any) => {
  e.preventDefault();

  const href = e.currentTarget.href;
  const targetId = href.replace(/.*#/, '');

  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: 'smooth',
  });
};

export const getClientIdFromUrl = () => {
  // localhost
  const url = window?.location?.href;
  if (url.includes('localhost')) {
    const urlParams = new URLSearchParams(window.location.search);
    const clientId = urlParams.get('clientId');
    return clientId;
  }
  // prod
  return window?.location?.hostname;
};

export const formatStrapiData = (data: any): Client => {
  // handle missing top level entries
  const missingTopLevelEntries = Object.entries(data)
    /* @ts-ignore */
    .map(([k, v]) => (v?.data == null ? k : null))
    .filter((i) => i);

  const sanitized = Object.entries(data).reduce((acc, [k, v]) => {
    if (missingTopLevelEntries.includes(k) && typeof v === 'object') {
      return {
        ...acc,
        [k]: null,
      };
    }
    return {
      ...acc,
      [k]: v,
    };
  }, {});

  return recursiveFormat(sanitized);
};

// TODO - Figure out the correct typing for this mess
export const recursiveFormat = (data: any): Client => {
  // console.log(data);
  return Object.entries(data).reduce((acc, [key, val]) => {
    const formattedKey = camelCase(key);
    if (typeof val === 'object') {
      /* @ts-ignore */
      if (val && Array.isArray(val?.data)) {
        return {
          ...acc,
          /* @ts-ignore */
          [formattedKey]: val.data.map((i) => recursiveFormat(i.attributes)),
        };
      }
      /* @ts-ignore */
      if (val?.data?.attributes) {
        return {
          ...acc,
          /* @ts-ignore */
          [formattedKey]: recursiveFormat(val.data.attributes),
        };
      }
    }
    /* @ts-ignore */
    if (val?.__typename?.includes('Component')) {
      return {
        ...acc,
        [formattedKey]: recursiveFormat(val),
      };
    }
    // hero > buttons array
    if (
      val &&
      Array.isArray(val) &&
      val?.[0]?.__typename?.includes('ComponentCommon')
    ) {
      return {
        ...acc,
        [formattedKey]: val.map((i) => recursiveFormat(i)),
      };
    }
    return {
      ...acc,
      [formattedKey]: val,
    };
  }, {}) as unknown as Client;
};
