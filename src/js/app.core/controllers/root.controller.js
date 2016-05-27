function RootController (UserService, $http, urlConstant, $cookies) {

  let vm = this;
  vm.logout = logout;

  function logout () {
    UserService.logOut();
  }

  let token = $cookies.get('token');
  let config = { headers: { 'X-AUTH-TOKEN': token } };

    $http.get(urlConstant.URL + '/bills', config).then( (res) => {

    });



}


RootController.$inject = ['UserService', '$http', 'urlConstant', '$cookies'];
export { RootController };
