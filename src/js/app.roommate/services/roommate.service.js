function RoommateService ($http, urlConstant, $cookies) {

  this.add = add;

  function add (roommate) {
    let token = $cookies.get('token');
    let config = { headers: { 'X-AUTH-TOKEN': token } };

    $http.post(urlConstant.URL + '/roommates', roommate, config).then( (res) => {
    })
  }

}

RoommateService.$inject = ['$http', 'urlConstant', '$cookies'];
export { RoommateService };
