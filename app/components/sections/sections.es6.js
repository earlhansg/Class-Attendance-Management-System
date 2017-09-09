import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import sectionComponent from './sections.component.es6';

let sectionsModule = angular.module('section',[
uiRouter
])

.config(($stateProvider, $locationProvider) => {
  $stateProvider
    .state('profile.section', {
      url: '/section',
      template: '<section></section>'
    });
    $locationProvider.html5Mode(true);
})

.component('section', sectionComponent);
// .directive("checkboxGroup", function () {
//     return {
//         restrict: "A",
//         link: function (scope, elem, attrs) {
//             // Determine initial checked boxes
//             if (scope.array.indexOf(scope.student.id) !== -1) {
//                 elem[0].checked = true;
//             }
//
//             // Update array on click
//             elem.bind('click', function () {
//                 var index = scope.array.indexOf(scope.student.id);
//                 // Add if checked
//                 if (elem[0].checked) {
//                     if (index === -1) scope.array.push(scope.student.id);
//                 }
//                 // Remove if unchecked
//                 else {
//                     if (index !== -1) scope.array.splice(index, 1);
//                 }
//                 // Sort and update DOM display
//                 scope.$apply(scope.array.sort(function (a, b) {
//                     return a - b;
//                 }));
//             });
//         }
//     };
// });


export default sectionsModule;
