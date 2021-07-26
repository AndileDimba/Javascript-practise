var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello My World!');
  res.end();
}).listen(8080);