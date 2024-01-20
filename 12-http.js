const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") res.end("Here is our short history");

  res.end(`<h1>Ooops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home </a>`);
});
server.listen(5000);

//req=incoming request yani clientin web sunucusuna yaptığı istek clientin(chrome,opera) (web tarayıcılarnın)  web serverdan web sayfasını istemesi
