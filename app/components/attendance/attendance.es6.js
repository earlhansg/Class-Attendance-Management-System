import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import attendanceComponent from './attendance.component.es6';

let attendanceModule = angular.module('attendance',[
  uiRouter
])

.config(($stateProvider, $locationProvider) => {
  $stateProvider
    .state('profile.attendance', {
      url: '/attendance',
      template: '<attendance></attendance>'
    });
    $locationProvider.html5Mode(true);
})
.component('attendance', attendanceComponent);

// .directive('datePicker', function() {
//     return {
//
//         }
//     };
// });

export default attendanceModule;
