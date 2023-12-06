import { IShortenedUrl } from './interface';

// Function to save a shortened URL to the list in local storage
export function saveShortenedUrl(newUrl: IShortenedUrl) {
  // Retrieve the existing list of shortened URLs from local storage
  const existingShortenedUrls = getShortenedUrls();

  // Add the new shortened URL to the list
  const updatedShortenedUrls = [...existingShortenedUrls, newUrl];

  // Save the updated list to local storage
  saveShortenedUrls(updatedShortenedUrls);
}

// Function to retrieve the list of shortened URLs from local storage
export function getShortenedUrls(): IShortenedUrl[] {
  const storedUrls = localStorage.getItem('shortenedUrls');
  return storedUrls ? JSON.parse(storedUrls) : [];
}

// Function to save a list of shortened URLs to local storage
export function saveShortenedUrls(urls: IShortenedUrl[]) {
  localStorage.setItem('shortenedUrls', JSON.stringify(urls));
}
