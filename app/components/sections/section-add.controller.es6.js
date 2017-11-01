
class SectionAddController {
  constructor(SectionFactory, $window, $scope){
    var vm = this;
    // getting data in SessionStorage
    vm.user = JSON.parse($window.sessionStorage.getItem('response'));
    var id = vm.user.data.message.id;


    vm.addSection = function(){

      vm.sectionData.created = id;

        SectionFactory.addSection(vm.sectionData)
          .then(function(response){
            vm.sectionData = {};
            vm.sections.push(response.data.data);
          });
    };

    vm.selectDelete = function(sectionId, index) {
      vm.sectionId = sectionId;
      vm.index = index;
    };
    vm.deleteSection = function(){
        SectionFactory.deleteSection(vm.sectionId)
        .then(function(response){
          vm.sections.splice(vm.index, 1);
        });
    };
    // vm.deleteSection = function(sectionId, index){
    //     SectionFactory.deleteSection(sectionId)
    //     .then(function(response){
    //       vm.sections.splice(index, 1);
    //     });
    // };



    vm.selectEdit = function(section){
      vm.modalData = {};
      // vm.updateStat = true;
      vm.modalData._id = section._id;
      vm.modalData.created = id;
      vm.modalData.sectioncode = section.sectioncode;
    };


    vm.updateSection = function(){
      SectionFactory.editSection(vm.modalData)
      .then(function (response) {
        if(response.status == 200){
          console.log("success");
          vm.sections = vm.sections.map(function(data){
            return data._id == vm.modalData._id ? vm.modalData: data;
          });
        }
      });
    };



    vm.init = function() {

      SectionFactory.allSections(id)
      .then(function(response){
        vm.sectionData = {};
        vm.sections = response.data;
      });
    };

    vm.init();




  }

}

export default SectionAddController;
