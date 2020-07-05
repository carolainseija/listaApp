1 //funciones para las listas
(function(){
    //variables
    var lista = document.getElementById("lista"),
     escribirTarea = document.getElementById("escribirTarea"),
     nuevaTarea = document.getElementById("agregarElemento"); 

    //funciones
    var comprobarInput = function(){
       escribirTarea.className = "";
       escribirTarea.setAttribute("placeholder" , "Agrega tu nueva tarea")
    };
    var agregarTarea = function(){
        var tarea = escribirTarea.value,
        nuevaTareaEscrita = document.createElement("li"),
        enlace = document.createElement("a"),
        contenido = document.createTextNode(tarea);

        if(tarea == "") {
            escribirTarea.setAttribute("placeholder", "agregue una tarea valida");
            escribirTarea.className = "error";
            return false;
        }
// agrego contenido, le agrego enlace, lo pongo dentro de "li"
        enlace.appendChild(contenido);
        enlace.setAttribute("href", "#");
        nuevaTareaEscrita.appendChild(enlace);
        lista.appendChild(nuevaTareaEscrita);
//borrar lo que escribiuna vez que se agrego a la lista
        escribirTarea.value = "";
     for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", function(){
            this.parentNode.removeChild(this);
        });
     }
    };

    var eliminarTarea = function(){
        this.parentNode.removeChild(this);
    };

    //eventos

    escribirTarea.addEventListener("click",comprobarInput);
    nuevaTarea.addEventListener("click",  agregarTarea);

    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);
    
        
    }

}());

2 //funciones para la imagen de Ajustes
function ajustes(variable){
    alert("Hola, estamos en reparacion, no se puede configurar")
  }

 //Funcion para la imagen de usuario
 function usuario(variable){
    alert(prompt("cual es su nombre?") + " " + "si decea cambia de usuario solo desinstale su app y vuelva a registrarla, por el momento no tenemos la opcion de \"volver a registrarse\"");
  }

//funcion para icono edscarga
function descarga(variable){
    alert("En un momento comenzara su descarga con la lista de tus tareas");
  }
