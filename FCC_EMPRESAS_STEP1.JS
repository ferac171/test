
//#############################################################################################################################
//#
//#	MODELO PARA MODIFICAR INTERFACE DE REGISTRO DE EMPRESA Y CONTACTO
//# AMBITO: EMPRESA Y CONTACTO
//#
//# DESARROLLADO	: FERNANDO CALDERON 
//#
//# CAMPO			: PERFIL DEL EMPLEADOR
//#
//# NAME			: FCC_EMPRESAS_MAINTAB.JS
//# GITHUB			: 
//#
//# LOCALHOST
//# http://localhost/usb/FCC_REGISTRO_EMPRESAS/FCC_EMPRESAS_STEP1.js
//#
//# INVOCACION GITHUB
//# https://raw.githubusercontent.com/ferac171/test/master/FCC_EMPRESAS_STEP1.JS
//# 
//#	RAWGIT
//# https://rawgit.com/ferac171/test/master/FCC_EMPRESAS_STEP1.JS
//# 
//#	
	const FCC_EMPRESAS_SETP1_VERSION = "1.4";
	const FCC_EMPRESAS_SETP1_FECHA = "20/09/18";
//#
//#############################################################################################################################

console.log("# CONTROL FCC_EMPRESAS_SEPT1 V:"+FCC_EMPRESAS_SETP1_VERSION + " al "+FCC_EMPRESAS_SETP1_FECHA);

/*############################################################################################################################

DECLARACION DE CONSTANTES   // MAINTAB - STEP1

##############################################################################################################################*/

const FCC_HABILITA_JS = true;
const FCC_DEBUG = false;

/*############################################################################################################################

FUNCION		:	ONLOAD
DETALLE		:	Función principal que analiza el detalle de los formularios y acciones

##############################################################################################################################*/

	try{
				
		var buscador = document.getElementsByClassName("search-filters form form-editmode")[0];
		
		buscador.style.display = "none";
		
		
	}catch(err){
		console.log (err);
		
	}


window.onload=function() {

// VALIDACION DE EJECUCION DE JS
//---------------------------------------------------------------------------------------------------------
	
if (FCC_HABILITA_JS){	
				
// DECALRACION DE VARIABLES
//---------------------------------------------------------------------------------------------------------
		
	var UL_FORM_ESTADO ="";	
	var UL_RUC="";
	var UL_CONTROL_0="";
	var UL_RAZON;
	var UL_CONTROL_CONTACTOS=1;
	var UL_ERRORES;
	var UL_FORMULARIO_ORIGEN ="";
	var UL_MODO_DEBUG = "";
	var UL_CONTROL_00 ="";
	var FCC_RUC;
	var FCC_RAZON;
	var FCC_CONTROL_0;
	var FCC_CONTROL_00;
	

		
// INICIALIZANDO VARIABLES
//---------------------------------------------------------------------------------------------------------	
		
	UL_FORM_ESTADO =1;
				
	var WIDGET_DIRECCION = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_employer_profile__address_");
	WIDGET_DIRECCION.style.display = "none";
	UL_COMPONE_DIRECCION_RAZONSOCIAL();
			

	
			
			
			
			
}


else{
	console.log("# CONTROL DE JS DESHABILITADO PARA FCC_EMPRESAS_SEPT1 V:"+FCC_EMPRESAS_SETP1_VERSION + " al "+FCC_EMPRESAS_SETP1_FECHA);
}

}

/*############################################################################################################################

FUNCION		:	UL_COMPONE DIRECCION
DETALLE		:	Estrucrura el copiado de campos de direccion en el widget de direccion para que apareza en todas las vistas

##############################################################################################################################*/



function UL_COMPONE_DIRECCION_RAZONSOCIAL(){
	

	var FCC_WIDGET_DIR_DIRECCION;
	var FCC_WIDGET_DIR_POSTAL;
	
	var FCC_DIRECCION;
	var FCC_RAZON_SOCIAL;
	
	//document.getElementById
	FCC_WIDGET_DIR_DIRECCION= FCC_GET_ELEMENTO_BYNAME("dnf_class_values[employer_profile][address][0][street]");
	FCC_WIDGET_DIR_POSTAL= FCC_GET_ELEMENTO_BYNAME("dnf_class_values[employer_profile][address][0][zip]");
	
	FCC_DIRECCION= FCC_GET_ELEMENTO_BYID("dnf_class_values_employer_profile__travel_2_");
	FCC_RAZON_SOCIAL= FCC_GET_ELEMENTO_BYID("dnf_class_values_employer_profile__offices_");
	
	
	
	//alert(temp_Pais+temp_departamento+temp_direccion);		
	FCC_DIRECCION.value = FCC_WIDGET_DIR_DIRECCION.value;	
	FCC_RAZON_SOCIAL.value = FCC_WIDGET_DIR_POSTAL.value;	
	
	
	FCC_DIRECCION.rows="2";
	FCC_RAZON_SOCIAL.rows="1";
	
	FCC_DIRECCION.readOnly = true;
	FCC_RAZON_SOCIAL.readOnly = true;
	
}	


/*###################################################################################################################

FUNCIONES	:	GET ELEMENTO
DETALLE		:	Se obtiene los elementos o valores de los elementos validando errores

#####################################################################################################################*/	

function FCC_GET_ELEMENTO_BYID(FCC_ID){
	
var FCC_VALOR="";

		try {
			FCC_VALOR=document.getElementById(FCC_ID);
		}catch(err) {
			FCC_VALOR="FCC";
		}
		
return FCC_VALOR;
}

function FCC_GET_ELEMENTO_BYNAME(FCC_ID){
	
var FCC_VALOR="";

		try {
			FCC_VALOR=document.getElementsByName(FCC_ID)[0];
		}catch(err) {
			FCC_VALOR="FCC";
		}
		
return FCC_VALOR;
}





/*###################################################################################################################

FIN

#####################################################################################################################*/






	