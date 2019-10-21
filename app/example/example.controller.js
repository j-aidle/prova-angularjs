angular.module('example')
    .controller('exampleController', [ '$scope', 'formulari', function exampleController($scope, formulari) {
      //console.log('controlador example')
        $scope.submitForm = (isValid) => {
            if (isValid) {
                formulari.post($scope.example);
            }
        };

        //inicialitzem el bot� com a fals per tant no apareix 
        $scope.desvelar = false;
        //Funci� per a canviar el valor de la variable
        $scope.desvelarFormulari = function (apareix) {

            if (apareix) {
                $scope.desvelar = false;
            }
            else {
                $scope.desvelar = true;
            }

        };

}]);

