import angular from 'angular';
import Auth from './services/auth/auth.es6';
import Student from './services/student/student.es6';
import Section from './services/section/section.es6';


export default angular.module('app.common',[
  Auth.name,
  Student.name,
  Section.name
]);
