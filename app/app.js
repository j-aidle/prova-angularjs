'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', ['ui.router', 'ngMaterial', 'ngMessages', 'home', 'header', 'example','chartGrid'])
    .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

        $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/home',
                views: {
                    'default': {
                        templateUrl: './home/home.template.html',
                        controller: 'homeController'
                    },
                    'header': {
                        templateUrl: './header/header.template.html',
                        controller: 'headerController'
                    }
                }
            });
        $stateProvider
            .state('example', {
                url: '/example',
                views: {
                    'default': {
                        templateUrl: './example/example.template.html',
                        controller: 'exampleController'
                    },
                    'header': {
                        templateUrl: './header/header.template.html',
                        controller: 'headerController'
                    }
                }
            });
        $stateProvider
            .state('chartGrid', {
                url: '/chartGrid',
                views: {
                    'default': {
                        templateUrl: './chartGrid/chartGrid.template.html',
                        controller: 'chartGridController'
                    },
                    'header': {
                        templateUrl: './header/header.template.html',
                        controller: 'headerController'
                    }
                }
            });

        $stateProvider
              .state('home.estat1', {
                  url: '/estat1',
                  templateUrl: 'indextable.html'
              });
          $stateProvider
              .state('home.estat2', {
                  url: '/estat2',
                  templateUrl: 'pg2.html'
              });

          $urlRouterProvider.otherwise('/home');

          $mdThemingProvider.theme('default').primaryPalette('light-green')
              .accentPalette('teal')
              .warnPalette('green')
            .backgroundPalette('grey');
          $mdThemingProvider.setDefaultTheme('default');

    })
    .controller("table", function ($scope) {
    $scope.names = [
        { name: 'Jani', age: 34, profession:'doctor' },
        { name: 'Hege', age: 25, profession:'plumber' },
        { name: 'Kai', age: 19, profession:'programmer' }
    ];
});
