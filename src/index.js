import angular from 'angular';
import ngResource from 'angular-resource';
import ngRouter from 'angular-ui-router';

import root from './app';
const app = angular.module('th-app', [ngRouter, ngResource])
            .config(function($urlRouterProvider) {
              $urlRouterProvider.otherwise('/');
            });
const topNode = document.getElementById('th-app');

root(app);

angular.element(topNode).ready(function() {
    angular.bootstrap(topNode, [app.name]);
});
