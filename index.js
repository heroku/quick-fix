var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000');
  res.setHeader('Content-Security-Policy', "script-src 'self'");
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Xss-Protection', '1; mode=block');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

app.use(express.static('public'));

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('quickfix listening at http://%s:%s', host, port);
});
