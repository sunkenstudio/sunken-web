const getBaseUrl = () => {
  const env = process.env.NODE_ENV;
  if (env === "development") {
    return "http://localhost:1337";
  }
  return "https://cms.sunkenstudio.com";
};

export const BASE_URL = getBaseUrl();
