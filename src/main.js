const http = require('http');
const index = require('../index'); // The express app we just created

const port = parseInt(process.env.PORT, 10) || 8000;
index.set('port', port);

const server = http.createServer(index);
server.listen(port);