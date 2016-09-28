function validarFormulario(){
	var registrarse= true;
	var expRegnombres y apellidos= /^[a-záéíóúñ\s]+$/i;
	var expRegasuario=/^[a-záéíóúñ\s]+$/i;
	var expRegemail=/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
	var expRegDNI=/[0-8]{8}$/;
	var nombres y apellidos=document.getElementById("nombres y apellidos");
	var usuario=document.getElementById("usuario");
	var email=document.getElementById("email");
	var DNI=document.getElementById("DNI");
	var formulario=document.getElementById("formulario");

	if (!nombres y apellidos.value){
		alert("ingrese sus nombres y apellidos");
		registrarse= false;
		nombres y apellidos.focus();
	}
	else if(!expRegNombre.exec(nombres y apellidos.value)){
		alert("Este campo solo admite letras a-zA-Z");
		registrarse= false;
		nombres y apellidos.focus();
	}
	else if (!usuario.value){
		alert("ingrese su apellido");
		registrarse= false;
		usuario.focus();	
	}
	else if(!expRegApellido.exec(usuario.value)){
		alert("Este campo solo admite letras a-zA-Z");
		registrarse= false;
		usuario.focus();
	}
	else if (!email.value){
		alert("ingrese su email");
		registrarse= false;
		email.focus();	
	}
	else if(!expRegEmail.exec(email.value)){
		alert("ingrese un email valido");
		registrarse= false;
		email.focus();
	}
	else if (!DNI.value){
		alert("ingrese su DNI");
		registrarse= false;
		DNI.focus();	
	}
	else if(!expRegDNI.exec(DNI.value)){
		alert("Este campo solo admite numeros");
		registrarse= false;
		DNI.focus();
	}
	if (registrarse){
		document.formulario.submit();
	}
}

window.onload=function(){
	var botonEnviar=document.getElementById("registrarse");
	botonEnviar.onclick=validarFormulario;
}