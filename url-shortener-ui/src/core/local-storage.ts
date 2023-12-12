import { IShortenedUrl } from './interface';

export const LOCAL_STORAGE_KEY_NAMESPACE = 'shortenedUrls';

/**
 * Function to save a shortened URL to the list in local storage
 *
 * @export
 * @param {IShortenedUrl} newUrl
 */
export function saveShortenedUrl(newUrl: IShortenedUrl) {
  const existingShortenedUrls = getShortenedUrls();

  const updatedShortenedUrls = [...existingShortenedUrls, newUrl];

  saveShortenedUrls(updatedShortenedUrls);
}

/**
 * Function to retrieve the list of shortened URLs from local storage
 *
 * @export
 * @param {IShortenedUrl} newUrl
 * @returns {IShortenedUrl[]}
 */
export function getShortenedUrls(): IShortenedUrl[] {
  const storedUrls = localStorage.getItem(LOCAL_STORAGE_KEY_NAMESPACE);
  return storedUrls ? JSON.parse(storedUrls) : [];
}

function saveShortenedUrls(urls: IShortenedUrl[]) {
  localStorage.setItem(LOCAL_STORAGE_KEY_NAMESPACE, JSON.stringify(urls));
}
