import axiosInstance from '../core/axios.instance';
import { IShortenedUrl } from '../core/interface';

export const generateShortLink = async (
  originalUrl: string
): Promise<{ data: IShortenedUrl }> => {
  const response = await axiosInstance.post('/short-link', { originalUrl });

  console.log(response);

  return response.data;
};
