import './css/attendance-tmpl.min.css';
import template from './attendance-tmpl.html';
import controller from './attendance.controller.es6';

let attendanceComponent =  {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
};

export default attendanceComponent;
