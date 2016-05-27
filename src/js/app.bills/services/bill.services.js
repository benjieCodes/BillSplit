function BillService ($http, urlConstant, $cookies) {


  this.add = add

  function add (bills){
    let token = $cookies.get('token');
    let config = {headers: {'X-AUTH-TOKEN': token}};

    console.log(bills);
    $http.post(urlConstant.URL + './bills', bills, config).then((res)=>{
      console.log(res);
    });
  };

}

BillService.$inject = ['$http', 'urlConstant', '$cookies'];
export { BillService };
