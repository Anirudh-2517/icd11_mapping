import { format } from 'url';

export const requestLogger = (req, res, next) => {
  const start = Date.now();
  const { method, originalUrl } = req;
  const url = format(originalUrl);

  console.log(`⮕ ${method} ${url}`);
  if (Object.keys(req.query).length > 0) {
    console.log('Query:', req.query);
  }

  // Log response
  const oldJson = res.json;
  res.json = function(data) {
    const duration = Date.now() - start;
    console.log(`✓ ${method} ${url} (${duration}ms) - Status: ${res.statusCode}`);
    if (res.statusCode >= 400) {
      console.error('Error response:', data);
    }
    return oldJson.apply(res, arguments);
  };

  next();
};

export const errorHandler = (err, req, res, next) => {
  console.error('❌ Error:', err);
  res.status(500).json({
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};