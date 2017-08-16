import './css/sections-tmpl.min.css';
import template from './sections-tmpl.html';
import controller from './sections.controller.es6';


let sectionComponent = {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
};

export default sectionComponent;
