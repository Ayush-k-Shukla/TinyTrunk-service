export const logRequest = (req, res, next) => {
  const ipAddress = req.ip;
  const requestedUrl = req.originalUrl;

  console.log(
    `[${new Date().toISOString()}] Client IP: ${ipAddress} - Requested URL: ${requestedUrl}`
  );
  next();
};
