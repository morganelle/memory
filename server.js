'use strict';

// Dependencies
const express = require('express');
const app = express();

// Defining port
const PORT = process.env.PORT || 3000;

// Resources as an argument for app.use()
app.use(express.static('./public'));

// Routes
app.get('/', function(request, response) {
  response.sendFile('index.html', {root: './public'});
});

// Logs message for port
app.listen(PORT, function() {
  console.log('app running on', PORT);
});
