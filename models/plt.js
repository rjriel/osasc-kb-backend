var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pltSchema = new Schema({
  name:  String,
});

module.exports = mongoose.model('PLT', pltSchema);
