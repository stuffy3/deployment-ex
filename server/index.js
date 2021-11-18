const express = require("express")
const path = require('path')
const cors = require("cors")

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'b905aa43e0254b99a3205cf0639c5940',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const app = express();
app.use(express.json());
app.use(cors())

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'))
    rollbar.info("html file served successfully")
});

app.get('/stylesheet.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../stylesheet.css'))
    rollbar.info('css file loaded')
  })
  app.get('/server/pictures/ship.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '/pictures/ship.jpg'))
  })

 app.get('/buy', (req, res) => {
   res.sendFile(path.join(__dirname, "../buy.html"))
   rollbar.error("No such file exists")
   
 })

app.use(rollbar.errorHandler());

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Docked at port ${port}`)
})