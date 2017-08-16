let authTokenFactory = function ($window) {

  let getToken = () => {
    return $window.localStorage.getItem('token');
  };

  let setToken = (token) => {
    if(token)
        $window.localStorage.setItem('token', token);
    else
        $window.localStorage.removeItem('token');
  };

  return { getToken, setToken };
};

export default authTokenFactory;
