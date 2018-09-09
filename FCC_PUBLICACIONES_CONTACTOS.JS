/*##############################################################################################################################*/

// MODELO PARA MODIFICAR INTERFACE DE:
// REGISTRO DE PUBLICACIONES DE EMPLEO - VISTA CONTACTO
//
// FORMULARIO		: 
// CAMPO			:
// NAME				: FCC_PUBLICACIONES_CONTACTO.JS
	
	const FCC_PUBLICACIONES_CONTACTO_VERSION = "2.7x";
	const FCC_PUBLICACIONES_CONTACTO_FECHA= "09/09/18";
	
/*############################################################################################################################*/


/*############################################################################################################################*/
//CONSTANTES DE VERSION
/*############################################################################################################################*/

console.log("# CONTROL FCC_PUBLICACIONES_CONTACTO V:"+FCC_PUBLICACIONES_CONTACTO_VERSION + " al "+FCC_PUBLICACIONES_CONTACTO_FECHA);

/*############################################################################################################################*/
//DECLARACION DE CONSTANTES
/*############################################################################################################################*/

const FCC_BLOCK = "block";
const FCC_NONE = "none";
const FCC_VIEW = "";

/*############################################################################################################################*/
// DECLARACION GENERAL DE VARIABLES DE ELEMENTOS
/*##############################################################################################################################*/

//VARIABLES DE CONTROL 
//------------------------------------------------------------------------------------------------------------------

var UL_TB_001 = FCC_GET_ELEMENTO_BYID("UL_TB_001");
var UL_TB_002 = FCC_GET_ELEMENTO_BYID("UL_TB_002");
var UL_TB_003 = FCC_GET_ELEMENTO_BYID("UL_TB_003");
var UL_TB_004 = FCC_GET_ELEMENTO_BYID("UL_TB_004");
var UL_TB_005 = FCC_GET_ELEMENTO_BYID("UL_TB_0055");

var UL_TXT_001 = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__UL_TXT_001_"); 
var UL_TXT_002 = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__UL_TXT_002_"); 
var UL_TXT_003 = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__UL_TXT_003_"); 
var UL_TXT_004 = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__UL_TXT_004_"); 
var UL_TXT_005 = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__UL_TXT_0055_"); 

var UL_SECCION_TXT_001 = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__UL_TXT_001_"); 
var UL_SECCION_TXT_002 = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__UL_TXT_002_"); 
var UL_SECCION_TXT_003 = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__UL_TXT_003_"); 
var UL_SECCION_TXT_004 = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__UL_TXT_004_"); 
var UL_SECCION_TXT_005 = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__UL_TXT_0055_"); 

//ELEMENTOS DE PRACTICAS PRE 
//------------------------------------------------------------------------------------------------------------------

var UL_SECCION_CARRERA_PRACTICAPRE_DES = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__carreras_para_practicas_pre_pr___"); 
var UL_SECCION_CARRERA_PRACTICAPRE_OBL = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__screen_work_authorization___"); 
var UL_LISTA_CARRERA_PRACTICAPRE_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_work_authorization___");
var UL_SECCION_NIVEL_PRACTICAPRE_DES = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__nivel_deseable_pre___"); 
var UL_SECCION_NIVEL_PRACTICAPRE_OBL = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__screen_class_level___"); 
var UL_WIDGET_NIVEL_PRACTICAPRE_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_class_level____widget");
var UL_LISTA_NIVEL_PRACTICAPRE_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_class_level___");

//ELEMENTOS DE PRACTICAS PRO 
//------------------------------------------------------------------------------------------------------------------

var UL_SECCION_CARRERA_PRACTICAPRO_OBL = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__screen_applicant_type___"); 
var UL_SECCION_CARRERA_PRACTICAPRO_DES = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__sf_carreras_para_practicas_pro___"); 
var UL_LISTA_CARRERA_PRACTICAPRO_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_applicant_type___");

//ELEMENTOS DE EMPLEOS Y OTROS 
//------------------------------------------------------------------------------------------------------------------

