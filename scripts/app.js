'use strict';
angular.module('univtr', ['ionic','ui.router','angular.filter'])

.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('app',{
        url:'/cursos',
        views:{
            'sidenav':{
                templateUrl: 'views/sidenav.html'
            },
            'content':{
                templateUrl: 'views/courses.html',
                controller: 'CourseCtrl'
            }
        }
    })

    .state('app.program', {
        url: '/program/:id',
        views:{
            'content@':{
                templateUrl: 'views/clases.html',
                controller: 'ProgramCtrl'
            }
        }
    })

    .state('app.program.class', {
        url: '/class/:program',
        views:{
            'content@':{
                templateUrl: 'views/classDetail.html',
                controller: 'ClassCtrl'
            }
        }
    })

    .state('app.program.exam', {
        url: '/exam/:exam',
        views:{
            'content@':{
                templateUrl: 'views/examen.html',
                controller: 'ExamCtrl'
            }
        }
    })

    .state('app.profile',{
        url: '/profile',
        views:{
            'content@':{
                templateUrl: 'views/profile.html',
                controller: 'ProfileCtrl'
            }
        }
    })

    .state('login', {
        url: '/login',
        views:{
            'content@':{
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            }
        }
    });
    $urlRouterProvider.otherwise('/login');
})

.run(function($ionicSideMenuDelegate, $ionicPlatform, $state){
    $ionicPlatform.registerBackButtonAction(function (event) {
        if($ionicSideMenuDelegate.isOpen){
            $ionicSideMenuDelegate.toggleLeft(false);
            if($state.current.name=="app" || $state.current.name=="login"){
                console.log("courses");
                navigator.app.exitApp();
            }
            else {
                console.log("whatever")
                navigator.app.backHistory();
            }
        }
    }, 100);
});