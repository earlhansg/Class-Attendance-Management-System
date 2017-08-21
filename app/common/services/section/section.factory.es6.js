
let sectionFactory = function ($http){
  const sectionFactory = {};

  let addSection = (sectionData) => {
    return $http.post('/api/addSection', sectionData);
  };

  let allSections = (id) => {
    return $http.get('api/allSections/' + id);
  };

  let deleteSection = (id) => {
    return $http.delete('/api/section/' + id);
  };
  let editSection = (data) => {
    return $http.put('/api/section/', data.id, data);
  };

  return { addSection, allSections, deleteSection, editSection };
};

export default sectionFactory;
