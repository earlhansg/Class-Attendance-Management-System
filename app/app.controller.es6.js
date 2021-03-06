class AppController {
  constructor($state, $window, authFactory, AuthToken, $rootScope){
    var vm = this;

    // vm.click = function(){
    //   $state.go('menu');
    // };
    $rootScope.$on('$stateChangeStart', function() {
        vm.loggedIn = Auth.isLoggedIn();
      });

    vm.doLogin = function(){
      vm.error = '';

      authFactory.login(vm.loginData.username, vm.loginData.password)
        .then(function (response){
          vm.processing = false;

            if(response.data.success == true){
                $window.sessionStorage.setItem('response', JSON.stringify(response));
                $state.go('profile.home');

              } else {
                  vm.error = response.data.message.statusMessage;
                  console.log(vm.error);
                  vm.processing = true;
              }
      });
    };
  }
}

export default AppController;
