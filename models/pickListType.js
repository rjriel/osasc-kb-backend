var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pickListTypeSchema = new Schema({
  name:  String,
});

module.exports = mongoose.model('pickListType', pickListTypeSchema);
