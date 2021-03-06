//#############################################################################################################################
//#
//#	SCRIPT DE CONTROL DE EJEUCION DE SCRIPS DE SERVIDOR
//#
//# FORMULARIO		: TODOS
//# DESARROLLADO	: FERNANDO CALDERON  
//#
	const FCC_CONTROL_JS_SERVIDOR_VERSION = 7.0;
	const FCC_CONTROL_JS_SERVIDOR_FECHA = "09/09/18";
//#	
//#############################################################################################################################

console.log("SERVER : CONTROLADOR DE JS: V"+FCC_CONTROL_JS_SERVIDOR_VERSION + " al: "+FCC_CONTROL_JS_SERVIDOR_FECHA);

/*############################################################################################################################

FUNCION		:	FCC_SERVIDOR_SRC
DETALLE		:	En relación al código de esquema envía la SRC para dicho formulario

##############################################################################################################################*/

function FCC_SERVIDOR_SRC(FCC_ESQUEMA){
	
var FCC_SRC;

switch(FCC_ESQUEMA) {
	
    case "PUBLICACIONES":
		FCC_SRC = "https://rawgit.com/ferac171/test/master/FCC_PUBLICACIONES.JS";
		break;
			
    case "EMPRESAS_STEP1":
		FCC_SRC = "https://rawgit.com/ferac171/test/master/FCC_EMPRESAS_STEP1.JS";
        break;
		
	case "EMPRESAS_MAINTAB":
		FCC_SRC = "https://rawgit.com/ferac171/test/master/FCC_EMPRESAS_MAINTAB.JS";
        break;	
		
	case "EMPRESAS":
		FCC_SRC = "https://rawgit.com/ferac171/test/master/FCC_EMPRESAS.JS";
        break;		
		
	case "CONTACTOS":
		FCC_SRC = "https://rawgit.com/ferac171/test/master/FCC_CONTACTOS.JS";
        break;	
		
	case "PUBLICACIONES_CONTACTOS":
		FCC_SRC = "https://rawgit.com/ferac171/test/master/FCC_PUBLICACIONES_CONTACTOS.JS";
        break;	

	case "BUSQUEDA_CONTACTOS":
		FCC_SRC = "https://rawgit.com/ferac171/test/master/FCC_BUSQUEDAS_CONTACTOS.JS";	
			break;				
		
    default:
}

return FCC_SRC;

	
}	

/*###################################################################################################################

FIN

#####################################################################################################################*/









