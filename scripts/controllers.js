'use strict';
angular.module('univtr')

.controller('SideNavCtrl', ['$scope', '$ionicSideMenuDelegate', '$state', function ($scope, $ionicSideMenuDelegate, $state) {
    $scope.toggleMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.close = function(){
        $ionicSideMenuDelegate.toggleLeft(false);
    };

    $scope.endSesion = function(){
        $ionicSideMenuDelegate.toggleLeft(false);
        $state.go('login')
    };
}])

.controller('CourseCtrl', ['$scope', 'cursos', function ($scope, cursos) {
    //obtener todos los cursos -- OK
    $scope.cursos = cursos.getCourses();
}])
.controller('ProgramCtrl', ['$scope', 'cursos', '$stateParams', function ($scope, cursos, $stateParams) {
    $scope.program = cursos.getProgram(parseInt($stateParams.id), 10);
}])
.controller('ClassCtrl',['$scope', 'cursos', '$stateParams', '$sce', function ($scope, cursos, $stateParams, $sce) {
    $scope.class = cursos.getClases(parseInt($stateParams.id, 10), parseInt($stateParams.program, 10));

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }
}])
.controller('ProfileCtrl', ['$scope', 'cursos', function ($scope, cursos) {
    $scope.cursos = cursos.getCourses();
}])

.controller('ExamCtrl', ['$scope', 'cursos', '$stateParams', '$ionicPopup', function ($scope, cursos, $stateParams, $ionicPopup) {
    $scope.respuestas = {};
    $scope.exam = cursos.getExam(parseInt($stateParams.id, 10), parseInt($stateParams.exam, 10));
    $scope.evaluar = function(){
        var alertPopup = $ionicPopup.confirm({
            title: 'Enviado',
            template: '¿Está seguro de enviar su examen?',
            okText: 'Si',
            cancelText: 'No'
        });

        alertPopup.then(function (res) {
            if (res){
                navigator.app.backHistory();
            }else{
                alertPopup.close()
            }
        });
    }
}])
.controller('LoginCtrl', ['$scope', 'LoginService', '$state', '$ionicPopup', function($scope, LoginService, $state, $ionicPopup){
    $scope.data = {};

    $scope.login = function() {
        //console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
        LoginService.loginUser($scope.data.username, $scope.data.password)
            .success(function ($data) {
                $state.go('app');
            })
            .error(function ($data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Ups!',
                    template: 'Revisa tus credenciales de acceso, al parecer algo no concuerda'
                });
            })
    }
}]);

