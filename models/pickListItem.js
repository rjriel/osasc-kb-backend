var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var picklistItemSchema = new Schema({
  name:  'String',
  picklistId : 'ObjectId',
});

module.exports = mongoose.model('picklistitem', picklistItemSchema);
