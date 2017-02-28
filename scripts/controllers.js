'use strict';
angular.module('univtr')

.controller('SideNavCtrl', ['$scope', '$ionicSideMenuDelegate', function ($scope, $ionicSideMenuDelegate) {
    $scope.toggleMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.close = function(){
        $ionicSideMenuDelegate.toggleLeft(false);
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
}]);
