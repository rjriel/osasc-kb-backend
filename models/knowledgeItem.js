var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var knowledgeItemSchema = new Schema({
  title:  'String',
  user: {type: 'ObjectId', ref: 'user'},
  shortDesc: 'String',
  longDesc: 'String',
  knowledgeItemType: {type: 'ObjectID', ref: 'pickListItem'},
  knowledgeItemCategory: {type: 'ObjectId', ref: 'pickListItem'},
  created: {type: 'Date', default: Date.now}
});

module.exports = mongoose.model('knowledgeItem', knowledgeItemSchema);
