# URL Shortener - Backend

This is a URL-shortening service that allows users to create short links for long URLs. The application is built using node and Flask framework.

## Features

- Create short URLs for long URLs
- Redirect to the original URL when the short link is accessed

## Installation

1. Clone this repository:

   <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git clone https://github.com/Ayush-k-Shukla/URL-shortner.git
   </code></div></div></pre>

2. Navigate to the project directory:

   <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">cd URL-shortner
   </code></div></div></pre>

3. Install the dependencies:

   npm install

   ```
   npm install
   ```

4. Run the application:

   ```
   npm run dev
   ```

   The application should now be running on [http://localhost:5000](http://localhost:5000/).

## API Endpoints

List the endpoints available in your API, along with a brief description of what they do.

`POST /api/v1/shorten?url={LONG_URL_TO_SHORT}`

Attach the short url corresponding to given url.

`GET /api/v1/:shortId`

Redirect to the Original long url.

`GET /api/count/:shortId`

Get count of visits for an URL.
