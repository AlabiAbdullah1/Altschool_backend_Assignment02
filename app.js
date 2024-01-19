const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method == "GET" && req.url == "/books") {
    res.write('Hello from GET "/books" ');
  }

  if (req.method == "PUT" && req.url == "/books") {
    res.write('Hello from PUT "/books"');
  }

  if (req.method == "DELETE" && req.url == "/books") {
    res.write('Hello from DELETE "/books"');
  }

  if (req.method == "GET" && req.url == "/books/author") {
    res.write('Hello from GET "/books/author"');
  }

  if (req.method == "POST" && req.url == "/books/author") {
    res.write('Hello from POST "/books/author"');
  }

  if (req.method == "PUT" && req.url == "/books/author") {
    res.write('Hello from PUT "/books/author"');
  }

  res.end();
});

server.listen(8900, () => {
  console.log("server running on port 8900...");
});
