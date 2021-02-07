const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://hidden-dawn-56454.herokuapp.com',
      changeOrigin: true,
    })
  );
};