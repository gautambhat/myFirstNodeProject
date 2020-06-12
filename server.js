require("http").createServer((inRequest, inResponse) => {
    inResponse.end("<h1 style='color:#cc0000;'>Finally, I wrote a server!</h1>");
}).listen(9000);
