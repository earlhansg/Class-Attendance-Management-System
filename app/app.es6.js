require('./reset.less');

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';


import AppComponent from './app.component.es6';
import AppController from './app.controller.es6';
import Components from './components/component.es6';
import Common from './common/common.es6';

// import UserLogin from './user/login/userlogin.es6';

// import appConfig from './config.es6.js';
// import appConfig from './router/app-route.js';
// import {AppRoutes} from './router/router-config.es6.js';


angular.module('app', [
  uiRouter,
  Components.name,
  Common.name,
])
  .directive('app', AppComponent)
  .controller('AppController', AppController)
  .config(($stateProvider, $locationProvider, $urlRouterProvider) => {
    $stateProvider
      .state('login', {
        template: '<app></app>',
      });
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('login');

  })
  .config(function($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');
  })
  .controller('MainCtrl', function($rootScope, authFactory){
    $rootScope.$on('$stateChangeStart', function() {
        vm.loggedIn = authFactory.isLoggedIn();

        console.log("enter change route");


      });
  });
