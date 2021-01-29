require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/test', (req, res) => {
  res.send('test!')
})

app.listen(process.env['PORT'] || 9000);