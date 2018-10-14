var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username:  'String',
  organization: 'String',
  password: 'String',
  role: 'String',
  name: 'String',
  created: {type: 'Date', default: Date.now}
});

module.exports = mongoose.model('user', userSchema);
