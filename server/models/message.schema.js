var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// created the messageSchema
var messageSchema = new Schema({
  name: String,
  memo: String
});

// export our model and creating a message collection in mongo
module.exports = mongoose.model('Message', messageSchema);
