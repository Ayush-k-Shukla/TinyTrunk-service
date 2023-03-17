import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import shortid from 'shortid';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const urlSchema = new mongoose.Schema({
  originalUrl: String,
  shortUrl: String,
});

const Url = mongoose.model('Url', urlSchema);

app.get('/shorten', async (req, res) => {
  const { url } = req.query;

  const shortId = shortid.generate();

  const newUrl = new Url({
    originalUrl: url,
    shortUrl: shortId,
  });

  console.log(`coming : ${url}`);
  console.log(`created id : ${shortId}`);

  await newUrl.save();

  res.send(`Short URL: http://localhost:${process.env.PORT}/${shortId}`);
});

app.get('/:shortId', async (req, res) => {
  const { shortId } = req.params;

  const url = await Url.findOne({ shortUrl: shortId });

  console.log(`req for : ${shortId}`);
  console.log(`found: ${url}`);

  if (url) {
    res.redirect(url.originalUrl);
  } else {
    res.status(404).send('Short URL not found');
  }
});

app.listen(process.env.PORT, () => {
  console.log('Server started on port 5000');
});
