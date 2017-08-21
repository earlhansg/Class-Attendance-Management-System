var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var SectionSchema = new Schema ({
  created:
  {
    type: Schema.ObjectId,
    ref: "User"
  },
  sectioncode: String
});

module.exports = mongoose.model('Section', SectionSchema);
