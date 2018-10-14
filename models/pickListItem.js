var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var picklistItemSchema = new Schema({
  name:  'String',
  picklistId: {type: 'ObjectId', ref: 'picklist'},
});

module.exports = mongoose.model('picklistitem', picklistItemSchema);
