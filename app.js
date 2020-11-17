var express = require('express')
var app = express()
var path = require('path')

app.use(express.static('public'))

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname + '/public/index.html'))
})
app.get('/resume', function (req, res) {
   res.sendFile(path.join(__dirname + '/public/resume.pdf'))
})

app.listen(8083, () => {
  console.log("Server running on port 8083")
})
