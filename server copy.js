var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./router');

var app = express();


app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '/static')));
app.use(express.static(path.join(__dirname, '/client/dist/client')))

routes.router(app);

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./client/dist/client/index.html"))
});

app.listen(8000, function(){
	console.log("So be it.");
})