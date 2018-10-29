$(function (){
    peticion('https://swapi.co/api/planets/1/')
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })

})

function peticion(url, param){
    return new Promise(function(resolve, reject){
        $.ajax({
            type: "get",
            url: url,
            data: param,
            dataType: "json"
        })
        .done(function(datos){
            resolve(datos);
        })
        .fail(function(){
            reject("Error :")
        })
        .always(function(){
            console.log('Always')
        });
    })
}