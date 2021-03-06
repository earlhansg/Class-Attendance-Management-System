
class ProfileController {
  constructor($state, authFactory, $window){
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

    vm.menu = function(){
      $state.go('menu');
    };
    vm.logout = function(){
      $window.localStorage.clear();
      $window.location.reload();
      sessionStorage.clear();
    };

  }
}

export default ProfileController;
