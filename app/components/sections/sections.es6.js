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


export default sectionsModule;
