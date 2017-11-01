import './css/home-tmpl.min.css';
import template from './home-tmpl.html';
import controller from './home.controller.es6';


let homeComponent = function(){
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default homeComponent;
