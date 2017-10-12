var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var AttendanceSchema = new Schema({
  // date: Date,
  // id: {
  //   type: Schema.ObjectId,
  //   ref: "Student"
  // },

//   students: [
//     {
//       type: String,
//       // id: Schema.ObjectId,
//       // ref: "User",
//       fullname: String,
//       isPresent: Boolean,
//       date: Date
//     }
// ]
    students:
    [
      {
        // type: Array,
        _id:{
          type: Schema.ObjectId,
          ref: "Student"
        },
        id : String,
        fullName: String,
        isPresent: Boolean,
        date: Date
      }
    ]
});


module.exports = mongoose.model('Attendance', AttendanceSchema);
