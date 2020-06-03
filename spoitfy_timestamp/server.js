const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 3000;
let check = 0;

// __dirname + req.url


// creates a working version, but is most likely not the proper way. bypassing error but not addressing it
const server = http.createServer(function (req, res) {
    if(req.url === '/favicon.ico') return; // url to icon that is not stored locally so throws error to server
    
    if(check === 0){ // the first pass of a request url doesnt have the file name included so redirect url hardcodes index.html as the returning point
        console.log("### " + __dirname + req.url + '\n');
        check++;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile(__dirname + req.url , function (error, data) {
            if(error) {
                console.log(error);
                res.writeHead(404);
                res.writeHead('Error: File Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else { // all other passes have complete file path so "__dirname" is removed and req.url is the file extension
        console.log("### " + req.url + '\n');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile(req.url , function (error, data) {
            if(error) {
                console.log(error);
                res.writeHead(404);
                res.writeHead('Error: File Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
    }
});

server.listen(port, function(error) {
    if(error) {
        console.log('something went wrong', error);
    } else {
        console.log('Server is listenting on port ' + port);
    }
});


// var static = require('node-static');
// var http = require('http');

// var file = new(static.Server)();

// http.createServer(function (req, res) {
//   file.serve(req, res);
// }).listen(8080);