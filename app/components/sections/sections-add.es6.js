
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import sectionAddComponent from './sectionAdd.component.es6';

let sectionsAddModule = angular.module('sectionsAdd',[
  uiRouter
])

.config(($stateProvider, $locationProvider) => {
  $stateProvider
    .state('profile.section-add', {
      url: '/section-add',
      template: '<section-add></section-add>'
    });
    $locationProvider.html5Mode(true);
})
.component('sectionAdd', sectionAddComponent);

export default sectionsAddModule;
