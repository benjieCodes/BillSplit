import angular from 'angular';

import './app.core/index';
import './app.user/index';
import './app.roommate/index'
import './app.bills/index';

angular
  .module('app',['app.core','app.user','app.bills', 'app.roommate']);
