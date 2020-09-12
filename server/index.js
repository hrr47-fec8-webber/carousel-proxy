require('newrelic');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/../client')));
app.use('/:id', express.static(path.join(__dirname, '/../client')));

// Carousel
app.use('/api/images/:id', createProxyMiddleware({ target: 'http://3.15.189.69:4001', changeOrigin: true }));

// Booking service
app.use('api/booking/:id', createProxyMiddleware({ target: 'http://13.56.164.217', changeOrigin: true }));

// Reviews
app.use('/api/reviews/:id', createProxyMiddleware({ target: 'http://http://3.135.189.4:4002', changeOrigin: true }));

// More places
app.use('/residences', createProxyMiddleware({ target: 'http://35.168.8.22', changeOrigin: true }));

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});