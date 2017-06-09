var connect = require('connect');
var server = require('serve-static');
connect().use(server(__dirname)).listen(8080, function () {
  console.log('running server on port 8080');
});
