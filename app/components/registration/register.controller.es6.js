
class RegisterController {
  constructor(StudentFactory, $window){
  var vm = this;
  vm.success = false;
  console.log("register");

  // getting data in SessionStorage
  vm.user = JSON.parse($window.sessionStorage.getItem('response'));

  var id = vm.user.data.message.id;
  console.log(id);
  
  vm.doRegister = function (){
    vm.message = '';
    vm.studentData.created = id;

      StudentFactory.register(vm.studentData)
        .then(function(response){
          vm.success = true;
          vm.studentData = {};
          vm.message = response.data.message;

        });
      };
    }
}

export default RegisterController;
