'use strict';

/**
 * @ngdoc overview
 * @name testOfMoe2App
 * @description
 * # testOfMoe2App
 *
 * Main module of the application.
 */
angular
  .module('testOfMoe2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularCSS'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl',
        controllerAs: 'test'
      })
      .when('/index', {
        templateUrl: 'views/index.html',
        controller: 'IndexCtrl',
        controllerAs: 'index',
        css: 'styles/main.css'
      })
      .when('/connexion', {
        templateUrl: 'views/connexion.html',
        controller: 'ConnexionCtrl',
        controllerAs: 'connexion',
        css: 'styles/connexion.css'
      })
      .when('/inscription', {
        templateUrl: 'views/inscription.html',
        controller: 'InscriptionCtrl',
        controllerAs: 'inscription'
      })
      .when('/inscription', {
        templateUrl: 'views/inscription.html',
        controller: 'InscriptionCtrl',
        controllerAs: 'inscription',
        css: 'styles/inscription.css'
      })
      .otherwise({
        redirectTo: '/index'
      });
  });
