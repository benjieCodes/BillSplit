function UserService ($http, urlConstant) {

  this.register = register
  this.login = login
  function register (user) {
    $http.post(urlConstant.URL + '/users/new', user).then( (res) => {
      console.log(res);
    });
  }

  function login (user) {
    $http.post(urlConstant.URL + '/login', user).then( (res) => {
      console.log(res);
    });
  }
}

UserService.$inject = ['$http', 'urlConstant'];
export { UserService };
