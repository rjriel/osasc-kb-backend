var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pickListItemSchema = new Schema({
  name:  'String',
  pickListTypeId : 'ObjectId',
});

module.exports = mongoose.model('pickListItem', pickListItemSchema);
