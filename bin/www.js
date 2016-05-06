var app = require('../app')

// Configuration ==================
var port = process.env.PORT || 8080;

// Server Startup ==================
app.listen(port, function(){
  console.log('Server Started at port: ' + port);
});
