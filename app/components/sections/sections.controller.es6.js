
class SectionController {
  constructor(SectionFactory, $window, $filter, AttendanceFactory){
    var vm = this;

    vm.currDate = new Date();
    vm.date = $filter('date')(vm.currDate, "fullDate");



    vm.allSections = function (){

        SectionFactory.getSections()
        .then(function(response){
          vm.Sections = {};
          vm.dataSections = response.data;
          // console.log(vm.dataSections);
        });
    };

    vm.allSections();

    vm.getStudentbySection = function (){

        SectionFactory.getStudentbySection(vm.sectioncode)
        .then(function(response){
          // console.log(response.data);
          vm.studentsbySection =  response.data;
        });
    };

    // vm.selectedList = [];
    vm.checkAttendance = function (){
      console.log(vm.selectedList);
      const students = [];

      for (let key in vm.selectedList) {
       if (vm.selectedList[key]) students.push({ _id: key });
      }

      var data = {
        date: new Date(),
        students
      };
      console.log(data);

      AttendanceFactory.checkAttendance(data)
      .then(function(response){
        console.log(response);
      });

    };

  }
}

export default SectionController;
