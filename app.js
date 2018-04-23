var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function (req, res) {
    res.render('index');
});

app.listen(port);
console.log('The App runs on port ' + port);