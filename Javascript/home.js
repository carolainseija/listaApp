//home
   //funcion autoinvocada
   (function(){
    
    var formulario = document.getElementsByName("formulario")[0],
    elementos = formulario.elements,
    boton = document.getElementById("btn");


   var validarCorreo = function(e) {
       if(formulario.email.value == 0) {
           alert("completa el campo correo");
           e.preventDefault();
       }
   };

  

   var validarContraseña = function(e) {
       if(formulario.pwd.value ==  0) {
        alert("completa el campo de contraseña");
           e.preventDefault();
       }
   };

    var validar = function(e){
        validarCorreo(e);
        
        validarContraseña();

        if(validar = true) {
            
        }
    };

    formulario.addEventListener("submit", validar);

}())