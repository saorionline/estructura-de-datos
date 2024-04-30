const http = require("http");

// create a server object
http
  .createServer((req, res) => {
    res.write("Hello from CodeSandbox!"); // write a response to the client
    res.end(); // end the response
  })
  .listen(8080, "0.0.0.0", () => {
    console.log("Server running at http://127.0.0.1:8080/");
    console.log("Server running at http://192.168.241.2:8080/");
    console.log("Server running at http://192.168.16.1:8080/");
  }); // the server object listens on port 8080
