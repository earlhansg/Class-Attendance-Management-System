import AuthToken from './authToken.factory.es6';

let authInterceptorFactory = function ($q, $state, AuthToken) {

  let request = (config) => {
    var token = AuthToken.getToken();
     if(token){
       config.headers['x-access-token'] = token;
     }
     return config;
   };

   let responseError = (response) => {
     if(response.status == 403)
        $state.go('login');
      return $reject(response);
   };

  return { request, responseError };
};

export default authInterceptorFactory;
