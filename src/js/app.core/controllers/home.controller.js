function HomeController (UserService, $http, urlConstant, $cookies) {

  let vm = this;

  let token = $cookies.get('token');
  let config = { headers: { 'X-AUTH-TOKEN': token } };

  $http.get(urlConstant.URL + '/me', config).then( (res) => {
    vm.bills = res.data.bills;
    vm.ownerAddress = res.data.address;
    vm.ownerFirstName = res.data.first_name;
    vm.ownerLastName = res.data.last_name;
    vm.roommates = res.data.roommates;
  });



}

HomeController.$inject = ['UserService', '$http', 'urlConstant', '$cookies'];

export { HomeController };
