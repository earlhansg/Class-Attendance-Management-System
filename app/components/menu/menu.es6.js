import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import menuComponent from './menu.component.es6';


let menuModule = angular.module('menu', [
  uiRouter
])

.config(($stateProvider, $locationProvider) => {
  $stateProvider
    .state('menu', {
      url: '/menu',
      template: '<menu></menu>'
    });
    $locationProvider.html5Mode(true);
})
// .config(function CheckForAuthenticatedUser($state, Auth){
//   var vm = this;
//   vm.loggedIn = Auth.isLoggedIn();
//     if(vm.loggedIn == true){
//       console.log('you have token');
//     }else $state.go('login');
// })

.component('menu', menuComponent());


export default menuModule;
