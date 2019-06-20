const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(
  '/static',
  express.static(path.resolve('dist'), { fallthrough: false })
);

app.get('/*', (req, res) => res.sendFile(path.resolve('./dist/index.html')));

app.listen(port, () => console.log(`Listening on ${port}`));
