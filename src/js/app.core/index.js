import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import { urlConstant } from './url.constant';

import { config } from './config';

import  { RootController } from './controllers/root.controller'
import { HomeController } from './controllers/home.controller'

angular
  .module('app.core',['ui.router', 'ngCookies'])
  .constant('urlConstant', urlConstant)
  .config(config)
  .controller('RootController', RootController)
  .controller('HomeController', HomeController)
  .run(function ($rootScope, UserService) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      UserService.authenticate(toState.name)
    });
  })
;
