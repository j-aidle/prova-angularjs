angular.module('serveis')
    .factory('formulari', () => {
        let funcions = {
            post: (answer) => {
                console.log(answer);
            }

        }

        return funcions;
    });