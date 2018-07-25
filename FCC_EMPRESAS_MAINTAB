
//#############################################################################################################################
//#
//#	MODELO PARA MODIFICAR INTERFACE DE REGISTRO DE EMPRESA Y CONTACTO
//# AMBITO: EMPRESA Y CONTACTO
//#
//# DESARROLLADO	: FERNANDO CALDERON 
//# VERSION			: 11.0
//# FECHA			: 25.07.18
//#
//# FORMULARIO		: Employer MAIN TAB
//# CAMPO			: CIUU 4 ()
//#
//# LOCALHOST
//# http://localhost/usb/FCC_REGISTRO_EMPRESAS/FCC_EMPRESAS_MAINTAB.js
//#
//# INVOCACION GITHUB
//# https://raw.githubusercontent.com/ferac171/test/master/FCC_EMPRESAS_MAINTAB.JS
//# 
//#	RAWGIT
//# https://rawgit.com/ferac171/test/master/FCC_EMPRESAS_MAINTAB.JS
//#
//#############################################################################################################################


/*############################################################################################################################

DECLARACION DE CONSTANTES   // MAINTAB - STEP1

##############################################################################################################################*/

const FCC_VERSION = 1;
const FCC_HABILITA_JS = true;
const FCC_DEBUG = false;
const FCC_AJUSTE_PICKLIST = 1;



/*############################################################################################################################

FUNCION		:	ONLOAD
DETALLE		:	Función principal que analiza el detalle de los formularios y acciones

##############################################################################################################################*/

window.onload=function() {

// VALIDACION DE EJECUCION DE JS
//---------------------------------------------------------------------------------------------------------
	
if (FCC_HABILITA_JS){	
		
	console.log("# CONTROL FCC_EMPRESAS_MAINTAB V:"+FCC_VERSION);
		
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
		
				console.log("ENTRADA: MANAGER EMPLOYER MAINTAB");
				UL_FORM_ESTADO =1;
				
				var WIDGET_DIRECCION = FCC_GET_ELEMENTO_BYID("employer_form_fieldgroup_FCC_WIDGET_DIRECCION");
				WIDGET_DIRECCION.style.display = "none";
				UL_COMPONE_DIRECCION1();
				UL_COMPONE_RAZON_SOCIAL();


}
}

/*############################################################################################################################

FUNCION		:	UL_COMPONE DIRECCION
DETALLE		:	Estrucrura el copiado de campos de direccion en el widget de direccion para que apareza en todas las vistas

##############################################################################################################################*/



function UL_COMPONE_DIRECCION1(){
	

	var FCC_WIDGET_VAR2;

	var FCC_PAIS;
	var FCC_DEPARTAMENTO;
	var FCC_DIRECCION;
	var FCC_CIUDAD;
	
	//document.getElementById
	FCC_WIDGET_VAR2= FCC_GET_ELEMENTO_BYID("dnf_class_values_employer__employer_profile__0__address__0__street_");
	
	FCC_PAIS= FCC_GET_ELEMENTO_BYID("dnf_class_values_employer__pas_");
	FCC_DEPARTAMENTO= FCC_GET_ELEMENTO_BYID("hp_input1");
	FCC_DIRECCION= FCC_GET_ELEMENTO_BYID("dnf_class_values_employer__direccin_de_la_empresa_");
	FCC_CIUDAD= FCC_GET_ELEMENTO_BYID("dnf_class_values_employer__ciudad_");
	
	
	var temp_Pais = FCC_PAIS.options[FCC_PAIS.selectedIndex].innerHTML + " / ";
	var temp_direccion=FCC_DIRECCION.value;
	var temp_departamento;
				
	if(FCC_DEPARTAMENTO.innerHTML!=""){
		temp_departamento=FCC_DEPARTAMENTO.innerHTML + " / ";
	}else{
		temp_departamento=FCC_CIUDAD.value + " / ";
	}
	
	//alert(temp_Pais+temp_departamento+temp_direccion);		
	FCC_WIDGET_VAR2.value = temp_Pais+temp_departamento+temp_direccion;	
	
}	



function UL_COMPONE_RAZON_SOCIAL(){
	
	var FCC_WIDGET_VAR3= FCC_GET_ELEMENTO_BYID("dnf_class_values_employer__employer_profile__0__address__0__zip_");
	var FCC_RAZON_SOCIAL = FCC_GET_ELEMENTO_BYID("dnf_class_values_employer__razon_social2_");
	
	FCC_WIDGET_VAR3.value = FCC_RAZON_SOCIAL.value;	
	
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



/*###################################################################################################################

FUNCIONES	:	UL_FUNCIONES MANAGER
DETALLE		:	Método uqe se ejeucta al cargar el formulario de manager paso 01

#####################################################################################################################*/


/*############################################################################################################################

LISTENERS

##############################################################################################################################*/


try{
document.getElementById("dnf_class_values_employer__direccin_de_la_empresa_").addEventListener("change", UL_COMPONE_DIRECCION1);
document.getElementById("dnf_class_values_employer__pas__widget").addEventListener("change", UL_COMPONE_DIRECCION1);
document.getElementById("dnf_class_values_employer__departamentoprovinciadistrito__widget").addEventListener("change", UL_COMPONE_DIRECCION1);
document.getElementById("dnf_class_values_employer__ciudad_").addEventListener("change", UL_COMPONE_DIRECCION1);

document.getElementById("dnf_class_values_employer__razon_social2_").addEventListener("change", UL_COMPONE_RAZON_SOCIAL);


}catch(err){}




/*###################################################################################################################

FIN

#####################################################################################################################*/






	
