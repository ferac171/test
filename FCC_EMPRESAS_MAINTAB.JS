
/*##############################################################################################################################*/

// MODELO PARA MODIFICAR INTERFACE DE:
// REGISTRO DE EMPRESA - VISTA MANAGER
//
// NAME		: FCC_EMPRESAS_MAINTAB.JS
	
	const FCC_EMPRESAS_MAINTAB_VERSION_LOCAL = "1.01";
	const FCC_EMPRESAS_MAINTAB_FECHA_LOCAL= "24/09/18";

/*##############################################################################################################################*/

/*############################################################################################################################*/
//CONSTANTES DE VERSION
/*############################################################################################################################*/

console.log("# CONTROL FCC_EMPRESAS_MAINTAB V:"+FCC_EMPRESAS_MAINTAB_VERSION_LOCAL+" al " + FCC_EMPRESAS_MAINTAB_FECHA_LOCAL);

/*############################################################################################################################*/
//DECLARACION DE CONSTANTES DE CONTROL
/*############################################################################################################################*/

const FCC_HABILITA_JS = true;
const FCC_DEBUG = false;
const FCC_AJUSTE_PICKLIST = 1;

/*############################################################################################################################*/
//DECLARACION DE CONSTANTES
/*############################################################################################################################*/

const FCC_BLOCK = "block";
const FCC_NONE = "";
const FCC_VIEW = "";


/*############################################################################################################################*/
// DECLARACION GENERAL DE VARIABLES DE ELEMENTOS
/*##############################################################################################################################*/

// VARIABLES DE CONTROL
var UL_FORM_ESTADO ="";	
	
//VARIABLES DE WIDGET DIRECCION
var UL_WIDGET_DIRECCION = FCC_GET_ELEMENTO_BYID("employer_form_fieldgroup_FCC_WIDGET_DIRECCION");
var UL_TXT_DIRECCION_CALLE = FCC_GET_ELEMENTO_BYID("dnf_class_values_employer__employer_profile__0__address__0__street_");
var UL_TXT_DIRECCION_POSTAL= FCC_GET_ELEMENTO_BYID("dnf_class_values_employer__employer_profile__0__address__0__zip_");

//CAMPOS DIRECCION
var UL_LISTA_PAIS = FCC_GET_ELEMENTO_BYID("dnf_class_values_employer__pas_");
var UL_LISTA_DEPARTAMENTO = FCC_GET_ELEMENTO_BYID("hp_input3");
var UL_TXT_DIRECCION = FCC_GET_ELEMENTO_BYID("dnf_class_values_employer__direccin_de_la_empresa_");
var UL_TXT_CIUDAD = FCC_GET_ELEMENTO_BYID("dnf_class_values_employer__ciudad_");

var UL_HIDDEN_DEPARTAMENTO = FCC_GET_ELEMENTO_BYID("hp_selection_3");


//CAMPOS PARA RAZON SOCIAL
var UL_TXT_RAZON_SOCIAL = FCC_GET_ELEMENTO_BYID("dnf_class_values_employer__razon_social2_");	
	


/*############################################################################################################################*/
// LISTENERS
/*##############################################################################################################################*/

try{UL_LISTA_PAIS.addEventListener("change", UL_COMPONE_DIRECCION1);}catch(err){}
try{UL_LISTA_DEPARTAMENTO.addEventListener("change", UL_COMPONE_DIRECCION1);}catch(err){}
try{UL_TXT_DIRECCION.addEventListener("change", UL_COMPONE_DIRECCION1);}catch(err){}
try{UL_TXT_CIUDAD.addEventListener("change", UL_COMPONE_DIRECCION1);}catch(err){}

try{UL_TXT_RAZON_SOCIAL.addEventListener("change", UL_COMPONE_RAZON_SOCIAL);}catch(err){}

try{UL_HIDDEN_DEPARTAMENTO[0].addEventListener("onkeydown", FCC_TEST);}catch(err){}



// BLOQUEANDO ACCIONES NO DESEADAS ;)
$(document).ready(function() {
  $('form').keypress(function(e){   
    if(e == 13){return false;}
  });
  $('input').keypress(function(e){
    if(e.which == 13){return false;}
  });
});	
	
	
/*############################################################################################################################*/
//FUNCION		:	ONLOAD
//DETALLE		:	Función principal que analiza el detalle de los formularios y acciones.
//					Se ejecuta una vez acasarados todos los componentes de la pagina
/*############################################################################################################################*/


window.onload=function() {

	if (FCC_HABILITA_JS){	
			
			
	// INICIALIZANDO VARIABLES
	//---------------------------------------------------------------------------------------------------------	
							
		UL_FORM_ESTADO =1;
		UL_WIDGET_DIRECCION.style.display = FCC_NONE;
					
		UL_COMPONE_DIRECCION1();
		UL_COMPONE_RAZON_SOCIAL();
	}
}

/*############################################################################################################################
FUNCION		:	UL_COMPONE RAZON SOCIAL
##############################################################################################################################*/


function UL_COMPONE_RAZON_SOCIAL(){
	
	UL_TXT_DIRECCION_POSTAL.value = UL_TXT_RAZON_SOCIAL.value;	
	
}

/*############################################################################################################################
FUNCION		:	UL_COMPONE DIRECCION
##############################################################################################################################*/

function UL_COMPONE_DIRECCION1(){

		

	var TEMP_PAIS = UL_LISTA_PAIS.options[UL_LISTA_PAIS.selectedIndex].innerHTML + " / ";
	var TEMP_DIRECCION=UL_TXT_DIRECCION.value;
	var TEMP_DEPARTAMENTO;	
				
	if(TEMP_PAIS=="PERU - 208 / "){
		TEMP_DEPARTAMENTO=UL_LISTA_DEPARTAMENTO.innerHTML + " / ";
	}else{
		TEMP_DEPARTAMENTO=UL_TXT_CIUDAD.value + " / ";
	}
	
	UL_TXT_DIRECCION_CALLE.value = TEMP_PAIS+TEMP_DEPARTAMENTO+TEMP_DIRECCION;	

}	

/*############################################################################################################################

FUNCION		:	UL_COPIA_DIRECCION
DETALLE		:	Estructura el copiado de campos de dirección de empresa en contacto cuando se indique que es la misma

##############################################################################################################################*/


function FCC_TEST() {
	
	console.log("TEST OK ");
	
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


function FCC_GET_ELEMENTO_BYCLASSNAME(FCC_ID){
	var FCC_VALOR="";
	try {FCC_VALOR=document.getElementsByClassName(FCC_ID);}catch(err) {FCC_VALOR="FCC";}
	return FCC_VALOR;
}







/*###################################################################################################################

FIN

#####################################################################################################################*/






	