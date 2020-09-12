const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3012;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log(`Connected to port: ${PORT}`);
})