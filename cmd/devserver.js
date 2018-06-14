/*
* Development server (for node.js minimalists)
* 
* options (environment variables or command line arguments)
* 
* PORT=port number (default: 8888)
* ROOT=root directory (default: 'site')
*/
const fs   = require('fs'),
      path = require('path'),
      http = require('http'),
      MimeType = {
        css: 'text/css',
        html: 'text/html',
        svg: 'image/svg+xml',
        png: 'image/png'
      },
      ErrorResponse = {
        EACCES: [403, 'Forbidden'],
        ENOENT: [404, 'Not found'],
        DEFAULT: [500, 'Internal server error']
      };

// Parse command line arguments
let Args = {};
process.argv.forEach((arg) => {
  const match = arg.match(/([A-Z]+)=(\S+)/);
  if (match) Args[match[1]] = match[2];
});
const PortNumber = Number(process.env.PORT || Args.PORT || 8888),
      RootPath   = process.env.ROOT || Args.ROOT || 'site';

// function: serve a file
function serveFile(res, url) {
  let mime   = MimeType[path.extname(url).substr(1).toLowerCase()]
               || 'text/plain',
      stream = fs.createReadStream(RootPath + url);
  stream.on('error', function(err) {
    let errRes = ErrorResponse[err.code] || ErrorResponse.DEFAULT;
    res.writeHead(errRes[0], {'Content-Type': 'text/plain'});
    res.end(`${errRes[0]} ${errRes[1]}`);
  });
  res.writeHead(200, {'Content-Type': mime});
  stream.pipe(res);
}

// start server
http.createServer((request, res) => {
  let url = request.url;
  if (url === '/') url = '/index.html';
  serveFile(res, url);
}).listen(PortNumber);
console.log(`serving '${RootPath}' on port ${PortNumber}`);
