var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Welcome to the index page');
});

module.exports = router;






/*
var express = require('express');
var path = require('path');
var app = express();

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '')));

// Define route to serve HTML file
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server running on port ' + port);
});*/
