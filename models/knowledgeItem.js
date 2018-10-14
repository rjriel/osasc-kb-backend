var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var knowledgeItemSchema = new Schema({
  title:  'String',
  user: {type: 'ObjectId', ref: 'user'},
  shortDesc: 'String',
  longDesc: 'String',
  knowledgeItemType: {type: 'ObjectId', ref: 'picklistitem'},
  knowledgeItemCategory: {type: 'ObjectId', ref: 'pickistitem'},
  created: {type: 'Date', default: Date.now},
  approved: {type: 'Boolean', default: false}
});

module.exports = mongoose.model('knowledgeitem', knowledgeItemSchema);
