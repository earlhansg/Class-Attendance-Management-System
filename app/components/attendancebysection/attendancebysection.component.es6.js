import './css/attendancebysection-tmpl.min.css';
import template from './attendancebysection-tmpl.html';
import controller from './attendancebysection.controller.es6';


let attendancebysectionComponent = function(){
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default attendancebysectionComponent;
