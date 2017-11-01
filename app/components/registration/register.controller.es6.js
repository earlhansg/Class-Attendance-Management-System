
class RegisterController {
  constructor(StudentFactory, $window){
  var vm = this;
  vm.success = false;
  console.log("register");

  // getting data in SessionStorage
  vm.user = JSON.parse($window.sessionStorage.getItem('response'));

  var id = vm.user.data.message.id;

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


  vm.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    vm.opened = true;
  };

  vm.dateOptions = {
    'year-format': "'yy'",
    'starting-day': 1
  };

  vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
  vm.format = vm.formats[0];
    }
}

export default RegisterController;
