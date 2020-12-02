const cantidadArticulos = 6;
var listadoArticulos = [];

const obtenerArticulos = async () => {
    const resultText = await fetch('http://newsapi.org/v2/top-headlines?country=co&apiKey=5f3c419ec6044044ac2462c9ad164194' ,{
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

var noticias = new Vue({
    el: '#noticias',
    data: {
        news: listadoArticulos
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