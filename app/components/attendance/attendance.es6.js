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


// .directive('datepicker', function() {
//   return {
//     link: function(scope, el, attr) {
//       $(el).datepicker({
//         onSelect: function(dateText) {
//           console.log(dateText);
//           // how do i set this elements model property ?
//         }
//       });
//     }
//   };
// });

export default attendanceModule;
