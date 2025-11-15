const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const staticRoot = path.join(__dirname, '..', 'public');
const blockedPaths = new Set([
  '/server.js',
  '/Dockerfile',
  '/package.json',
  '/.dockerignore'
]);

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false
  })
);
app.use(compression());

app.use((req, res, next) => {
  if (blockedPaths.has(req.path)) {
    return res.sendStatus(404);
  }
  return next();
});

app.use(
  express.static(staticRoot, {
    index: 'index.html',
    extensions: ['html'],
    maxAge: '1d',
    dotfiles: 'ignore',
    setHeaders: (res, resourcePath) => {
      if (resourcePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache');
      }
    }
  })
);

app.get('*', (req, res) => {
  res.sendFile(path.join(staticRoot, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`ImSanty portfolio running on port ${PORT}`);
});
