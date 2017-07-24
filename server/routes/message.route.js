var express = require('express');
var router = express.Router();
var messages = require('../models/message.schema.js');

router.get('/', function(req, res) {
  // find all documents in our messages collection
  messages.find({}, function(err, data) {
    console.log('inside message get route');
    if(err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

router.post('/', function(req, res) {
  console.log('log the data: ', req.body);

  // create an object instance from our Message model
  var addMessage = new Message(req.body);

  // insert into our messages collection
  addMessage.save(function(err, data) {
    console.log('saved data:', data);
    if(err) {
      console.log('save error: ', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });

});

module.exports = router;
