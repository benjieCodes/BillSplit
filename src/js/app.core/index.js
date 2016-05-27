import angular from 'angular';
import 'angular-ui-router';

import { urlConstant } from './url.constant';

import { config } from './config';

angular
  .module('app.core',['ui.router'])
  .constant('urlConstant', urlConstant)
  .config(config)
;
