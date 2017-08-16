import angular from 'angular';
import authFactory from './auth.factory.es6';
import authTokenFactory from './authToken.factory.es6';
import authInterceptorFactory from './authInterceptor.factory.es6';

let authServiceModule = angular.module('authService', [])

.factory('authFactory', authFactory)
.factory('AuthToken', authTokenFactory)
.factory('AuthInterceptor', authInterceptorFactory);

export default authServiceModule;
