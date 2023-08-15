const http = require("http");

const handleAllRequests = (requestobject, responseobject) => {
  console.log("Hi,I just received a request");
  const url = requestobject.url;
  if (url === "/") {
    responseobject.write("<h1>My home page</h1>");
  } else if (url === "/login") {
    responseobject.write("<h1>My Login page </h1>");
  } else if (url === "/signup") {
    responseobject.write("<h1>My signUp page</h1>");
  } else {
    responseobject.write("<h1>Page not found</h1>");
  }
  responseobject.end();
};
const server = http.createServer(handleAllRequests);

server.listen(3000, "127.0.0.1", () =>
  console.log("server is ready to accept request")
);
