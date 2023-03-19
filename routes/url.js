import express from 'express';
import {
  convertToShortUrl,
  getCountOfVisits,
  gotoLongUrl,
} from '../controller/url.js';
const router = express.Router();

router.post('/shorten', convertToShortUrl);
router.get('/:shortId', gotoLongUrl);
router.get('/count/:shortId', getCountOfVisits);

export default router;
