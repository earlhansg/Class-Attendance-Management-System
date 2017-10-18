import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import attendanceComponent from './attendancebysection.component.es6';



let attendancebysectionModule = angular.module('attendancebysection',[
  uiRouter
])

.config(($stateProvider, $locationProvider) => {
  $stateProvider
    .state('attendance',{
      url:'/attendancebySection',
      template:'<attendancebysection></attendancebysection>'
    });
    $locationProvider.html5Mode(true);
})
.component('attendancebysection', attendanceComponent());

export default attendancebysectionModule;
