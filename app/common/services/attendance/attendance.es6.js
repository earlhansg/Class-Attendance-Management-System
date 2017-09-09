import angular from 'angular';
import attendanceFactory from './attendance.factory.es6';

let attendanceServiceModule = angular.module('attendanceService', [])

.factory('AttendanceFactory', attendanceFactory);

export default attendanceServiceModule;
