
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import studentsComponent from './students.component.es6';

let studentModule = angular.module('student',[
  uiRouter
])

  .config(($stateProvider, $locationProvider) => {
    $stateProvider
      .state('profile.student', {
        url: '/student',
        template: '<student></student>'
      });
      $locationProvider.html5Mode(true);
  })
  .component('student', studentsComponent);


export default studentModule;
