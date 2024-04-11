// @ts-nocheck
"use client";
import { camelCase } from "lodash";

export const scrollToElement = (e: any) => {
  e.preventDefault();

  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");

  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });
};

export const getClientIdFromUrl = () => {
  // localhost
  const url = window?.location?.href;
  if (url.includes("localhost")) {
    const urlParams = new URLSearchParams(window.location.search);
    const clientId = urlParams.get("clientId");
    return clientId;
  }
  // prod
  return window?.location?.hostname;
};

export const formatStrapiData = (data: any): Client => {
  return Object.entries(data).reduce((acc, [key, val]) => {
    const formattedKey = camelCase(key);
    if (typeof val === "object") {
      if (val && Array.isArray(val?.data)) {
        return {
          ...acc,
          [formattedKey]: val.data.map((i) => formatStrapiData(i.attributes)),
        };
      }
      if (val?.data?.attributes) {
        return {
          ...acc,
          [formattedKey]: formatStrapiData(val.data.attributes),
        };
      }
    }
    if (val?.__typename?.includes("ComponentCommon")) {
      return {
        ...acc,
        [formattedKey]: formatStrapiData(val),
      };
    }
    // hero > buttons array
    if (
      val &&
      Array.isArray(val) &&
      val?.[0].__typename?.includes("ComponentCommon")
    ) {
      return {
        ...acc,
        [formattedKey]: val.map((i) => formatStrapiData(i)),
      };
    }
    return {
      ...acc,
      [formattedKey]: val,
    };
  }, {}) as unknown as Client;
};
