
class ProfileController {
  constructor($state, authFactory){
    console.log('im here in profile');
    var vm = this;

    vm.init = function() {
        vm.loggedIn = authFactory.isLoggedIn();
          if(vm.loggedIn == true){
            console.log('you have token');
          }
          else $state.go('login');
    };

    vm.init();

    vm.menu = function(){
      $state.go('menu');
    };

  }
}

export default ProfileController;
