var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs=require("fs");
    var conten=fs.readFileSync("index.html");
    var buffer=new Buffer(content, "utf-8");
    response.send(buffer.to.String());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

