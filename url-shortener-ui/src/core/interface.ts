import { ApiStatus } from './enum';

export interface IShortenedUrl {
  originalUrl: string;
  shortId: string;
  count?: string;
  activeTill?: string;
  createdAt?: string;
}

export interface IApiResponse<T> {
  status?: ApiStatus;
  data?: T | null;
  message?: string | null;
}
