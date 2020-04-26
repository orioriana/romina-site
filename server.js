const express = require("express");
const http = require("http");
const path = require("path");
const compression = require('compression')
const fs = require('fs');
const spdy = require('spdy');
var serveIndex = require('serve-index'); // For SSL certificate installation
// const key = fs.readFileSync('./ssl/private.key');
// const cert = fs.readFileSync('./ssl/certificate.crt');
// const ca = fs.readFileSync('./ssl/ca_bundle.crt');
// const optionsHttps = {
//     key,
//     cert,
//     ca,
//     spdy: {
//         protocols: [ 'h2', 'spdy/3.1', 'http/1.1' ],
//         plain: false
//     }
// }
const app = express();

const PORT_http = 80; 
// const PORT_https = 443; 
const server_http = http.createServer(app);
// const server_https = spdy.createServer(optionsHttps,app);

//Gzip compression
app.use(compression());

//Redirections

// function redirect(req, res, next) {
//     if ( req.headers.host.indexOf('www.') > -1 ) { //If there's 'www.'
//         var newHost = req.headers.host.replace('www.','') //Get rid of 'www.'
//         return res.redirect(301, 'https://' + newHost + req.originalUrl); //Deliver https
//     }
//     if (req.protocol === 'http' ) { //If 'http' is requested
//         var newHost = req.headers.host.replace('www.','') //Get rid of 'www.'
//         return res.redirect(301, 'https://' + newHost + req.originalUrl); //Deliver https
//     }
//     next();
// };
// app.set('trust proxy', true);
// app.use(redirect);


//Serve static

app.use('/.well-known', express.static('.well-known'), serveIndex('.well-known')); // For SSL certificate installation
app.use('/css', express.static(__dirname + '/public/css', { maxAge: 2592000000 }));
app.use('/js', express.static(__dirname + '/public/js', { maxAge: 2592000000 }));
app.use('/assets', express.static(__dirname + '/public/assets', { maxAge: 31557600 })); 


//Routes

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

//Start Server

server_http.listen(PORT_http, () => {
    console.log(`Server started at port ${PORT_http}`);
})
// server_https.listen(PORT_https, () => {
//     console.log(`Secure Server started at port ${PORT_https}`);
// })

