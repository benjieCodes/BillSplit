function BillService ($http, urlConstant) {


  this.add = add

  function add (bills){
    console.log(bills);
  };

}

BillService.$inject = ['$http', 'urlConstant'];
export { BillService };
