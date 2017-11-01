var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var StudentSchema = new Schema ({
  created:
  {
    type: Schema.ObjectId,
    ref: "User"
  },
  firstname: String,
  lastname: String,
  address: String,
  city: String,
  zipcode: Number,
  phone: Number,
  email: String,
  id: {
    type: String,
    required: true
  },
  dob: Date,
  section: {
    type: String,
    required: true
  },
  nickname: String,
  scholarship: String,
  sex: {
    type: String,
    required: true
  },

});

module.exports = mongoose.model('Student', StudentSchema);
