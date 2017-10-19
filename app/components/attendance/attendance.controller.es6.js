
class AttendanceController {
constructor($filter, AttendanceFactory){
  var vm = this;

 // get the days by giving month and year
  vm.getDaysinMonth = function (month, year){
    return new Date(year, month, 0).getDate();
  };

// get data to the to UI and filter it then run the getDays()
  vm.getDate = function(){
      vm.month = $filter('date')(vm.date, "MM");
      vm.year = $filter('date')(vm.date, "yyyy");
      vm.output = vm.getDaysinMonth(vm.month, vm.year);
      vm.getDays();
      vm.getStudentAttendance();

  };

  vm.days = [];

// loop the number of days by month and year
  vm.getDays = function(){
    for(var i=0; i < vm.output; i++){
      vm.days.push(i+1);
    }
  };

// console.log(vm.month);
// vm.students = {};
  vm.getStudentAttendance = function () {
    AttendanceFactory.viewAttendance(vm.month)
      .then(function(response){
          let students = response.data;
          students.map(student => {
            return student.presentData.map(s => {
              s.students.day = parseInt(new Date(s.students.date).getDate() - 1);
            });
          });

          vm.students = students;
      });

  };




 }




}

export default AttendanceController;
