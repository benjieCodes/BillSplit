function AddBillsController (BillService) {

  let vm = this;
  // console.log(AddBillsController);

  vm.addBill = addBill

  function addBill (bill) {
    BillService.add(bill);
  }
  // console.log(addBill);
}

AddBillsController.$inject = ['BillService'];
export { AddBillsController };
