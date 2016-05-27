function RootController (UserService) {

  let vm = this;
  vm.logout = logout;

  function logout () {
    UserService.logOut();
  }


}

RootController.$inject = ['UserService'];
export { RootController };
