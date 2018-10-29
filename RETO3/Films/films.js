function getPeliculas(url){
    return new Promise(function(resolve, reject){
        $.ajax({
            type: "GET",
            url: url,
            dataType: "Json",
        })
        .done(function(datos_peliculas){
            resolve(datos_peliculas)
            console.log("inicio")
        })
        .fail(function(error){
            reject(error)
        })
    })
}

function renderPeliculas(peliculas){
    var contenedor = $('#contenedorPeliculas');
    var pelis = peliculas.results;

    var conta = "";
    contenedor.empty();
    $.each(pelis, function(index, item){
        var aux = `<div class="col-md-3">
        <h4>${item.title}</h4>
        <p>Director: ${item.director}</p>
        <p>Episodio: ${item.episode_id}</p>
        </div>`; 

        contenedor.append(aux);
        
    });
}

getPeliculas('https://swapi.co/api/films/')
.then(function(peliculas){
    renderPeliculas(peliculas);
    console.log(peliculas);
})
.catch(function(err){
    console.log("Error :(")
})