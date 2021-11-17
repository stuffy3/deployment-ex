const express = require("express")
const path = require('path')

const app = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'))
});

app.get('/stylesheet.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../stylesheet.css'))
  })


const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Docked at port ${port}`)
})