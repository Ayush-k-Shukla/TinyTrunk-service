import { BASE_URL } from './axios.instance';

export const getShortLinkUrl = (shortId: string): string => {
  return `${BASE_URL}/${shortId}`;
};
