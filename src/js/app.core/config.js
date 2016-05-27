function config ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.login', {
      url: '/login',
      templateUrl: 'templates/login.tpl.html',
      controller: 'LoginController as vm'
    })
    .state('root.register', {
      url: '/register',
      templateUrl: 'templates/register.tpl.html',
      controller: 'RegisterController as vm'
    })
    .state('root.roommates', {
      url: '/roommate',
      templateUrl: 'templates/roommate.tpl.html',
      controller: 'RoommateController as vm'
    })
    .state('root.addBill', {
      url:'/addBill',
      templateUrl: 'templates/bills.tpl.html',
      controller: 'AddBillsController as vm'
    })
  ;
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
