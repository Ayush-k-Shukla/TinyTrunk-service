import shortid from 'shortid';
import Url from '../models/url.model.js';
import { handleServerError, handleSuccess } from '../utils/helper.js';
import { urlSchemaValidator } from '../utils/input-validation.js';

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
  const { error } = urlSchemaValidator.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const validationMessages = error?.details?.map((detail) => detail.message);
    return handleServerError(res, error, 400, validationMessages.join(','));
  }

  const { originalUrl } = req.body;

  const shortId = await getUniqueShortId();

  const alreadyEncodedUrl = await Url.findOne({
    originalUrl: originalUrl,
  });

  if (alreadyEncodedUrl) {
    return handleSuccess(res, alreadyEncodedUrl);
  }

  try {
    const newUrl = await Url.create({
      originalUrl: originalUrl,
      shortId: shortId,
      count: 0,
    });

    return handleSuccess(res, newUrl, 201);
  } catch (error) {
    return handleServerError(res, error);
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

  try {
    let url = await Url.findOne({ shortId: shortId });

    if (!url) {
      return handleServerError(res, {}, 404, 'Url not found');
    }

    url.count = url.count + 1;
    await Url.findByIdAndUpdate(url._id, url);

    res.status(302).redirect(url.originalUrl);
  } catch (error) {
    return handleServerError(res, error);
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

  try {
    const url = await Url.findOne({ shortId: shortId });

    if (!url) {
      handleServerError(res, {}, 404, 'Short url not found');
    }

    handleSuccess(res, url.count);
  } catch (error) {
    handleServerError(res, error);
  }
}

/**
 * Generate unique id for the URl schema short id
 *
 * @export
 * @return {*}
 */
export async function getUniqueShortId() {
  let shortId = shortid.generate();

  const found = await Url.findOne({ shortId: shortId });
  while (found) {
    shortId = shortid.generate();
  }

  return shortId;
}
