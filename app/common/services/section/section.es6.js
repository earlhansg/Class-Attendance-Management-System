import angular from 'angular';
import sectionFactory from './section.factory.es6';

let sectionServiceModule = angular.module('sectionService', [])

.factory('SectionFactory', sectionFactory);


export default sectionServiceModule;
