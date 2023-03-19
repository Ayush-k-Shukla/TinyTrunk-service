# URL Shortener - Backend

This is a URL-shortening service that allows users to create short links for long URLs. The application is built using node and Flask framework.

## Features

- Create short URLs for long URLs
- Redirect to the original URL when the short link is accessed

## Installation

1. Clone this repository:

   ```
   git clone https://github.com/Ayush-k-Shukla/URL-shortner.git
   ```

2. Navigate to the project directory:

   ```
   cd URL-shortner-api
   ```

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
