
class StudentController {
  constructor(StudentFactory, $window){
    var vm = this;



    vm.user = JSON.parse($window.sessionStorage.getItem('response'));

    var id = vm.user.data.message.id;



    vm.init = function() {
      console.log('earl');

      StudentFactory.allStudents(id)
      .then(function(response){
        vm.Students = {};
        vm.message = response.data;
        console.log(vm.message);

      });
    };

    vm.init();

  }
}

export default StudentController;
