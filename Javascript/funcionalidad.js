(function(){
    //variables
    var lista = document.getElementById("lista"),
     escribirTarea = document.getElementById("escribirTarea"),
     nuevaTarea = document.getElementById("agregarElemento"); //btn-agregar = agregarElemento

    //funciones
    var comprobarInput = function(){
       
    };
    var agregarTarea = function(){
        var tarea = escribirTarea.value;
        alert(tarea);
    };
    var eliminarTarea = function(){
        
    };

    //eventos

    escribirTarea.addEventListener("click",comprobarInput);
    nuevaTarea.addEventListener("click",  agregarTarea);

    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);
        
    }

}());

