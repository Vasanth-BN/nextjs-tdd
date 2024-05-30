import { request } from "./apiService";

const handleRequest = async <T>(request: () => T) => {
  const response: T = await request();

  if (
    response &&
    typeof response === "object" &&
    "error" in response &&
    typeof response.error === "string" &&
    response.error
  ) {
    throw new Error(response.error);
  }

  return response;
};

const api = {
  get: async (urlPath: string, options?: RequestInit) =>
    handleRequest(() => request("GET", urlPath, null, options)),
};

export default api;
