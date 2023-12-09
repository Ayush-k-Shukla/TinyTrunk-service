import mongoose from 'mongoose';
import { request } from 'supertest';
import router from '../routes/url.route';

describe('Url Controller Test', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI_TEST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('[convertToShortUrl] should create a new short URL', async () => {
    const originalUrl = 'https://example.com';

    const response = await request(router)
      .post('/api/convertToShortUrl')
      .send({ originalUrl });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('originalUrl', originalUrl);
    expect(response.body).toHaveProperty('shortId', 'abc123');
    expect(response.body).toHaveProperty('count', 0);
  });
});
