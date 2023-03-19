import shortid from 'shortid';
import Url from '../models/url.js';

/**
 * Associate the given long url with short one
 *
 * @function convertToShortUrl
 * @async
 * @param {Object} req - contains url.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the function is finished.
 * @throws {Error} - If an error occurs while saving the URL.
 */
export async function convertToShortUrl(req, res) {
  const { url } = req.query;
  const shortId = shortid.generate();

  try {
    const newUrl = new Url({
      originalUrl: url,
      shortUrl: shortId,
      count: 0,
    });

    await newUrl.save();

    res.status(201).json({
      data: {
        shorturl: `http://localhost:${process.env.PORT}/${shortId}`,
        longurl: url,
      },
    });
  } catch (error) {
    res.status(500).json({ error: `Something went wrong` });
    throw new Error(`Failed to save URL: ${error.message}`);
  }
}

/**
 * Handle redirection to incoming shorturl request
 *
 * @function gotoLongUrl
 * @async
 * @param {Object} req - contains url.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the function is finished.
 * @throws {Error} - If an error occurs while navigating to the URL.
 */
export async function gotoLongUrl(req, res) {
  const { shortId } = req.params;

  let url = await Url.findOne({ shortUrl: shortId });
  url.count = url.count + 1;
  await Url.findByIdAndUpdate(url._id, url);

  if (url) {
    res.redirect(url.originalUrl);
  } else {
    res.status(404).send({ error: 'Short URL not found' });
    throw new Error(`Failed to redirect to URL: ${error.message}`);
  }
}

/**
 * get the count of url visits for url
 *
 * @function
 * @async
 * @param {Object} req - contains url.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the function is finished.
 */
export async function getCountOfVisits(req, res) {
  const { shortId } = req.params;

  const url = await Url.findOne({ shortUrl: shortId });

  if (url) {
    res.json({ data: { visitcount: url.count } });
  } else {
    res.status(404).send({ error: 'Short URL not found' });
    throw new Error(`Failed to fetch visits of URL: ${error.message}`);
  }
}
