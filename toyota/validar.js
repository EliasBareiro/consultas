function validar(){
	var nombres y apellidos, usuario, dni, contraseña, esxpresion;
	nombres y apellidos = document.getElementById("nombres y apellidos").value;
	usuario = document.getElementById("usuario").value;
	dni = document.getElementById("dni").value;
	contraseña = document.getElementById("contraseña").value;

	if(nombres y apellidos === "" || usuario === "" || dni === "" || contraseña === ""){
		alert("Todos los campos son obligatorios");
		return false;
	}
	else if(nombres y apellidoss y apellidos.length>60){
		alert("Los nombres y apellidos son demasiado largo");
		return false;
	}
	else if(usuario.length>30){
		alert("El usuario es demasiado largo");
		return false;
	}
	else if(dni.length>8){
		alert("El dni es demasiado largo");
		return false;
	}
	else if(contraseña.length>20){
		alert("El contraseña es demasiado largo");
		return false;
	}
	else if(isNaN(dni)){
		alert("El DNI solo debe contener numeros");
		return false;
	}
}
