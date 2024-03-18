const getBaseUrl = () => {
  const env = process.env.NODE_ENV;
  if (env === "development") {
    return "http://localhost:1337/api";
  }
  return "https://cms.sunkenstudio.com/api";
};

export const BASE_URL = getBaseUrl();
