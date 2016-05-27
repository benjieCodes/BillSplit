function AddBillsController (BillService) {

  let vm = this;
  // console.log(AddBillsController);

  vm.addBill = addBill

  function addBill (user) {
    BillService.add(user);
  }
  console.log(addBill);
}

AddBillsController.$inject = ['BillService'];
export { AddBillsController };
