

let studentFactory = function ($http){
  const studentFactory = {};

  let register = (studentData) => {
    return $http.post('/api/register', studentData);
  };
  let allStudents = (id) => {
    return $http.get('api/allStudents/' + id);
  };
  return { register, allStudents };
};


export default studentFactory;
