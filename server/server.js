/** ---------- DEPENDENCIES ---------- **/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
/** ---------- REQUIRED ROUTES ---------- **/
var messageRoute = require('./routes/message.route.js');


/** ---------- MIDDLEWARE ---------- **/
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json()); // needed for angular requests

/** ---------- EXPRESS ROUTES ---------- **/

app.use('/message', messageRoute);

/** ---------- GET STATIC INDEX HTML ---------- **/
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

/** -------- MONGOOSE CONNECTION --------**/
/** -------- CONNECTING TO message-board DB --------**/
var databaseUrl = 'mongodb://localhost:27017/messageboard';
mongoose.connect(databaseUrl);
/** -------- MONGOOSE CONNECTION SUCCESS --------**/
mongoose.connection.on('connected', function() {
  console.log('mongoose connected to : ', databaseUrl);
});
/** -------- MONGOOSE CONNECTION FAIL --------**/
mongoose.connection.on('error', function(err) {
  console.log('mongoose connection error: ', err);
});



/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
