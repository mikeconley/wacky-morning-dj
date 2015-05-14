var http = require("http");
var sfx = require("sfx");
var swig = require("swig");
var path = require("path");
var url = require("url");

// Make sure sounds.json exists, otherwise, tell folks they
// need to create it.

// Load in sounds.json.

// Start up our server - we're all set to go!
sfx.play("/System/Library/Sounds/Ping.aiff");

var indexTemplate = swig.compileFile(path.join(process.cwd(), "templates", "index.html"));

http.createServer(function(request, response) {
  var uri = url.parse(request.url).pathname;
  if (uri == "/") {
    var output = indexTemplate({
      hello: "Hello world!"
    });
    // The index - dump out the UI.
    response.writeHead(200);
    response.write(output);
    response.end();
    return;
  }

  console.log(uri);

}).listen(8000);