const compression = require('compression');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const { resolve } = require('path');

// Compress all HTTP responses
app.use(compression());

// MAIN
app.use(
  '/api/v1/main',
  createProxyMiddleware({
    target: 'http:/127.0.0.1:8021/api/v1/main',
    changeOrigin: true,
    pathRewrite: {
      [`^/api/v1/main`]: '',
    },
  })
);

// UPLOAD
app.use(
  '/api/v1/upload',
  createProxyMiddleware({
    target: 'http:/127.0.0.1:8050/api/v1/upload',
    changeOrigin: true,
    pathRewrite: {
      [`^/api/v1/upload`]: '',
    },
  })
);

// CDN
app.use(
  '/cdn',
  createProxyMiddleware({
    target: 'http:/127.0.0.1:8060',
    changeOrigin: true,
    pathRewrite: {
      [`^/cdn`]: '',
    },
  })
);

app.use(express.static('build'));

app.get('*', (req, res) => res.sendFile(resolve('build', 'index.html')));
app.listen(9011);
