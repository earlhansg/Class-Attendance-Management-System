
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import registerComponent from './register.component.es6';

let registerModule = angular.module('register',[
  uiRouter
])


.config(($stateProvider, $locationProvider) => {
  $stateProvider
    .state('profile.register', {
      url: '/register',
      template: '<register></register>'
    });
    $locationProvider.html5Mode(true);
})

.component('register', registerComponent);

export default registerModule;
