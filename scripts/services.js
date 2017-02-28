'use strict';
angular.module('univtr')

    .service('cursos', function() {

        var cursos = [{
            _id: 0,
            name: 'Instalaciones Domiciliarias',
            description: 'Curso para obtener la certificacion de Instalador',
            image: 'images/dom.jpg',
            videos: [{
                _id: 0,
                title: 'Clase 1',
                description: 'tematica a tratar en la clase',
                notas: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum',
                image: 'images/dom.jpg',
                url: 'https://www.youtube.com/embed/sP_v_pWWN9s'
            },{
                _id: 1,
                title: 'Clase 2',
                description: 'tematica a tratar en la clase',
                notas: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum',
                image: 'images/dom.jpg',
                url: 'https://www.youtube.com/embed/gzN5MlElXlo'
            },{
                _id: 2,
                title: 'Clase 3',
                description: 'tematica a tratar en la clase',
                notas: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum',
                image: 'images/dom.jpg',
                url: 'https://www.youtube.com/embed/AtyANMl6vss'
            }]
        },{
            _id: 1,
            name: 'TV Cable',
            description: 'Curso para obtener la certificacion de TV Cable',
            image: 'images/cable.jpg',
            videos: [{
                _id:0,
                title: 'Clase 1',
                description: 'tematica a tratar en la clase',
                image: 'images/cable.jpg',
                url: 'https://www.youtube.com/embed/wByv6v7nzQk'
            },{
                _id:1,
                title: 'Clase 2',
                description: 'tematica a tratar en la clase',
                image: 'images/cable.jpg',
                url: 'https://www.youtube.com/embed/mhLLJeTZ-Y4'
            },{
                _id:2,
                title: 'Clase 3',
                description: 'tematica a tratar en la clase',
                image: 'images/cable.jpg',
                url: 'https://www.youtube.com/embed/AtyANMl6vss'
            }]
        },{
            _id: 2,
            name: 'Redes HFC',
            description: 'Curso para obtener la certificacion de redes HFC',
            image: 'images/hfc.jpg',
            videos: [{
                _id: 0,
                title: 'Clase 1',
                description: 'tematica a tratar en la clase',
                notas: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum',
                image: 'images/hfc.jpg',
                url: 'https://www.youtube.com/embed/p77wix1zbaI'
            },{
                _id: 1,
                title: 'Clase 2',
                description: 'tematica a tratar en la clase',
                notas: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum',
                image: 'images/hfc.jpg',
                url: 'https://www.youtube.com/embed/4skrLpnyR50'
            },{
                _id: 2,
                title: 'Clase 3',
                description: 'tematica a tratar en la clase',
                notas: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum',
                image: 'images/hfc.jpg',
                url: 'https://www.youtube.com/embed/-WZXetY_Tr8'
            }]
        }];

        this.getCourses = function() {
            return cursos;
        };

        this.getProgram = function(index){
            return cursos[index];
        };

        this.getClases = function (video_id, program) {
            var videos = this.getProgram(program).videos;
            return videos[video_id];
        }
})