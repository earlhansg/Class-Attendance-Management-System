
class AttendancebysectionController {
  constructor($state, $window, $filter, authFactory, AttendanceFactory, StudentFactory){
    var vm = this;


    // vm.user = JSON.parse($window.sessionStorage.getItem('response'));
    //
    // var id = vm.user.data.message.id;

    vm.getDaysinMonth = function (month, year){
      return new Date(year, month, 0).getDate();
    };

    vm.menu = function(){
      $state.go('menu');
    };

    vm.getDate = function(){

      vm.month = $filter('date')(vm.date, "MM");
      vm.year = $filter('date')(vm.date, "yyyy");
      vm.output = vm.getDaysinMonth(vm.month, vm.year);
      vm.getDays();
      vm.getStudentAttendance();
    };

    vm.days = [];

    vm.getDays = function(){
      for(var i=0; i < vm.output; i++){
        vm.days.push(i+1);
      }
    };

    vm.getStudentAttendance = function(){
      AttendanceFactory.viewAttendance(vm.month)
      .then(function(response) {
        let students = response.data;

        students.map(student => {
          return student.presentData.map(s => {
            s.students.day = parseInt(new Date(s.students.date).getDate() - 1);
          });
        });

        vm.students = students;
        console.log(vm.students);
      });
    };


  }
}

export default AttendancebysectionController;
