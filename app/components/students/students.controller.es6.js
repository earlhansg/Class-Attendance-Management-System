
class StudentController {
  constructor(StudentFactory, $window){
    var vm = this;


    vm.user = JSON.parse($window.sessionStorage.getItem('response'));

    var id = vm.user.data.message.id;


    vm.init = function() {

      StudentFactory.allStudents(id)
      .then(function(response){
        vm.students = response.data;
      });
    };

    vm.init();


vm.updatedStudent = {};

    vm.updateStudent = function(data){

      vm.updatedStudent._id = data._id;
      vm.updatedStudent.id = data.id;
      vm.updatedStudent.firstname = data.firstname;
      vm.updatedStudent.lastname = data.lastname;
      vm.updatedStudent.sex =  data.sex;
      vm.updatedStudent.section = data.section;

      StudentFactory.editStudent(vm.updatedStudent)
        .then(function(response){
          console.log("success");
        });
    };

  }
}

export default StudentController;
