import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema(
  {
    originalUrl: { type: String, required: true },
    shortId: { type: String, unique: true, required: true },
    count: Number,
    activeTill: Date,
  },
  { timestamps: true }
);

UrlSchema.index({ shortId: 1 }, { unique: true }, { name: 'shortIdIndex' });
UrlSchema.index({ originalUrl: 'text' }, { name: 'originalUrlIndex' });

const Url = mongoose.model('Url', UrlSchema);

export default Url;
