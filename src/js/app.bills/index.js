import angular from 'angular';

import { AddBillsController } from './controllers/addbill.controller';

import { BillService } from './services/bill.services';


angular
  .module('app.bills', [])
  .controller('AddBillsController', AddBillsController)
  .service('BillService', BillService)
;
