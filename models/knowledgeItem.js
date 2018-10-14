var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var knowledgeItemSchema = new Schema({
  title:  'String',
  user: {type: 'ObjectId', ref: 'user'},
  shortDesc: 'String',
  longDesc: 'String',
  knowledgeItemType: {type: 'ObjectId', ref: 'picklistItem'},
  knowledgeItemCategory: {type: 'ObjectId', ref: 'pickistItem'},
  created: {type: 'Date', default: Date.now}
});

module.exports = mongoose.model('knowledgeitem', knowledgeItemSchema);
