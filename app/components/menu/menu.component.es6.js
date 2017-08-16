import './css/menu-tmpl.min.css';
import template from './menu-tmpl.html';
import controller from './menu.controller.es6';

let menuComponent = ()  => {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default menuComponent;
