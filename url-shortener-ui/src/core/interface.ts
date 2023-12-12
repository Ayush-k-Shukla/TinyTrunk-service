import { ApiStatus, SnackbarVariant } from './enum';

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

export interface ISnackBarState {
  variant: SnackbarVariant;
  message: string;
  open: boolean;
}
