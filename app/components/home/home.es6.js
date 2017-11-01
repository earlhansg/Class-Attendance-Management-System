import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import homeComponent from './home.component.es6';




let homeModule = angular.module('home',[
  uiRouter
])

.config(($stateProvider, $locationProvider) => {
  $stateProvider
    .state('profile.home',{
      url:'/home',
      template:'<home></home>'
    });
    $locationProvider.html5Mode(true);
})
.component('home', homeComponent());

export default homeModule;
