const cantidadArticulos = 20;
var listadoArticulos = [];

const obtenerArticulos = async () => {
    const resultText = await fetch('http://newsapi.org/v2/top-headlines?country=co&category=technology&apiKey=5f3c419ec6044044ac2462c9ad164194' ,{
    method:'GET',
    });
    let articulosJSON = await resultText.json();
    if(resultText.ok){
        for (let index = 0; index < cantidadArticulos; index++) {
            listadoArticulos.push([
                articulosJSON.articles[index].title,
                articulosJSON.articles[index].description,
                articulosJSON.articles[index].urlToImage,
                articulosJSON.articles[index].url,
                articulosJSON.articles[index].publishedAt,
                                ])
        }
    }
}
obtenerArticulos();


//parte de estudiantes
let est1 = {
    codigo: 1,
    nombre: 'Lucas Mera',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    rol: 'Desarrollador backend',
    image: 'path/to/image'
    };


    //DOCUMENTACION DE VUE
    //https://es.vuejs.org/v2/guide/syntax.html
var noticias = new Vue({
    el: '#noticias',
    data: {
        news: listadoArticulos,
    }
  })

var estudiantesVue = new Vue({
    el: '#estudiantes',
    data: {
        estudiante:est1
    }
  })
/*
var noticias = new Vue({
    el: '#noticias',
    data: {
        news: [
        { Titular: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  })
  */