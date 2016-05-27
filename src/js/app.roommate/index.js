import angular from 'angular';

import { RoommateController } from './controllers/roommate.controller';

import { RoommateService } from './services/roommate.service'

angular
  .module('app.roommate', [])
  .controller('RoommateController', RoommateController)
  .service('RoommateService', RoommateService)
;
