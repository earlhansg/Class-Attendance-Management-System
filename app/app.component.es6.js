import './css/app.tmpl.min.css';
import template from './app.tmpl.html';
import controller from './app.controller.es6';


let appComponent = () => {
  return{
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E'
  };
};

export default appComponent;
