var datosperfil={};
        function getRequestGit(){
           var peticion  = new  XMLHttpRequest();
           peticion.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    datosperfil = JSON.parse(this.responseText)
                    document.getElementById('nombre').innerHTML = datosperfil.name
                    document.getElementById('biografia').innerHTML = datosperfil.bio
                    document.getElementById('company').innerHTML = datosperfil.company
                    document.getElementById('location').innerHTML = datosperfil.location
                    var imagen=document.getElementById('avatar');
                    imagen.setAttribute('src',datosperfil.avatar_url)
                    console.log(datosperfil);
                        //document.getElementById("renderajax").innerHTML = this.responseText;
                    renderRepositorios(datosperfil.received_events_url);
                 }
              }
                peticion.open('GET','https://api.github.com/users/ZuleimaHormigaG',true);
                peticion.send();
           }
            document.addEventListener("DOMContentLoades", function(event){
                console.log("Página cargada");
                getRequestGit();
    });
        function renderRepositorios(url){
            var data = [];
            var req = new XMLHttpRequest();
            req.onreadystatechange = function (){
                if(this.readyState == 4 && this.status == 200){
                    data = JSON.parse(this.responseText);
                   // document.getElementById('repositorios').innerHTML = this.responseText;        

                    data.forEach(element => {
                        var nombre = element.type;
                        document.getElementById('id_event').innerHTML = nombre;

                        console.log(nombre);
                    });
                
                 }
            }
            req.open('GET', url, true)
            req.send();
        }