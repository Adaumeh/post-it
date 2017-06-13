'use strict';

var http = require('http');
var index = require('../index'); // The express app we just created

var port = parseInt(process.env.PORT, 10) || 8000;
index.set('port', port);

var server = http.createServer(index);
server.listen(port);