var UL_SECCION_CARRERA_EMPLEO_OBL = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__screen_minor___"); 
var UL_SECCION_CARRERA_EMPLEO_DES = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__carrera_profesional_emp___"); 
var UL_SELECT_CARRERA_EMPLEO_OBL= FCC_GET_ELEMENTO_BYNAME("dnf_class_values[job][screen_minor][]");
var UL_SELECT_CONDICION_EMPLEO_OBL= FCC_GET_ELEMENTO_BYNAME("dnf_class_values[job][screen_certificate][]");
var UL_SECCION_CONDICION_EMPLEO_OBL = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__screen_certificate___"); 
var UL_SECCION_CONDICION_EMPLEO_DES = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__condicionnivel___"); 


/*############################################################################################################################*/
// LISTENERS
/*##############################################################################################################################*/

try{UL_TB_001.addEventListener("change", UL_TB_001_CHANGE);}catch(err){}
try{UL_TB_002.addEventListener("change", UL_TB_002_CHANGE);}catch(err){}
try{UL_TB_003.addEventListener("change", UL_TB_003_CHANGE);}catch(err){}
try{UL_TB_004.addEventListener("change", UL_TB_004_CHANGE);}catch(err){}
try{UL_TB_005.addEventListener("change", UL_TB_005_CHANGE);}catch(err){}


/*############################################################################################################################

FUNCION		:	ONLOAD
DETALLE		:	Función principal que analiza el detalle de los formularios y acciones.
				Se ejecuta una vez acasarados todos los componentes de la pagina

##############################################################################################################################*/

window.onload=function() {

// VALIDACION DE EJECUCION DE JS
//---------------------------------------------------------------------------------------------------------
	

		
		//OCULTANDO SOPORTES
		UL_SECCION_TXT_001.style.display=FCC_NONE;
		UL_SECCION_TXT_002.style.display=FCC_NONE;
		UL_SECCION_TXT_003.style.display=FCC_NONE;
		UL_SECCION_TXT_004.style.display=FCC_NONE;
		UL_SECCION_TXT_005.style.display=FCC_NONE;
				
		//INICIALIZANDO TB Y TEXTOS DE CONTROL	
		FCC_INICIALIZA_CONTROLES(UL_TB_001,UL_TXT_001);
		FCC_INICIALIZA_CONTROLES(UL_TB_002,UL_TXT_002);
		FCC_INICIALIZA_CONTROLES(UL_TB_003,UL_TXT_003);
		FCC_INICIALIZA_CONTROLES(UL_TB_004,UL_TXT_004);
		FCC_INICIALIZA_CONTROLES(UL_TB_005,UL_TXT_005);
		
		//EJECUTANDO CONTROLES	
		UL_TB_001_CHANGE();
		UL_TB_002_CHANGE();
		UL_TB_003_CHANGE();
		UL_TB_004_CHANGE();
		UL_TB_005_CHANGE();
	
}


function FCC_INICIALIZA_CONTROLES(TEMP_TB,TEMP_TXT){
	
	if(TEMP_TXT.value==""){
		TEMP_TXT.value=true;
		TEMP_TB.checked=true;
	}else if(TEMP_TXT.value=="true"){
		TEMP_TB.checked=true;
	}else if(TEMP_TXT.value=="false"){
		TEMP_TB.checked=false;
	}
}


/*###################################################################################################################

FUNCIONES	:	GET ELEMENTO
DETALLE		:	Se obtiene los elementos o valores de los elementos validando errores

#####################################################################################################################*/	

function FCC_GET_ELEMENTO_BYID(FCC_ID){
	
	var FCC_VALOR="";
	try {FCC_VALOR=document.getElementById(FCC_ID);	}catch(err) {FCC_VALOR="FCC";}
	return FCC_VALOR;
}

function FCC_GET_ELEMENTO_BYNAME(FCC_ID){
	
	var FCC_VALOR="";
	try {FCC_VALOR=document.getElementsByName(FCC_ID);}catch(err) {FCC_VALOR="FCC";}
	return FCC_VALOR;
}

function FCC_GET_ELEMENTO_BYCLASSNAME(FCC_ID){
	
	var FCC_VALOR="";
	try {FCC_VALOR=document.getElementsByClassName(FCC_ID);}catch(err) {FCC_VALOR="FCC";}
	return FCC_VALOR;
}


/*###################################################################################################################*/
// FUNCION		:	UL_TB_001_CHANGE
// DETALLE		:	ACCIONES SOBRE CAMBIOS EN UN TOGGLE BUTTON
/*###################################################################################################################*/


