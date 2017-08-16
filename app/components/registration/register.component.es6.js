import './css/register-tmpl.min.css';
import template from './register-tmpl.html';
import controller from './register.controller.es6';

let registerComponent =  {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true

};

export default registerComponent;
