// function config($stateProvider, $urlRouterProvider, $locationProvider) {
//   $locationProvider.html5Mode(true);
//
//   $urlRouterProvider.otherwise('/login');
//
//   $stateProvider
//     .state('main', {
//       url: '/',
//       template:'<user-Component></user-Component>',
//       // controller: 'MainCtrl',
//       title: ''
//     })
//     .state('login', {
//       url: '/login',
//       template:'<h1>Earl</h1>',
//       // controller: 'MainCtrl',
//       // title: ''
//     });
// }
//
// export default ['$stateProvider', '$urlRouterProvider', '$locationProvider', config];

export function AppRoutes ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('main', {
      url:'/',
      template: '<h1>Earl Genoso</h1>',
    })
    .state('login', {
      url:'/login',
      template: '<login></login>',
    });
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/login');
}
