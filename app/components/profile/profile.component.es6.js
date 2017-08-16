import './css/profile-tmpl.min.css';
import template from './profile-tmpl.html';
import controller from './profile.controller.es6';

let profileComponent = function(){
  return{
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default profileComponent;
