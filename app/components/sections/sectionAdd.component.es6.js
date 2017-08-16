import './css/section-add-tmpl.min.css';
import template from './section-add-tmpl.html';
import controller from './section-add.controller.es6';

let sectionAddComponent =  {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
};

export default sectionAddComponent;
