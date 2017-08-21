
class SectionController {
  constructor(SectionFactory, $window){
    var vm = this;

    vm.user = JSON.parse($window.sessionStorage.getItem('response'));

    var id = vm.user.data.message.id;

    vm.init = function() {

      SectionFactory.allSections(id)
      .then(function(response){
        vm.Sections = {};
        vm.message = response.data;
        console.log(vm.message);
      });
    };

    vm.init();
  }
}

export default SectionController;
