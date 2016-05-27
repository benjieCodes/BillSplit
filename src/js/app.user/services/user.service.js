function UserService ($http, urlConstant, $cookies, $state) {

  this.register = register;
  this.login = login;
  this.authenticate = authenticate;

  function register (user) {
    $http.post(urlConstant.URL + '/users/new', user).then( (res) => {

    });
  }

  function login (user) {
    $http.post(urlConstant.URL + '/login', user).then( (res) => {
      $cookies.put('token', res.data.auth_token);
      $cookies.put('name', res.data.first_name);
    });
  }

  function authenticate (stateName) {
    let token = $cookies.get('token')

    if (token) {

    } else {
      if (stateName !== 'root.login' && stateName !== 'root.register')
      $state.go('root.login')
    }

  }
}

UserService.$inject = ['$http', 'urlConstant', '$cookies', '$state'];
export { UserService };
