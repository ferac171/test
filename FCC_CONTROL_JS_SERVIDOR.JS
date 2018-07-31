//#############################################################################################################################
//#
//#	SCRIPT DE CONTROL DE EJEUCION DE SCRIPS DE SERVIDOR
//#
//# FORMULARIO		: TODOS
//# DESARROLLADO	: FERNANDO CALDERON 
//# VERSION			: 2.0
//# FECHA			: 31.07.18
//#	
//#############################################################################################################################

/*
EL USO DE CONSTANTES DETERMINA SI UNA INTEGRACION EN ESPECIFICO ESTARA BAJO EJECUCION LOCAL O DE SERVIDOR

TRUE : SE EJECUTA SCRIPT DEL SERVIDOR
FALSE: SE EJECUTA SCRIPT LOCAL (IIS)

https://cdn.rawgit.com/ferac171/test/master/FCC_CONTROL_JS_SERVIDOR.JS

*/
const FCC_CONTROL_VERSION = 2;

console.log("LOCALHOST : CONTROLADOR DE JS LOCAL DETECTADO: V"+FCC_CONTROL_VERSION);


function FCC_SERVIDOR_SRC(FCC_ESQUEMA){
	
var FCC_SRC;

switch(FCC_ESQUEMA) {
	
    case "PUBLICACIONES":
		FCC_SRC = "";
		break;
			
    case "EMPRESAS_STEP1":
		FCC_SRC = "https://rawcdn.githack.com/ferac171/test/master/FCC_EMPRESAS_STEP1.JS";
        break;
		
	case "EMPRESAS_MAINTAB":
		FCC_SRC = "https://rawcdn.githack.com/ferac171/test/master/FCC_EMPRESAS_MAINTAB.JS";
        break;	
		
	case "EMPRESAS":
		FCC_SRC = "https://rawcdn.githack.com/ferac171/test/master/FCC_EMPRESAS.JS";
        break;		
		
	case "CONTACTOS":
		FCC_SRC = "https://rawcdn.githack.com/ferac171/test/master/FCC_CONTACTOS.JS";
        break;			
		
    default:
}

return FCC_SRC;

	
}	
