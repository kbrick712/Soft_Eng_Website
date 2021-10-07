var http = require('http');
var path = require('path');

var express = require('express');
var x = express();
var server = http.createServer(x);

x.use(express.static(path.resolve(__dirname, './client')));

console.log('Starting the server...')
server.listen(process.env.PORT || 1337, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server started, listening at:", addr.address + ":" + addr.port);
});
