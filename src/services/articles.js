import { publicAxiosInstance } from "./axiosConfig";

export const getAllArticles = async (page = 0, resultsPerPage = 5) => {
  const response = await publicAxiosInstance.get(
    `https://hn.algolia.com/api/v1/search_by_date?query=coding&page=${page.value}&hitsPerPage=${resultsPerPage}`
  );
  return response.data;
};
