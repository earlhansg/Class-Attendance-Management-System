var User = require ('../models/user');
var Student = require('../models/student');
var config = require ('../config/config');
// var secretKey = config.secretKey;
var jwt = require ('jsonwebtoken');
var mongoose = require ('mongoose');

mongoose.Promise = global.Promise;


// function createToken(user){
//   var token = jsonwebtoken.sign({
//     id: user._id,
//     firstname: user.firstname,
//     middlename: user.middlename,
//     lastname: user.lastname,
//     position: user.position,
//     username: user.username,
//     password: user.password
//   },secretKey,{
//     expiresIn:1440
//     // expiresInMinutes: 1440
//   });
//   return token;
// }


module.exports = function(app, express){

  var api = express.Router();



  api.post('/signup', function(req,res){
    var user = new User ({
      firstname: req.body.firstname,
      middlename: req.body.middlename,
      lastname: req.body.lastname,
      position: req.body.position,
      username: req.body.username,
      password: req.body.password
    });
      var token = jwt.sign(user, app.get('superSecret'), {
      expiresIn: 1440 // expires in 24 hours
      });
    user.save(function(err){

      if(err){
        res.send(err);
        return;
      }
      res.json({
        success: true,
        message:'User has been created!',
        token: token
        });

    });
  });

  api.post('/register', function(req, res){
    var student = new Student ({
      created: req.body.created,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      address: req.body.address,
      city: req.body.city,
      dob: req.body.dob,
      zipcode: req.body.zipcode,
      section: req.body.section,
      id: req.body.id,
      phone: req.body.phone,
      email: req.body.email,
      sex: req.body.sex
    });
    student.save(function(err, data){
      if(err){
        res.send(err);
        return;
      }
      res.json({
        success: true,
        message:'Student has been created!',
        data: data
        });
    });
  });

  api.post('/authenticate', function(req, res){
      //find user
      User.findOne({
        username: req.body.username
      }).select('_id firstname password').exec(function(err, user){
        // console.log(user);
        if(err) throw err;

        if(!user){
          res.send({message: "Authentication failed. User not found.", success:false});
        }
        else if (user){
          var validPassword = user.comparePassword(req.body.password);
          if(!validPassword){
            res.send({message: "Invalid password", success: false });
          }
          else{
            var token = jwt.sign(user, app.get('superSecret'), {
            expiresIn: 1440 // expires in 24 hours
            });
            res.json({
              success: true,
              message: {
              id : user._id,
              firstname: user.firstname,
              statusMessage: "Successfuly login",
              token: token
            },
              token: token
            });
            // res.send({message: "Successfuly login!.", status:true});
          }
        }
      });
    });

    // api.use(function(req, res, next) {
    //
    //   // check header or url parameters or post parameters for token
    //   var token = req.body.token || req.query.token || req.headers['x-access-token'];
    //
    //   // decode token
    //   if (token) {
    //
    //     // verifies secret and checks exp
    //     jwt.verify(token, app.get('superSecret'), function(err, decoded) {
    //       if (err) {
    //         return res.json({ success: false, message: 'Failed to authenticate token.' });
    //       } else {
    //         // if everything is good, save to request for use in other routes
    //         req.decoded = decoded;
    //         next();
    //       }
    //     });
    //
    //   } else {
    //
    //     // if there is no token
    //     // return an error
    //     return res.status(403).send({
    //         success: false,
    //         message: 'No token provided.'
    //     });
    //
    //   }
    // });
    //




// route to show a random message
api.get('/', function(req, res) {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

// route to return all users
api.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});




  // api.get('/me', function(req, res){
  //   res.json(req.decoded);
  //
  // });
      return api;
};
