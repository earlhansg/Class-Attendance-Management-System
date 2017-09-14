var User = require ('../models/user');
var Student = require('../models/student');
var Section = require('../models/section');
var Attendance = require ('../models/attendance');
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

  api.post('/addSection', function(req, res){
    var section = new Section ({
      created: req.body.created,
      sectioncode: req.body.sectioncode
    });
    section.save(function(err, data){
      if(err){
        res.send(err);
        return;
      }
      res.json({
        success: true,
        message: 'Section has been created',
        data: data
      });
    });
  });

  // api.put('/updateSection/:id', function(req, res){
  //   console.log('update section', req.body, req.params.id);
  // });

api.delete('/deleteSection/:id', function(req, res){

  Section.findByIdAndRemove({
    _id: req.params.id
  })
  .then(function(section){
    res.send(section);
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


// get sections
api.get('/sections', function(req, res){
  Section.find({}, function(err, sections){
    res.json(sections);
  });
});
// get students by section
api.get('/studentsbySection/:section', function(req, res){
  var section =  req.params.section;

  Student.find({ "section": section }, function(sectionData, err){
    console.log(section);
      if(err){
        res.send(err);
        return;
      }
      res.json(sectionData);

  });

});




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

api.get('/allStudents/:id', function(req, res){
  var createdId = req.params.id;

  Student.find({'created': createdId}, function(Students, err){

      if(err){
        res.send(err);
        return;
      }
      res.json(Students);
  });
});

api.get('/allSections/:id', function(req, res){

  var createdId = req.params.id;

  Section.find({'created': createdId}, function(Sections, err){
    if(err){
      res.send(err);
      return;
    }
    res.json(Sections);
  });
});


// edit Section
api.put('/updateSection/:id', function(req, res) {
  // console.log('earl');
  // console.log(req.body);
  // console.log(req.params);

  Section.findByIdAndUpdate(
  {
    _id: req.params.id
  },
  {
    $set:{
      sectioncode: req.body.sectioncode
    }
  },
  {
    upsert: false
  },
  function(err, newSection) {
    if(err){
      console.log('error occured');
    }
    else{
      res.send(newSection);
    }
  }

);
});

// Edit Student
api.put('/updateStudent/:id', function(req, res){
  console.log(req.body);
  Student.findByIdAndUpdate(
    {
      _id: req.params.id
    },
    {
      $set:{
        id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        sex: req.body.sex,
        section: req.body.section
      }
    },
    {
      upsert: false
    },
    function(err, updatedData){
      if(err){
        console.log("error occured");
      }
      else{
        res.send(updatedData);
      }
    }
  );
});


//Attendance
api.post('/attendance', function(req,res){
  console.log(req.body.students);
    var attendance = new Attendance ({
      date : req.body.date,
      students: req.body.students
    });


    attendance.save(function(err, data){
      console.log();
      if(err){
        res.send(err);
        return;
      }
      res.json({
        success: true,
        data: data
      });

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



  // api.get('/me', function(req, res){
  //   res.json(req.decoded);
  //
  // });
  return api;
};