// PRACTICAS PREPROFESIONALES - CARRERAS
function UL_TB_001_CHANGE(){
	try{	
		var TEMP_CONTROL = UL_TB_001.checked;
		UL_TXT_001.value = TEMP_CONTROL;

		if (TEMP_CONTROL) {
			UL_SECCION_CARRERA_PRACTICAPRE_OBL.style.display=FCC_VIEW;
			UL_SECCION_CARRERA_PRACTICAPRE_DES.style.display=FCC_NONE;
			FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRE_OBL,"DEL");
		} else if (!TEMP_CONTROL){
			UL_SECCION_CARRERA_PRACTICAPRE_OBL.style.display=FCC_NONE;
			UL_SECCION_CARRERA_PRACTICAPRE_DES.style.display=FCC_VIEW;
			FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRE_OBL,"ADD");
		}
	}catch(err){}
}

// PRACTICAS PREPROFESIONALES - NIVELES	
function UL_TB_002_CHANGE(){
	try{
		var TEMP_CONTROL = UL_TB_002.checked;
			UL_TXT_002.value = TEMP_CONTROL;

		if (TEMP_CONTROL) {
			UL_SECCION_NIVEL_PRACTICAPRE_OBL.style.display=FCC_VIEW;
			UL_SECCION_NIVEL_PRACTICAPRE_DES.style.display=FCC_NONE;
			FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_NIVEL_PRACTICAPRE_OBL,"DEL");
		} else if (!TEMP_CONTROL){
			UL_SECCION_NIVEL_PRACTICAPRE_OBL.style.display=FCC_NONE;
			UL_SECCION_NIVEL_PRACTICAPRE_DES.style.display=FCC_VIEW;
			FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_NIVEL_PRACTICAPRE_OBL,"ADD");
		}
	}catch(err){}
}

// EMPLEOS - CARRERAS
function UL_TB_003_CHANGE(){
	try{
		var TEMP_CONTROL = UL_TB_003.checked;
		var UL_ARREGLO_CARRERA_EMPLEO_OBL = new Array("0303", "0301", "0025", "0020", "0040", "0060", "0080", "0100", "0120", "0140", "0160", "0180", "0200", "0220", "0240", "0260", "0280", "0300");
		UL_TXT_003.value = TEMP_CONTROL;

		if (TEMP_CONTROL) {
			UL_SECCION_CARRERA_EMPLEO_OBL.style.display=FCC_VIEW;
			UL_SECCION_CARRERA_EMPLEO_DES.style.display=FCC_NONE;
			FCC_SELECCION_LISTA_JERARQUICA(UL_SELECT_CARRERA_EMPLEO_OBL[0],UL_ARREGLO_CARRERA_EMPLEO_OBL,"DEL");					
		} else if (!TEMP_CONTROL){
			UL_SECCION_CARRERA_EMPLEO_OBL.style.display=FCC_NONE;
			UL_SECCION_CARRERA_EMPLEO_DES.style.display=FCC_VIEW;
			FCC_SELECCION_LISTA_JERARQUICA(UL_SELECT_CARRERA_EMPLEO_OBL[0],UL_ARREGLO_CARRERA_EMPLEO_OBL,"ADD");
		}
	}catch(err){}
}

// EMPLEOS - CONDICION	
function UL_TB_004_CHANGE(){
	try{
		var TEMP_CONTROL = UL_TB_004.checked;
		var UL_ARREGLO_CONDICION_EMPLEO_OBL = new Array("0060", "0040", "0020");	
		UL_TXT_004.value = TEMP_CONTROL;

		if (TEMP_CONTROL) {
			UL_SECCION_CONDICION_EMPLEO_OBL.style.display=FCC_VIEW;
			UL_SECCION_CONDICION_EMPLEO_DES.style.display=FCC_NONE;
			FCC_SELECCION_LISTA_JERARQUICA(UL_SELECT_CONDICION_EMPLEO_OBL[0],UL_ARREGLO_CONDICION_EMPLEO_OBL,"DEL");
		} else if (!TEMP_CONTROL){
			UL_SECCION_CONDICION_EMPLEO_OBL.style.display=FCC_NONE;
			UL_SECCION_CONDICION_EMPLEO_DES.style.display=FCC_VIEW;
			FCC_SELECCION_LISTA_JERARQUICA(UL_SELECT_CONDICION_EMPLEO_OBL[0],UL_ARREGLO_CONDICION_EMPLEO_OBL,"ADD");
		}
	}catch(err){}			
}

