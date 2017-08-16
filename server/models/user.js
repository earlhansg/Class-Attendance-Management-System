var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema ({
  // id : Number,
  firstname: String,
  middlename: String,
  lastname: String,
  position: String,
  username: {
    type:String, required:true, index:{unique: true}
  },
  password: {
    type:String, required:true, secret:false
  }
});
// hashing password
UserSchema.pre('save', function(next){
  var user = this;
  if(!user.isModified("password"))
    return next();
  bcrypt.hash(user.password, null, null,
    function(err, hash){
      if(err) return next(err);
      user.password = hash;
      next();
  });
});

// compare Passoword

UserSchema.methods.comparePassword = function(password){
  var user = this;
  return bcrypt.compareSync(password, user.password);
};


module.exports = mongoose.model('User', UserSchema);
