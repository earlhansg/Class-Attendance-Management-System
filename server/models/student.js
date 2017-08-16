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
  dob: Date,
  zipcode: Number,
  section: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  phone: Number,
  email: String,
  sex: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('Student', StudentSchema);
