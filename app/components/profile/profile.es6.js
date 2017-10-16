import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import profileComponent from './profile.component.es6';


let profileModule = angular.module('profile',[
  uiRouter
])

  .config(($stateProvider, $locationProvider) => {
    $stateProvider
      .state('profile',{
        url:'/profile',
        template: '<profile></profile>'
      });
      $locationProvider.html5Mode(true);
  })
  .component('profile', profileComponent());

export default profileModule;
