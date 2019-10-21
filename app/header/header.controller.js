angular.module('header')
    .controller('headerController', function headerController($scope, $mdSidenav) {
        $scope.openSideNavPanel = function () {
            $mdSidenav('left').open();
        };
        $scope.closeSideNavPanel = function () {
            $mdSidenav('left').close();
        };
               
    });