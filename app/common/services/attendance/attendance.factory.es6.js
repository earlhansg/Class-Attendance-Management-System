
let attendanceFactory = function($http) {
  const attendanceFactory = {};
  const API_URL = '/api';

  let checkAttendance = (data) => {
    const url = `${API_URL}/attendance/`;
    return $http.post(url, data);
  };

  return { checkAttendance };
};

export default attendanceFactory;
