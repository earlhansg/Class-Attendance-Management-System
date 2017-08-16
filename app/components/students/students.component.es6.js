import './css/students-tmpl.min.css';
import template from './students-tmpl.html';
import controller from './students.controller.es6';

let studentsComponent = {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
};

export default studentsComponent;
