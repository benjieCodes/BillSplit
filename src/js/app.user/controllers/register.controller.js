function RegisterController (UserService) {

  let vm = this;

  vm.registerUser = registerUser

  function registerUser (user) {
    UserService.register(user);
  }

}

RegisterController.$inject = ['UserService'];
export { RegisterController };
