/**
 * The HTTP Module:
 *  - Lets us create and instantiate servers
 */

const http = require('http');

const server = http.createServer((req, res)=>{
    res.write('Welcom to the Home Page');
    res.end();
});

server.listen(5000);
