
class ProfileController {
  constructor($state, authFactory){
    console.log('im here in profile');
    var vm = this;
    // vm.nav = 'visited';

    vm.init = function() {
        vm.loggedIn = authFactory.isLoggedIn();
          if(vm.loggedIn == true){
            console.log('you have token');
          }
          else $state.go('login');
    };

    vm.init();

    vm.click = function(element){
      console.log(element);
    };

  }
}

export default ProfileController;
