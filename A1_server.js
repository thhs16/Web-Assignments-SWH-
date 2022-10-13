const http = require('http');
var fs= require('fs');
// const express= require('express');
// const app= express();

// app.use(express.static('public'));

function onRequest(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('./A1_server.html', null, function(error, data){
    if (error){
      res.writeHead(404);
      res.write('file not found!');
    }else {
      res.write(data);
    }
    res.end();
  });
}

const server = http.createServer(onRequest);
server.listen(8080);