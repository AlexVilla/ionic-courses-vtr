'use strict';
angular.module('univtr')

    .controller('VtrCtrl', ['$scope', 'cursos', function($scope, $timeout, $ionicModal, cursos, $ionicSideMenuDelegate) {

        //obtener todos los cursos
        $scope.cursos = cursos.getCourses();

        //obtener todas las clases de un curso determinado (programa del curso)
        $scope.program= cursos.getProgram(id);

        //obtener el detalle del curso, acceso al video incluido
        $scope.class = cursos.getClases(id, video);

        $scope.toggleCursos = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
    }])