// Dependencies ==================
var
  express = require('express'),
  favicon = require('serve-favicon'),
  morgan = require('morgan'),
  pug = require('pug')
  app = express();

// Configuration ==================
var port = process.env.PORT || 8080;

// Middleeware ==================

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(favicon(__dirname + '/public/favicon.png'));    // to serve favicon
app.use(morgan('dev'));                                 //  logger
app.use(express.static(__dirname + '/public'));         // to serve static files

// Routes ==================
app.get('/', function(req,res){
  // GET HOME PAGE
  res.sendFile('index.html');
});

// Catch 404 errors and forward to Error Handlers
app.use(function(req,res,next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
})

// Error Handlers ==================

// development Error Handler
if(app.get('env') === 'development') {
  app.use(function(err,req,res,next){
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production Error Handler
// don't leak stack traces
app.use(function(err,req,res,next){
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// Server Startup ==================
app.listen(port, function(){
  console.log('Server Started at port: ' + port);
});
