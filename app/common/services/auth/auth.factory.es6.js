import AuthToken from './authToken.factory.es6';

let authFactory = function ($http, $q, AuthToken) {
  const authFactory = {};

  let login = (username,password) => {

    return $http.post('/api/authenticate',{
       username: username,
       password: password
     })
  //    .then(function (response){
  //      console.log(response.data.token);
  //      AuthToken.setToken(response.data.token);
  //      return response;
  //    });
  //  };
    .then(response => {
        AuthToken.setToken(response.data.message.token);
        return response;
    });
 };

  let logout = () => {
    AuthToken.setToken();
  };

  let isLoggedIn = () => {
    if(AuthToken.getToken()){
      return true;
      }
      else
      {
      return false;
      }
  };


  return {login, logout, isLoggedIn};
};

export default authFactory;
