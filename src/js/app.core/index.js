import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import { urlConstant } from './url.constant';

import { config } from './config';

angular
  .module('app.core',['ui.router', 'ngCookies'])
  .constant('urlConstant', urlConstant)
  .config(config)
  .run(function ($rootScope, UserService) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      UserService.authenticate(toState.name)
    });
  })
;
