require("http").createServer((inRequest, inResponse) => {
    inResponse.end("<h1 style='color:#cc0000;'>Welcome! Your IP Address is " + inRequest.connection.remoteAddress + "</h1><p>If your address begins with `ffff:`, it's an IPv4 address mapped through an IPv6 compliant system. Your IPv4 address, then, is the part of the address that comes after `ffff:`. Enjoy the remainder of your stay on this webpage. Toodles. <p>");
}).listen(9000);
