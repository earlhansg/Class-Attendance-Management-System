

let studentFactory = function ($http, $q){
  const studentFactory = {};

  let register = (studentData) => {
    return $http.post('/api/register', studentData);
  };

  return { register };
};


export default studentFactory;
