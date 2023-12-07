import { ApiStatus } from './enum';

export interface IShortenedUrl {
  originalUrl: string;
  shortenedUrl: string;
  clicks?: number;
  createdAt?: string;
}

export interface IApiResponse<T> {
  status?: ApiStatus;
  data?: T | null;
  message?: string | null;
}
