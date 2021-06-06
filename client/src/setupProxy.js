const createProxyMiddleware = require("http-proxy-middleware");
const keys = require('../../config/keys');

module.exports = function (app) {
  app.use(
    "/api/*",
    createProxyMiddleware({ target: keys.API_BASE_URL })
  );
  app.use(
    "/callback",
    createProxyMiddleware({ target: keys.SPOTIFY_CALLBACKURL })
  );
};
