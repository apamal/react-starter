const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '../client'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'));
});

app.listen(PORT, () => {
  console.log('Application is running on PORT:', PORT);
});

module.exports = app;
