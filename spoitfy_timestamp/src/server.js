const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res) {
    //NOTE: This assumes your index.html file is in the 
    // .    same location as your root application.
    const filePath = path.join(__dirname, 'index.html');
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': stat.size
    });

    var stream = fs.createReadStream(filePath);
    stream.pipe(res);
}).listen(8080);