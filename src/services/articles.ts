import { publicAxiosInstance } from './axiosConfig';
import type { IResult } from './../interfaces/index';


export const getAllArticles = async (page = 0, resultsPerPage = 5): Promise<IResult> => {
    // const offset: number = resultsPerPage * page;
    // const response = await publicAxiosInstance.get(`/jobs?limit=${resultsPerPage}&offset=${offset}`);
    const response = await publicAxiosInstance.get<IResult>(`https://hn.algolia.com/api/v1/search_by_date?query=coding`);
    return response.data
}