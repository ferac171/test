//#############################################################################################################################
//#
//#	SCRIPT DE CONTROL DE EJEUCION DE SCRIPS DE SERVIDOR
//#
//# FORMULARIO		: TODOS
//# DESARROLLADO	: FERNANDO CALDERON 
//# VERSION			: 1.0
//# FECHA			: 25.07.18
//#	
//#############################################################################################################################

/*
EL USO DE CONSTANTES DETERMINA SI UNA INTEGRACION EN ESPECIFICO ESTARA BAJO EJECUCION LOCAL O DE SERVIDOR

TRUE : SE EJECUTA SCRIPT DEL SERVIDOR
FALSE: SE EJECUTA SCRIPT LOCAL (IIS)
  https://www.w3schools.com/code/tryit.asp?filename=FTNJ1GA7RQ3T
*/


console.log("LOCALHOST : CONTROLADOR DE JS SERVIDOR DETECTADO V1");


function FCC_SERVIDOR_SRC(FCC_ESQUEMA){
	
var FCC_SRC;

switch(FCC_ESQUEMA) {
	
    case "PUBLICACIONES":
		FCC_SRC = "http://localhost/DEV/02_PUBLICACION_EMPLEO/01_DEV/FCC_PUBLICACIONES.js";
		break;
			
    case "EMPRESAS_STEP1":
		FCC_SRC = "";
        break;
		
	case "EMPRESAS_MAINTAB":
		FCC_SRC = "";
        break;	
		
	case "EMPRESAS":
		FCC_SRC = "";
        break;			
		
    default:
}

return FCC_SRC;

	
}	
