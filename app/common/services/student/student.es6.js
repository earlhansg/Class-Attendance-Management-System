import angular from 'angular';
import studentFactory from './student.factory.es6';

let studentServiceModuel = angular.module('studentService',[])

.factory('StudentFactory', studentFactory);



export default studentServiceModuel;
