var equiposNacionales = [
    {
        nombre: "Nacional",
        urlImage: "https://seeklogo.com/images/C/Club_Atl__tico_Nacional-logo-B34D1C41B9-seeklogo.com.png",
        dt: "Almidon",
        jugadores: ["Dairo Moreno", "Omar Duarte", "Yerson Candelo"],
        resenia: "Mejor conocido como Atlético Nacional",
        estadio: "Atanasio Girardot",
        estrellas:20,
        partidosJugados: 5,
        ganados: 4,
        empatados: 2,
        perdidos: 0,
        categoria:"A"
    },
    {
        nombre: "America",
        urlImage: "https://www.atlnacional.com.co/wp-content/uploads/2018/06/Escudo-del-Am%C3%A9rica-de-Cali.png",
        dt: "Juan Carlos",
        jugadores: ["Yoni Mosquera", "Diego Arboleda", "Jader Borja"],
        resenia: "Mejor conocido como America",
        estadio: "Estadio America",
        estrellas:"10",
        partidosJugados: 4,
        ganados: 7,
        empatados: 2,
        perdidos: 1,
        categoria:"A"
    },
    {
        nombre: "Millonarios",
        urlImage: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Escudo_de_Millonarios_F%C3%BAtbol_Club.svg",
        dt: "José Fernando",
        jugadores: ["Totono", "Mackleny"],
        resenia: "Mejor conocido como Millonarios",
        estadio: "Estadio Millonarios",
        estrellas:"15",
        partidosJugados: 3,
        ganados: 2,
        empatados: 0,
        perdidos: 1,
        categoria:"A"
    },   
    {                       
        nombre: "Tolima",
        urlImageB: "https://seeklogo.com/images/D/Deportes_Tolima-logo-41FF63827C-seeklogo.com.png",
        dt: "Juan José",
        jugadoresB: ["Andrés Cadavid", "Juan Guillermo", "Ayron del Valle"],
        reseniaB: "Mejor conocido como Tolima",
        estadio: "Estadio Tolima",
        estrellas:"15",
        partidosJugados: 7,
        ganados: 6,
        empatados: 2,
        perdidos: 6,
        categoria:"B"
    }, 
    {
        nombre: "Medellin",
        urlImage: "https://commons.wikimedia.org/wiki/File:Escudo_del_Deportivo_Independiente_Medell%C3%ADn.png",
        dt: "Leonardo Gomez",
        jugadores: ["David González", "Leonardo Fabio", "Ever Valencia"],
        resenia: "Mejor conocido como Medellin",
        estadio: "Estadio Medellin",
        estrellas:"10",
        partidosJugados: 8,
        ganados: 9,
        empatados: 2,
        perdidos: 5,
        categoria:"B"
    }, {
        nombre: "Pasto",
        urlImage: "http://www.futbolcolombiano.com.co/wp-content/uploads/2015/12/EscudoDeportivoPasto.png",
        dt: "David Solarte",
        jugadores: ["Mauricio Casierra", "Julio Agustin", "Sebantian Villota"],
        resenia: "Mejor conocido como Pasto",
        estadio: "Estado Pasto",
        estrellas:"14",
        partidosJugados: 2,
        ganados: 3,
        empatados: 1,
        perdidos: 0,
        categoria:"B"
    }      
]

var selEquipos = document.getElementById('equipos');
var selCategoria = document.getElementById('categoria');

var nombreEquipo = document.getElementById('nombre');
var urlImagen = document.getElementById('urlImage');
var direct = document.getElementById('dt');        
var jugadoresEquipo = document.getElementById('jugadores');
var reseniaEquipo = document.getElementById('resenia');        
var estadioEquipo = document.getElementById('estadio');        
var estrellasEquipo = document.getElementById('estrellas');
var cTable = document.getElementById('cuerpoTabla');
var filterCategoria;
selCategoria.onchange = function (){
var valor = this.value;
var auxE ="";
var auxT="";

/*ordena de menor a mayor*/
equiposNacionales.sort(function(a,b){
    if(a.ganados > b.ganados){
        return 1;
    }
    if(a.ganados < b.ganados){
        return -1;
    }
    return 0;
});

equiposNacionales.sort(function(a,b){
    if(a.perdidos > b.perdidos){
        return 1;
    }
    if(a.perdidos < b.perdidos){
        return -1;
    }
    return 0;
});
 /*filtra la categoria (A o B)*/
filterCategoria = equiposNacionales.filter(function(categ){
return categ.categoria == valor;
});

/*Selecciona diferentes datos del arreglo*/
filterCategoria.forEach(function(equi){  
    auxT += "<tr><td>"+equi.nombre+"</td><td>"+equi.dt+"</td><td>"+equi.ganados+"</td><td>"+equi.perdidos+"</td><td>";
});

nombreEquipo.innerHTML=auxE;
cTable.innerHTML=auxT;

}    