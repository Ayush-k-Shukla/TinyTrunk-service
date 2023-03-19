import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
  originalUrl: String,
  shortUrl: String,
  count: Number,
});

const Url = mongoose.model('Url', UrlSchema);

export default Url;
