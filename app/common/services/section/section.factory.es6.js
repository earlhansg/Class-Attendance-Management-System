
let sectionFactory = function ($http){
  const sectionFactory = {};
  const API_URL = '/api';

  let addSection = (sectionData) => {
    // return $http.post('/api/addSection', sectionData);
    const url = `${API_URL}/addSection/`;
    return $http.post(url, sectionData);
  };

  let allSections = (id) => {
    // return $http.get('api/allSections/' + id);
    const url = `${API_URL}/allSections/${id}`;
    return $http.get(url);
  };

  let deleteSection = (id) => {
    const url = `${API_URL}/deleteSection/${id}`;
    // return $http.delete('/api/deleteSection/' + id);
    return $http.delete(url);
  };

  let editSection = (data) => {
    console.log(data);
    const url = `${API_URL}/updateSection/${data._id}`;

    return $http.put(url, data);

    // return $http.put('/api/updateSection/' + data._id, data);

  };

  return { addSection, allSections, deleteSection, editSection };
};

export default sectionFactory;
