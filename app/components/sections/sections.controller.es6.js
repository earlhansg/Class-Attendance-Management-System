
class SectionController {
  constructor(SectionFactory, $window, $filter, AttendanceFactory){
    var vm = this;


    vm.currDate = new Date();
    vm.date = $filter('date')(vm.currDate, "fullDate");
    const date = $filter('date')(vm.currDate, "MM-dd-yyyy");

    vm.allSections = function (){

        SectionFactory.getSections()
        .then(function(response){
          vm.Sections = {};
          vm.dataSections = response.data;
        });

    };

    vm.allSections();

    vm.getStudentbySection = function (){
        SectionFactory.getStudentbySection(vm.sectioncode)
        .then(function(response){
          vm.studentsbySection =  response.data;

        });
    };

    vm.checkAttendance = function (){
      const students = [];

      for (let key in vm.selectedList) {
       if (vm.selectedList[key]) students.push({ id: key, isPresent: 1 });
      else students.push({ id: key, isPresent: 0});
      }

    const a = [];

      vm.studentsbySection.map(s => {
        students.map(studId => {
          if (s.id === studId.id) {
            if (studId.isPresent) {
              a.push({
                _id: s._id,
                id: s.id,
                fullName: `${s.firstname} ${s.lastname}`,
                isPresent: 1,
                date: date
              });
            }
            else {
              a.push({
                _id: s._id,
                id: s.id,
                fullName: `${s.firstname} ${s.lastname}`,
                isPresent: 0,
                date: date
              });
            }
          }
          // else {
          //   a.push({
          //     _id: s._id,
          //     id: s.id,
          //     fullName: `${s.firstname} ${s.lastname}`,
          //     isPresent: 0,
          //     date: date
          //   });
          // }
          //
        });
      });


      var data = {
        // date: new Date(),
        students : a
      };
      // console.log(students);
      console.log(data);


      AttendanceFactory.checkAttendance(data)
      .then(function(response){
        // console.log(response);
      });

    };


      // vm.getDaysinMonth = function (month, year){
      //   return new Date(year, month, 0).getDate();
      // };
      // console.log(vm.getDaysinMonth(2, 2017));
      // vm.getDate();



  }
}

export default SectionController;
