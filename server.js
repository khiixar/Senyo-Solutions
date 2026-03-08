const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(compression());
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));

app.use((req, res, next) => {
  if (req.path !== '/' && !path.extname(req.path)) {
    req.url = '/pages' + req.url + '.html';
  }
  next();
});

app.use(express.static(path.join(__dirname)));

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});