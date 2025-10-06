

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('Hello World');
}).listen(8080);  // Port number this is listening for 