'use strict';
angular.module('univtr', ['ionic','ui.router','angular.filter'])

.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('app',{
        url:'/',
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
        url: 'program/:id',
        views:{
            'content@':{
                templateUrl: 'views/clases.html',
                controller: 'ProgramCtrl'
            }
        }
    })

    .state('app.program.class', {
        url: 'program/class/:id?:program',
        views:{
            'content@':{
                templateUrl: 'views/classDetail.html',
                controller: 'ClassCtrl'
            }
        }
    });
    $urlRouterProvider.otherwise('/');
});