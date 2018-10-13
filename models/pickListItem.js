var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var pickListItemSchema = new Schema({
  name:  String,
  pickListTypeId = ObjectId
});

module.exports = mongoose.model('pickListItem', pickListItemSchema);
