angular.module('example')
    .controller('exampleController', [ '$scope', 'formulari', function exampleController($scope, formulari) {
      //console.log('controlador example')
        $scope.submitForm = (isValid) => {
            if (isValid) {
                formulari.post($scope.example);
            }
        };

        //inicialitzem el botó com a fals per tant no apareix 
        $scope.desvelar = false;
        //Funció per a canviar el valor de la variable
        $scope.desvelarFormulari = function (apareix) {

            if (apareix) {
                $scope.desvelar = false;
            }
            else {
                $scope.desvelar = true;
            }

        };

}]);

