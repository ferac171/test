/*##############################################################################################################################*/

// PROCESOS LOAD: CARGA SCRIPT DEV/PRD
// USUARIO: TODOS
//
// NAME		: FCC_CONTROL.JS
	
	const FCC_CONTROL_VERSION_LOCAL = "1.0";
	const FCC_CONTROL_FECHA_LOCAL= "05/12/18";

/*############################################################################################################################*/


/*############################################################################################################################*/
//MENSAJE DE VERSION
/*############################################################################################################################*/

console.log("# CONTROL V:"+FCC_CONTROL_VERSION_LOCAL + " al "+FCC_CONTROL_FECHA_LOCAL);
/*

<script type="text/javascript"src="https://rawgit.com/ferac171/test/master/FCC_CONTROL.JS"></script>
<script type="text/javascript">FCC_JSC("PUB_ALU");</script>

*/


/*
<link rel="stylesheet" type="text/css" href="https://rawgit.com/ferac171/test/master/FCC_EMPRESAS.CSS"> 
<link rel="stylesheet" type="text/css" href="https://rawgit.com/ferac171/test/master/FCC_PUBLICACIONES.CSS">

*/




// IDENTIFICANDO QUE PAGINA CARGAR
var FCC_FUENTE_DEV;
var FCC_FUENTE_PRD;

function FCC_JSC(FCC_ESQUEMA){
	
var FCC_ESQUEMA_ACTUAL = FCC_ESQUEMA;

	FCC_LOCAL_SRC(FCC_ESQUEMA)
	FCC_CARGA_SCRIPT_DEV(FCC_FUENTE_DEV,FCC_FUENTE_PRD);

}

//CARGANDO SCRIPT EN PAGINA
	
function FCC_CARGA_SCRIPT_DEV(FCC_FUENTE_DEV, FCC_FUENTE_PRD){
	
var script = document.createElement( "script" );
	script.type = "text/javascript";
	script.src = FCC_FUENTE_DEV;
	script.onload = function () {console.log("[CARGA DEV] : " + FCC_FUENTE_DEV);};
	script.onerror = function () {FCC_CARGA_SCRIPT_PRD(FCC_FUENTE_PRD);};
	document.getElementsByTagName('head')[0].appendChild(script);
}

function FCC_CARGA_SCRIPT_PRD(FCC_FUENTE_PRD){
	
var script = document.createElement( "script" );
	script.type = "text/javascript";
	script.src = FCC_FUENTE_PRD;
	script.onload = function () {console.log("[CARGA PRD] : " + FCC_FUENTE_PRD);};
	script.onerror = function () {console.log("[ERROR] : FUENTE NO ENCONTRADA ");};
	document.getElementsByTagName('head')[0].appendChild(script);
}


// LISTA DE PAGINAS

//GESTION DE EMPRESAS Y CONTACTOS
//[1.1]	EMPRESAS STEP1 MANAGER
//[1.2]	EMPRESAS MAINTAB MANAGER
//[1.3] 	REGISTRO DE EMPRESAS CONTACTO
//[1.4]	REGISTRO DE CONTACTOS MANAGER

//GESTION DE PUBLICACIONES
//[2.1]	PUBLICACIONES MANAGER
//[2.2]	PUBLICACIONES CONTACTO
//[2.3]	PUBLICACIONES ALUMNOS 


function FCC_LOCAL_SRC(FCC_ESQUEMA){

	switch(FCC_ESQUEMA) {
		
		case "PUB_ALU": 
			FCC_FUENTE_DEV = "http://localhost/DEV/02_PUBLICACION_EMPLEO/01_DEV/FCC_PUBLICACIONES_ALUMNOS.JS";
			FCC_FUENTE_PRD = "https://rawgit.com/ferac171/test/master/FCC_PUBLICACIONES_ALUMNOS.JS";
			break;
				
		case "EMPRESAS_STEP1":
			FCC_SRC = "http://localhost/DEV/01_REGISTRO_EMPRESAS/01_DEV/FCC_EMPRESAS_STEP1.js";
			break;
				
		default:
	}


}	










