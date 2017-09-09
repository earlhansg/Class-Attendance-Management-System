var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var AttendanceSchema = new Schema({
  date: Date,
  students: [
    {
      type: String,
      id: Schema.ObjectId,
      ref: "student"
    }
]
});


module.exports = mongoose.model('Attendance', AttendanceSchema);
