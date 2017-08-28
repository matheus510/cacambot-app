const express = require('express')
const dbServices = require('./services/db/index.js')
const app = express()

app.get('/', function (req, res) {
  res.send('segura peao!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})