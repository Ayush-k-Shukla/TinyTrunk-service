import dotenv from 'dotenv';
dotenv.config();

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
// import { corsOptions } from './config/cors.js';
import { connectDB } from './config/db.js';
import { gotoLongUrl } from './controller/url.controller.js';
import { logRequest } from './middleware/logger.middleware.js';
import urlRoutes from './routes/url.route.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logRequest);
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : [],
  methods: 'GET,POST,PUT',
};
app.use(cors(corsOptions));

connectDB();

app.use('/api/v1/', urlRoutes);
app.use('/:shortId', gotoLongUrl); // need to setup for small url point

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

app.get('/', (req, res) => {
  res.send({ INFO: 'API of Url shortner service' });
});
