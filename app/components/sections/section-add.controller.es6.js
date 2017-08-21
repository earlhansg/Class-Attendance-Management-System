
class SectionAddController {
  constructor(SectionFactory, $window){
    var vm = this;

    // getting data in SessionStorage
    vm.user = JSON.parse($window.sessionStorage.getItem('response'));
    var id = vm.user.data.message.id;
    vm.sections = [];

    vm.addSection = function(){

      vm.sectionData.created = id;

        SectionFactory.addSection(vm.sectionData)
          .then(function(response){
            vm.sectionData = {};
            vm.sections.push(response.data.data);
          });
    };

    vm.deleteSection = function(sectionId, index){
        SectionFactory.deleteSection(sectionId)
        .then(function(response){
          vm.sections.splice(index, 1);
        });
    };

    vm.selectEdit = function(section){
      vm.section = [];
      vm.updateStat = true;
      console.log(section);
      vm.section._id = section._id;
      vm.section.sectioncode = section.sectioncode;
    };

    vm.init = function() {

      SectionFactory.allSections(id)
      .then(function(response){
        vm.Sections = {};
        vm.sections = response.data;
      });
    };

    vm.init();

  }
}

export default SectionAddController;
