function UserService ($http, URL) {

  this.register = register

  function register (user) {
    $http.post(URL.URL + '/users/new', user).then( (res) => {
      console.log(res);
    })
  }

}

UserService.$inject = ['$http', 'URL'];
export { UserService };
