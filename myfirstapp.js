
/* 
AUTHOR:Tazar Chriss
The following are the steps to be followed in order to execute this app
-Save the file on your computer: C:\Users\Your Name\myfirst.js
- Navigate to the folder that contains the file "myfirst.js", the command line interface window should look something like this:
- =>C:\Users\Your Name>_
- Initiate "myfirst.js":
C:\Users\Your Name>node myfirst.js
-Start your internet browser, and type in the address: http://localhost:8080*/
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080); 

