const express = require("express")
const path = require('path')
const cors = require("cors")
const app = express()
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '9ab40165a66a4a168d87aed576f8c53e',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'))
});

app.get('/stylesheet.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../stylesheet.css'))
  })
  app.get('/ship.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '../ship.jpg'))
  })

app.use(rollbar.errorHandler());

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Docked at port ${port}`)
})