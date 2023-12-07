import express from 'express';
import {
  convertToShortUrl,
  getCountOfVisits,
  gotoLongUrl,
} from '../controller/url.controller.js';
const router = express.Router();

router.post('/shorten', convertToShortUrl);
router.get('/:shortId', gotoLongUrl);
router.get('/count/:shortId', getCountOfVisits);

export default router;
