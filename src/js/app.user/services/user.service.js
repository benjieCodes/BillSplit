function UserService () {

  this.register = register

  function register (user) {
    console.log(user);
  }

}

UserService.$inject = [];
export { UserService };
