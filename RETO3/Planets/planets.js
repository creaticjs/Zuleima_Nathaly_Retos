var datosPlanets = {};

function getPlanets(url){
    return new Promise(function(resolve, reject){
        var httpX = new XMLHttpRequest();
        httpX.onload = function(){
        resolve(JSON.parse(this.responseText));  
        datosPlanets = JSON.parse(this.responseText);  
            
        console.log(nombre);
        }
        httpX.onerror = function(){
            reject(Error ('NO hay respuesta'));
        }
        
        httpX.open('GET', url, true);
        httpX.send();
    });
}
 getPlanets('https://swapi.co/api/planets/1/')
 .then(function(planet){
     console.log(planet.name);      
     document.getElementById('nombre').innerHTML = data.name;
     return getPlanets('https://swapi.co/api/people/1/');

 })
 .then(function(planet1){
     console.log(planet1.name);
     return getPlanets('https://swapi.co/api/people/2/');
 })
 .then(function(planet2){
     console.log(planet2.name);
     return getPlanets('https://swapi.co/api/people/4/')
 })
 
         
 