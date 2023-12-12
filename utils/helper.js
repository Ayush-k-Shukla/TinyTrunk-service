/**
 * Handles the error response from the server
 *
 * @param {*} res
 * @param {*} error
 * @param {number} [status=500]
 * @param {string} [customMessage='Internal Server Error']
 */
export function handleServerError(
  res,
  error,
  status = 500,
  customMessage = 'Internal Server Error'
) {
  console.error(error);

  res.status(status).json({ error: customMessage });
}

/**
 * Handle the success response from the server
 *
 * @export
 * @param {*} res
 * @param {*} [data=null]
 * @param {number} [status=200]
 */
export function handleSuccess(res, data = null, status = 200) {
  res.status(status).json({
    status: 'success',
    data: data,
  });
}
