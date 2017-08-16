class MenuController {
  constructor($state, $rootScope, authFactory, $scope, $window) {
    var vm = this;

    // vm.user = JSON.parse($window.sessionStorage.getItem('response'));
    //
    // console.log(vm.user);

    // var id = vm.user.data.message.id;

    vm.click = function(){
      $state.go('profile');
    };

    vm.init = function() {
        vm.loggedIn = authFactory.isLoggedIn();
          if(vm.loggedIn == true){
            // console.log('you have token');
          }
          else $state.go('login');
    };

    vm.init();

    // $rootScope.$on('$stateChangeStart', function() {
    //     vm.loggedIn = authFactory.isLoggedIn();
    //
    //     console.log("enter change route");
    //     // authFactory.getUser()
    //     //     .then(function(response){
    //     //       vm.user = response.data;
    //     //     });
    //   });
  }
}

export default MenuController;
