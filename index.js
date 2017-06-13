const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const index = express();

// Log requests to the console.
index.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
index.use(bodyParser.json());
index.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
index.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to my post it app.',
}));

module.exports = index;