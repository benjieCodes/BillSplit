function RoommateController (RoommateService) {

  let vm = this;
  vm.addRoommate = addRoommate;

  function addRoommate (roommate) {
    RoommateService.add(roommate)
  }

}

RoommateController.$inject = ['RoommateService'];
export { RoommateController };
