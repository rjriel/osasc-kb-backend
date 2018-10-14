var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var picklistSchema = new Schema({
  name: 'String',
});

module.exports = mongoose.model('picklist', picklistSchema);
