

let studentFactory = function ($http){
  const studentFactory = {};
  const API_URL = '/api';

  let register = (studentData) => {
    return $http.post('/api/register', studentData);
  };
  let allStudents = (id) => {
    return $http.get('api/allStudents/' + id);
  };
  let editStudent = (data) => {
    console.log(data);
    const url = `${API_URL}/updateStudent/${data._id}`;

    return $http.put(url, data);
  };
  return { register, allStudents, editStudent };
};


export default studentFactory;