// PRACTICAS PRO - CARRERAS	
function UL_TB_005_CHANGE(){
	try{
		var TEMP_CONTROL = UL_TB_005.checked;
		UL_TXT_005.value = TEMP_CONTROL;

		if (TEMP_CONTROL) {
			UL_SECCION_CARRERA_PRACTICAPRO_OBL.style.display=FCC_VIEW;
			UL_SECCION_CARRERA_PRACTICAPRO_DES.style.display=FCC_NONE;
			FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRO_OBL,"DEL");
		} else if (!TEMP_CONTROL){
			UL_SECCION_CARRERA_PRACTICAPRO_OBL.style.display=FCC_NONE;
			UL_SECCION_CARRERA_PRACTICAPRO_DES.style.display=FCC_VIEW;
			FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRO_OBL,"ADD");
		}
	}catch(err){}
}

/*###################################################################################################################*/

// FUNCION		:	FCC_SELECCION_LISTA_JERARQUICA
// DETALLE		:	Selecciona, deselecciona elementos de un picklista jerarquico multivalor (con popup)

/*###################################################################################################################*/


function FCC_SELECCION_LISTA_JERARQUICA(TEMP_SELECT,TEMP_ARREGLO, ACCION){
	
var TEMP_ELEMENT = document.createElement("option");
	try{	
		if (ACCION=="ADD") {		
			for (ni=0; ni<TEMP_ARREGLO.length; ni++){
				TEMP_ELEMENT = document.createElement("option");
				TEMP_ELEMENT.value = TEMP_ARREGLO[ni];
				TEMP_SELECT.options.add(TEMP_ELEMENT,0);
				TEMP_SELECT.options[0].selected = true;
			}
		} else if (ACCION=="DEL"){
			for (ni=0; ni<3; ni++){
				TEMP_SELECT.options.remove(0);
			}	
		}
	}catch(err){}
}

/*###################################################################################################################*/

// FUNCION		:	FCC_ACCION_SOBRE_SIMPLE
// DETALLE		:	Completa / borra de foorma automatica todo el contenido de un picklist multivalor simple

/*###################################################################################################################*/


function FCC_ACCION_SOBRE_SIMPLE (TEMP_SIMPLE, ACCION){
	
	if (ACCION=="ADD") {
		for (i=0; ele = TEMP_SIMPLE.options[i]; i++){ ele.selected = true;} 
	} else if (ACCION=="DEL"){
		for (i=0; ele = TEMP_SIMPLE.options[i]; i++){ ele.selected = false;}
    }
	
}

/*###################################################################################################################*/

// FUNCION		:	FCC_ACCION_SOBRE_MULTIPLE
// DETALLE		:	Completa / borra de foorma automatica todo el contenido de un picklist multivalor jerarquico 
//					(con boton añadir y borrar)

/*###################################################################################################################*/

function FCC_ACCION_SOBRE_MULTIPLE (TEMP_SECCION, TEMP_MULTIPLE, TEMP_LISTA, ACCION){
	
	var TEMP_MULTIPLE_SELECCION = TEMP_MULTIPLE.getElementsByClassName("scrollable_readonly_ms")[0];
	var TEMP_MULTIPLE_SELECCION_NAME = TEMP_MULTIPLE_SELECCION.id.substring(20, 100);

	if (ACCION=="ADD") {
		TEMP_MULTIPLE_SELECCION.onmouseover();
		for (ni=1; ni<TEMP_LISTA.length; ni++){
			TEMP_LISTA.value=TEMP_LISTA.options[ni].value;
			TEMP_LISTA.onchange();
		}
		TEMP_SECCION.style.display="";
    } else if (ACCION=="DEL"){
		//METODO SYMPLICITY
		mult_sel_del_all(TEMP_MULTIPLE_SELECCION,TEMP_MULTIPLE_SELECCION_NAME);
		TEMP_SECCION.style.display="";
    }
}

/*###################################################################################################################

FIN

#####################################################################################################################*/






	