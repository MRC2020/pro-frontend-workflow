var url = require('url');
var http = require('http');


var server = http.createServer(function (request, response) {
    var url_parts = url.parse(request.url, true);
    console.log(url_parts.query.message);
    
    response.writeHead(200);
    response.end();
});

server.listen(8080, function () {
    console.log("listening on el'porto 8080")
});