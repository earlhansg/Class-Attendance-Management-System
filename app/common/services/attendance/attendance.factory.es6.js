
let attendanceFactory = function($http) {
  const attendanceFactory = {};
  const API_URL = '/api';

  let checkAttendance = (data) => {
    // console.log('factory');
    // console.log(data);
    const url = `${API_URL}/attendance`;
    return $http.post(url, data);
  };

  let viewAttendance = (month) => {
    const url = `${API_URL}/studentByAttendance/${month}`;
    return $http.get(url);

  };

  return { checkAttendance, viewAttendance };
};

export default attendanceFactory;
