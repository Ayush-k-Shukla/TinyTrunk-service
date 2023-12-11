<h1 align="center">
  URL-Shortner
</h1>

### Deployed URL: [LINK]()

This is a URL-shortening fullstack application that allows users to create short links for long URLs. The application is built using MERN(MongoDB, Express, React, Node).

## Technologies

- ### Back end

  - [Express](https://expressjs.com/)- Nodejs framwork for building the REST Apis
  - [Mongodb](http://mongodb.com/)- Document oriented NoSQL database
  - [Mongoose](https://http://mongoosejs.com)- MongoDB object modeling tool
  - [Shortid](https://www.npmjs.com/package/shortid)- Short id generator
  - [Joi](https://www.npmjs.com/package/joi)- Request body validation

- ### Front end

  - [React](https://reactjs.org/) - JavaScript library for building user interfaces.
  - [Axios](https://www.npmjs.com/package/axios)- To make API calls
  - [Dayjs](https://day.js.org/)- For date formatting
  - [Material UI](https://mui.com/material-ui/)- For some prebuilt components

## Getting Started

#### Clone the project

```sh
git clone https://github.com/Ayush-k-Shukla/URL-shortner.git
cd URL-Shortener
```

#### Run back end

```
# Install dependencies
npm install

# Start  server
npm run dev
```

#### Run front end

```
# Move to client folder
cd url-shortener-ui

# Install dependencies
npm install

# Start  client
npm run dev
```

## Features

1. **Shorten Long URLs:**

   - Efficiently create concise short URLs for lengthy web addresses.

2. **Redirect Functionality:**

   - Automatically redirect users to the original URL when they access the corresponding short link.

3. **Local URL Storage:**

   - Store generated URLs locally in the browser, enabling users to access their browsing history at any time.

4. **Click Tracking:**

   - Monitor and record click activities on shortened URLs for analytical purposes.

5. **Unique Short-ID Generation:**

   - Ensure the generation of distinct short IDs for each URL to avoid duplication.

6. **One Short ID per Unique URL:**

   - Guarantee the creation of a single short ID for identical long URLs to enhance efficiency.

7. **User-Friendly Interface:**
   - Provide an intuitive and user-friendly interface with effective error and success management for a seamless experience.
