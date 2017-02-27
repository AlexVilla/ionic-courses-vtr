'use strict';
angular.module('univtr')

    .service('cursos', function() {

        var cursos = [{
            _id: 0,
            name: 'Instalaciones Domiciliarias',
            description: 'Curso para obtener la certificacion de Instalador',
            image: 'images/dom.jpg',
            videos: [{
                title: 'Clase 1',
                url: 'https://www.youtube.com/embed/sP_v_pWWN9s'
            },{
                title: 'Clase 2',
                url: 'https://www.youtube.com/embed/gzN5MlElXlo'
            },{
                title: 'Clase 3',
                url: 'https://www.youtube.com/embed/AtyANMl6vss'
            }]
        },{
            _id: 1,
            name: 'TV Cable',
            description: 'Curso para obtener la certificacion de TV Cable',
            image: 'images/cable.jpg',
            videos: [{
                title: 'Clase 1',
                url: 'https://www.youtube.com/embed/wByv6v7nzQk'
            },{
                title: 'Clase 2',
                url: 'https://www.youtube.com/embed/mhLLJeTZ-Y4'
            },{
                title: 'Clase 3',
                url: 'https://www.youtube.com/embed/AtyANMl6vss'
            }]
        },{
            _id: 2,
            name: 'Redes HFC',
            description: 'Curso para obtener la certificacion de redes HFC',
            image: 'images/hfc.jpg',
            videos: [{
                title: 'Clase 1',
                url: 'https://www.youtube.com/embed/p77wix1zbaI'
            },{
                title: 'Clase 2',
                url: 'https://www.youtube.com/embed/4skrLpnyR50'
            },{
                title: 'Clase 3',
                url: 'https://www.youtube.com/embed/-WZXetY_Tr8'
            }]
        }];


        this.getCourses = function() {
            return cursos;
        };

        this.getProgram = function(id){
            return cursos[id][videos];
        };

        this.getClases = function (id, video_id) {
            return cursos[id][videos][video_id];
        }
})