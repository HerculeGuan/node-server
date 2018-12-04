var http = require('http')
var fs = require('fs')
http.createServer(function(req, res){
    switch (req.url) {
        case '/jirengu':
        res.end(JSON.stringify({"name":"Sherlock", "age":20}))
        break;
        case '/README.md':
        res.end( fs.readFileSync(__dirname + '/README.md'))
        break;
        default:
        res.end( fs.readFileSync(__dirname + '/sample' + req.url))
    }
}).listen(8080)
