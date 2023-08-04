import { publicAxiosInstance } from './axiosConfig';
import type { IResult } from './../interfaces/index';
import type { Ref } from 'vue';


export const getAllArticles = async (page : Ref<number> , resultsPerPage = 5): Promise<IResult> => {
    const response = await publicAxiosInstance.get<IResult>(`https://hn.algolia.com/api/v1/search_by_date?query=coding&page=${page.value}&hitsPerPage=${resultsPerPage}`);
    return response.data
}