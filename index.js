import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { corsOptions } from './config/cors.js';
import { connectDB } from './config/db.js';
import urlRoutes from './routes/url.js';

dotenv.config();

const app = express();

app.use(cors(corsOptions));

connectDB();

app.use('/api/v1/', urlRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

app.get('/', (req, res) => {
  res.send({ INFO: 'API of Url shortner service' });
});
