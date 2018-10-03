/*##############################################################################################################################*/

// MODELO PARA MODIFICAR INTERFACE DE:
// REGISTRO DE PUBLICACIONES DE EMPLEO - VISTA MANAGER
//
// NAME		: FCC_PUBLICACIONES_CONTACTO.JS
	
	const FCC_PUBLICACIONES_MANAGER_VERSION_LOCAL = "1.3x";
	const FCC_PUBLICACIONES_MANAGER_FECHA_LOCAL= "03/10/18";

/*############################################################################################################################*/

/*############################################################################################################################*/
//CONSTANTES DE VERSION
/*############################################################################################################################*/

console.log("# CONTROL FCC_PUBLICACIONES_MANAGER V:"+FCC_PUBLICACIONES_MANAGER_VERSION_LOCAL + " al "+FCC_PUBLICACIONES_MANAGER_FECHA_LOCAL);

/*############################################################################################################################*/
//DECLARACION DE CONSTANTES
/*############################################################################################################################*/

const FCC_BLOCK = "block";
const FCC_NONE = "none";
const FCC_VIEW = "";

/*############################################################################################################################*/
// DECLARACION GENERAL DE VARIABLES DE ELEMENTOS
/*##############################################################################################################################*/


//VARIABLES DE CONTROL DE LISTENERS Y EVENTOS
//------------------------------------------------------------------------------------------------------------------

var UL_CONTROL_LISTENER =false;	
try{var UL_CODIGO_EMPLEO = FCC_GET_ELEMENTO_BYNAME("dnf_class_values[job][visual_id]")[0];}catch(err){}
try{var UL_BARRA_MENU = FCC_GET_ELEMENTO_BYCLASSNAME("buttonbar buttonbar-top");}catch(err){}

//VARIABLES DE CONTROL DE IDIOMAS
//------------------------------------------------------------------------------------------------------------------

var UL_CBX_001 = FCC_GET_ELEMENTO_BYID("UL_CBX_001");
var UL_TXT_006 = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__UL_TXT_061_"); 
var UL_TXT_OTRO_IDIOMA = FCC_GET_ELEMENTO_BYID("UL_TXT_OTRO_IDIOMA"); 

var UL_SECCION_TXT_006 = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__UL_TXT_061_"); 

var UL_SECCION_SLC_006 = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__UL_PROP_061_"); 

//VARIABLES DE CONTROL DE HABILIDADES
//------------------------------------------------------------------------------------------------------------------

var UL_CBX_002 = FCC_GET_ELEMENTO_BYID("UL_CBX_003");
var UL_TXT_007 = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__ul_txt_077_"); 
var UL_TXT_OTRO_HABILIDAD = FCC_GET_ELEMENTO_BYID("UL_TXT_OTRO_HABILIDAD"); 

var UL_SECCION_TXT_007 = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__ul_txt_077_"); 
var UL_SECCION_SLC_007 = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__ul_prop_077_"); 


//VARIABLES DE CONTROL DE CORREO ELECTRONICO
//------------------------------------------------------------------------------------------------------------------

var UL_TXT_CORREO = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__resume_email_"); 
var UL_TXT_CORREO_DOMINIO = FCC_GET_ELEMENTO_BYID("UL_TXT_CORREO_DOMINIO"); 
var UL_TXT_CORREO_DIRECCION = FCC_GET_ELEMENTO_BYID("UL_TXT_CORREO_DIRECCION"); 

var UL_CHK_CORREO = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__resume_mode___email_check"); 
var UL_SECCION_CORREO = FCC_GET_ELEMENTO_BYID( "so_formfield_dnf_class_values_job__correo_electrnico_predetermina_"); 
var UL_SECCION_CORREO_ORIGINAL = FCC_GET_ELEMENTO_BYID( "so_formfield_dnf_class_values_job__resume_email_"); 

var UL_CORREO = "";
var UL_CORREO_DIRECCION = "";
var UL_CORREO_DOMINIO = "";

//VARIABLES DE CONTROL DE FECHAS DE POSTULACION
//------------------------------------------------------------------------------------------------------------------

var UL_TXT_FECHAPUBLICACION = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_start_"); 
var UL_TXT_FECHAFINALIZACION = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_end_"); 

var UL_BTN_PUBLICAR = FCC_GET_ELEMENTO_BYID("jscal_button_0"); 
var UL_BTN_BORRAR = FCC_GET_ELEMENTO_BYID("jscal_clearbutton_0"); 

//VARIABLES DE CONTROL DE CARGO A PUBLICAR
//------------------------------------------------------------------------------------------------------------------

var UL_LISTA_AREA = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__rea2_"); 
var UL_TXT_AREA = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__especifique_el_rea_"); 
var UL_LISTA_CARGO = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__cargo_"); 
var UL_TXT_CARGO = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__especifique_el_cargo_"); 
var UL_TXT_POSICION = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_title_"); 

//VARIABLES DE CONTROL DE  INFORMACION ACADEMICA
//------------------------------------------------------------------------------------------------------------------

var UL_TB_001 = FCC_GET_ELEMENTO_BYID("UL_TB_001");
var UL_TB_002 = FCC_GET_ELEMENTO_BYID("UL_TB_002");
var UL_TB_003 = FCC_GET_ELEMENTO_BYID("UL_TB_003");
var UL_TB_004 = FCC_GET_ELEMENTO_BYID("UL_TB_004");
var UL_TB_005 = FCC_GET_ELEMENTO_BYID("UL_TB_0055");

var UL_SECCION_MSJ_001 = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__UL_MSG_001_");
var UL_SECCION_MSJ_002 = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__UL_MSG_0022_");
var UL_SECCION_MSJ_003 = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__UL_MSG_0033_");
var UL_SECCION_MSJ_004 = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__ul_msg_0044_");
var UL_SECCION_MSJ_005 = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__UL_MSG_0055_");

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
var UL_LISTA_CARRERA_PRACTICAPRE_DES = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__carreras_para_practicas_pre_pr___");


var UL_LISTA_NIVEL_PRACTICAPRE_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_class_level___");
var UL_WIDGET_NIVEL_PRACTICAPRE_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_class_level____widget");
var UL_SECCION_NIVEL_PRACTICAPRE_OBL = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__screen_class_level___"); 


var UL_LISTA_NIVEL_PRACTICAPRE_DES = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__nivel_deseable_pre___");
var UL_SECCION_NIVEL_PRACTICAPRE_DES = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__nivel_deseable_pre___"); 


//ELEMENTOS DE PRACTICAS PRO 
//------------------------------------------------------------------------------------------------------------------

var UL_SECCION_CARRERA_PRACTICAPRO_OBL = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__screen_applicant_type___"); 
var UL_SECCION_CARRERA_PRACTICAPRO_DES = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__sf_carreras_para_practicas_pro___"); 
var UL_LISTA_CARRERA_PRACTICAPRO_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_applicant_type___");
var UL_LISTA_CARRERA_PRACTICAPRO_DES = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__sf_carreras_para_practicas_pro___");

//ELEMENTOS DE EMPLEOS Y OTROS 
//------------------------------------------------------------------------------------------------------------------

var UL_SECCION_CARRERA_EMPLEO_OBL = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__screen_minor___"); 
var UL_SECCION_CARRERA_EMPLEO_DES = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__carrera_profesional_emp___"); 
var UL_SELECT_CARRERA_EMPLEO_OBL= FCC_GET_ELEMENTO_BYNAME("dnf_class_values[job][screen_minor][]");
var UL_LIST_CARRERA_EMPLEO_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_minor____widget");


var UL_SELECT_CONDICION_EMPLEO_OBL= FCC_GET_ELEMENTO_BYNAME("dnf_class_values[job][screen_certificate][]");
var UL_SECCION_CONDICION_EMPLEO_OBL = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__screen_certificate___"); 
var UL_SECCION_CONDICION_EMPLEO_DES = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__condicionnivel___"); 

var UL_ARREGLO_CARRERA_EMPLEO_OBL = new Array("0025", "0020", "0040", "0060", "0080", "0100", "0120", "0140", "0160", "0180", "0200", "0220", "0240", "0260", "0280", "0300");
var UL_ARREGLO_CONDICION_EMPLEO_OBL = new Array("0080","0060", "0040", "0020");	

var UL_LIST_CONDICION_EMPLEO_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_certificate____widget");


var UL_WIDGET_CARRERA_EMPLEO_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_minor____widget");

var UL_WIDGET_CONDICION_EMPLEO_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_certificate____widget");

/*############################################################################################################################*/
// LISTENERS
/*##############################################################################################################################*/

try{UL_CBX_001.addEventListener("change", UL_HABILITA_IDIOMA);}catch(err){}
try{UL_CBX_002.addEventListener("change", UL_HABILITA_HABILIDAD);}catch(err){}

try{UL_TXT_CORREO_DIRECCION.addEventListener("change", UL_COMPONE_CORREO);}catch(err){}
try{UL_CHK_CORREO.addEventListener("change", FCC_VER_CORREO);}catch(err){}

// POSICION A PUBLICAR
try{UL_LISTA_AREA.addEventListener("change", UL_CALCULA_POSICION);}catch(err){}
try{UL_LISTA_CARGO.addEventListener("change", UL_CALCULA_POSICION);}catch(err){}

try{UL_TXT_AREA.addEventListener("change",  function(){UL_TXT_AREA.value = UL_TXT_AREA.value.toUpperCase();  UL_CALCULA_POSICION(); }  );}catch(err){}

try{UL_TXT_CARGO.addEventListener("change", function(){UL_TXT_CARGO.value = UL_TXT_CARGO.value.toUpperCase();  UL_CALCULA_POSICION(); } );}catch(err){}

try{UL_TXT_POSICION.addEventListener("change", function(){UL_TXT_POSICION.value = UL_TXT_POSICION.value.toUpperCase();});}catch(err){}




try{UL_TB_001.addEventListener("change", function(){UL_TB_001_CHANGE(UL_CONTROL_LISTENER);});}catch(err){console.log("ERR LISTENER: UL_TB_001_CHANGE");}
try{UL_TB_002.addEventListener("change", function(){UL_TB_002_CHANGE(UL_CONTROL_LISTENER);});}catch(err){console.log("ERR LISTENER: UL_TB_002_CHANGE");}
try{UL_TB_003.addEventListener("change", function(){UL_TB_003_CHANGE(UL_CONTROL_LISTENER);});}catch(err){console.log("ERR LISTENER: UL_TB_003_CHANGE");}
try{UL_TB_004.addEventListener("change", function(){UL_TB_004_CHANGE(UL_CONTROL_LISTENER);});}catch(err){console.log("ERR LISTENER: UL_TB_004_CHANGE");}
try{UL_TB_005.addEventListener("change", function(){UL_TB_005_CHANGE(UL_CONTROL_LISTENER);});}catch(err){console.log("ERR LISTENER: UL_TB_005_CHANGE");}

/*
// BLOQUEANDO ACCIONES NO DESEADAS ;)
$(document).ready(function() {
  $('form').keypress(function(e){   
    if(e == 13){return false;}
  });
  $('input').keypress(function(e){
    if(e.which == 13){return false;}
  });
});

*/
/*############################################################################################################################*/
//FUNCION		:	ONLOAD
//DETALLE		:	Función principal que analiza el detalle de los formularios y acciones.
//					Se ejecuta una vez acasarados todos los componentes de la pagina
/*############################################################################################################################*/

window.onload=function() {

// VALIDACION DE EJECUCION DE JS
//---------------------------------------------------------------------------------------------------------
var  UL_CODIGO="1";
	//OCULTANDO SOPORTES
	try{
		UL_SECCION_TXT_001.style.display=FCC_NONE;
		UL_SECCION_TXT_002.style.display=FCC_NONE;
		UL_SECCION_TXT_003.style.display=FCC_NONE;
		UL_SECCION_TXT_004.style.display=FCC_NONE;
		UL_SECCION_TXT_005.style.display=FCC_NONE;
	}catch(err){}
	
		try{UL_SECCION_MSJ_001.style.display=FCC_NONE;}catch(err){}
		try{UL_SECCION_MSJ_002.style.display=FCC_NONE;}catch(err){}
		try{UL_SECCION_MSJ_003.style.display=FCC_NONE;}catch(err){}
		try{UL_SECCION_MSJ_004.style.display=FCC_NONE;}catch(err){}
		try{UL_SECCION_MSJ_005.style.display=FCC_NONE;}catch(err){}
		try{UL_TXT_OTRO_IDIOMA.style.display=FCC_NONE;}catch(err){}
		try{UL_TXT_OTRO_HABILIDAD.style.display=FCC_NONE;}catch(err){}
		
	try{		
		var TEMP_ELEMENTOS = UL_BARRA_MENU[0].getElementsByTagName("input");
		var tope_barra = TEMP_ELEMENTOS.length;
		
		for ( bb = 0; bb <tope_barra ; bb++){
			if (TEMP_ELEMENTOS[bb].value=="GUARDAR Y FINALIZAR MAS TARDE"){	UL_CODIGO="0";
			}
		}			
	}catch(err){}
	
	//CONTROL TB_001
	try{	
		if(UL_TXT_001.value==""){
			UL_TXT_001.value=true;
			UL_TB_001.checked=true;
			UL_TB_001_CHANGE(true);
		}else if(UL_TXT_001.value=="true"){UL_TB_001.checked=true;	UL_TB_001_CHANGE(false);	
		}else if(UL_TXT_001.value=="false"){UL_TB_001.checked=false;UL_TB_001_CHANGE(false);}
	}catch(err){}
	
	//CONTROL TB_002
	try{
		if(UL_TXT_002.value==""){
			UL_TXT_002.value=true;
			UL_TB_002.checked=true;
			UL_TB_002_CHANGE(true);
		}else if(UL_TXT_002.value=="true"){UL_TB_002.checked=true;	UL_TB_002_CHANGE(false);	
		}else if(UL_TXT_002.value=="false"){UL_TB_002.checked=false;UL_TB_002_CHANGE(false);}
	}catch(err){}
			
	//CONTROL TB_003
	try{
		console.log("003 - desde load");
		if(UL_TXT_003.value==""){
			UL_TXT_003.value=true;
			UL_TB_003.checked=true;
			UL_TB_003_CHANGE(true);
		}else if(UL_TXT_003.value=="true"){UL_TB_003.checked=true;	UL_TB_003_CHANGE(false);	
		}else if(UL_TXT_003.value=="false"){UL_TB_003.checked=false;UL_TB_003_CHANGE(false);}
	}catch(err){}
			
	//CONTROL TB_004
	try{
		if(UL_TXT_004.value==""){
			UL_TXT_004.value=true;
			UL_TB_004.checked=true;
			UL_TB_004_CHANGE(true);
		}else if(UL_TXT_004.value=="true"){UL_TB_004.checked=true;	UL_TB_004_CHANGE(false);	
		}else if(UL_TXT_004.value=="false"){UL_TB_004.checked=false;UL_TB_004_CHANGE(false);}
	}catch(err){}
					
	//CONTROL TB_005
	try{
		if(UL_TXT_005.value==""){
			UL_TXT_005.value=true;
			UL_TB_005.checked=true;
			UL_TB_005_CHANGE(true);
		}else if(UL_TXT_005.value=="true"){UL_TB_005.checked=true;	UL_TB_005_CHANGE(false);	
		}else if(UL_TXT_005.value=="false"){UL_TB_005.checked=false;UL_TB_005_CHANGE(false);}
	}catch(err){}
	
	
	//CARTACRERISTIAS DE LA FECHA DE PUBLICACIONES
	
	//UL_TXT_FECHAPUBLICACION.readOnly  = true;
	//UL_BTN_PUBLICAR.style.display=FCC_NONE;
	//UL_BTN_BORRAR.style.display=FCC_NONE;
	
	UL_TXT_006.readOnly  = true;

	UL_SECCION_SLC_006.style.display="";
	UL_SECCION_TXT_006.style.display=FCC_NONE;
	UL_SECCION_TXT_007.style.display=FCC_NONE;
	
	/*
	if (UL_CODIGO == 0 ) { 
		//FCC_INICIA_AFECHA();
		
		UL_SECCION_SLC_006.style.display="";
		UL_SECCION_TXT_006.style.display=FCC_NONE;
		UL_SECCION_TXT_007.style.display=FCC_NONE;
	} else{
		UL_SECCION_SLC_006.style.display=FCC_NONE;
		UL_SECCION_TXT_006.style.display="";
	 	//UL_SECCION_TXT_007.style.display="";	
	}
	*/
		
	UL_INICIA_IDIOMA();
	UL_INICIA_HABILIDAD();
	
	//CARACTERISTICAS DEL CORREO
	
	try{
		UL_CORREO= UL_TXT_CORREO.value;
		UL_CORREO_DOMINIO= UL_CORREO.substring(UL_CORREO.indexOf('@'));
		UL_CORREO_DIRECCION = UL_CORREO.substring(0,UL_CORREO.indexOf('@'));
			
		UL_TXT_CORREO_DIRECCION.value=UL_CORREO_DIRECCION;	
		UL_TXT_CORREO_DOMINIO.value=UL_CORREO_DOMINIO;
		
		UL_TXT_CORREO.readOnly  = true;
		UL_TXT_CORREO_DOMINIO.readOnly  = true;

	}catch(err){}
		
	FCC_VER_CORREO();	
	
	//CARGA INICIAL DE ACTIVIDADES
	FCC_CARGA_LISTA_ACTIVIDADES();
	
	//HABILITA LISTENERS
	UL_CONTROL_LISTENER=true;
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
function UL_TB_001_CHANGE(TEMP_ACCION){
	//ok
	console.log ("UL_TB_001_CHANGE: "+UL_TB_001.checked);
	var TEMP_CONTROL = UL_TB_001.checked;
	UL_TXT_001.value = TEMP_CONTROL;
	
	try{	
			
		if (TEMP_CONTROL) {		
			UL_LISTA_CARRERA_PRACTICAPRE_OBL.style.height = "360px";	
			
			UL_SECCION_CARRERA_PRACTICAPRE_OBL.style.display=FCC_VIEW;
			UL_SECCION_CARRERA_PRACTICAPRE_DES.style.display=FCC_NONE;
			UL_SECCION_MSJ_001.style.display=FCC_NONE;	
			if(TEMP_ACCION){FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRE_OBL,"DEL");}
			
		} else if (!TEMP_CONTROL){
			
			UL_LISTA_CARRERA_PRACTICAPRE_DES.style.height = "360px";
			
			UL_SECCION_CARRERA_PRACTICAPRE_OBL.style.display=FCC_NONE;
			UL_SECCION_CARRERA_PRACTICAPRE_DES.style.display=FCC_VIEW;
			UL_SECCION_MSJ_001.style.display=FCC_VIEW;	
			
			if(TEMP_ACCION){FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRE_OBL,"ADD");}
		}
	}catch(err){}

}

// PRACTICAS PREPROFESIONALES - NIVELES	
function UL_TB_002_CHANGE(TEMP_ACCION){
	//ok
	console.log ("UL_TB_002_CHANGE: "+UL_TB_002.checked);
	
	try{
		var TEMP_CONTROL = UL_TB_002.checked;
			UL_TXT_002.value = TEMP_CONTROL;

		if (TEMP_CONTROL) {
			
			UL_LISTA_NIVEL_PRACTICAPRE_OBL.style.height = "270px";
			
			UL_SECCION_NIVEL_PRACTICAPRE_OBL.style.display=FCC_VIEW;
			UL_SECCION_NIVEL_PRACTICAPRE_DES.style.display=FCC_NONE;
			UL_SECCION_MSJ_002.style.display=FCC_NONE;	
			
			if(TEMP_ACCION){FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_NIVEL_PRACTICAPRE_OBL,"DEL");}
			
		} else if (!TEMP_CONTROL){
			
			UL_LISTA_NIVEL_PRACTICAPRE_DES.style.height = "270px";
			
			UL_SECCION_NIVEL_PRACTICAPRE_OBL.style.display=FCC_NONE;
			UL_SECCION_NIVEL_PRACTICAPRE_DES.style.display=FCC_VIEW;
			UL_SECCION_MSJ_002.style.display=FCC_VIEW;	
			
			if(TEMP_ACCION){FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_NIVEL_PRACTICAPRE_OBL,"ADD");}
		}
	}catch(err){}
}

// EMPLEOS - CARRERAS

function UL_TB_003_CHANGE(TEMP_ACCION){
		
	var TEMP_CONTROL = UL_TB_003.checked;
	UL_TXT_003.value = TEMP_CONTROL;
	
	if (TEMP_CONTROL) {
			
		try{ // ACCION SOBRE VISUALIZACION DE OPCIONES 
			UL_SECCION_CARRERA_EMPLEO_OBL.style.display=FCC_VIEW;
			UL_SECCION_CARRERA_EMPLEO_DES.style.display=FCC_NONE;
			UL_SECCION_MSJ_003.style.display=FCC_NONE;	

		}catch(err){}
			
		try{ // ACCION SOBRE COPORTAMIENTO DE CAMPOS 	
			if(TEMP_ACCION){		

				FCC_SELECCION_LISTA_JERARQUICA1(UL_WIDGET_CARRERA_EMPLEO_OBL, UL_SELECT_CARRERA_EMPLEO_OBL[1],UL_ARREGLO_CARRERA_EMPLEO_OBL,"DEL");

				
			}
		}catch(err){}		
					
	}else if (!TEMP_CONTROL){
			
			try{// ACCION SOBRE VISUALIZACION DE OPCIONES 
				UL_SECCION_CARRERA_EMPLEO_OBL.style.display=FCC_NONE;
				UL_SECCION_CARRERA_EMPLEO_DES.style.display=FCC_VIEW;
				UL_SECCION_MSJ_003.style.display=FCC_VIEW;	

			}catch(err){}

			try{	
				if(TEMP_ACCION){ 
					
					
					FCC_SELECCION_LISTA_JERARQUICA1(UL_WIDGET_CARRERA_EMPLEO_OBL, UL_SELECT_CARRERA_EMPLEO_OBL[1],UL_ARREGLO_CARRERA_EMPLEO_OBL,"ADD");


				}	
			}catch(err){}
		}
		

}			
		
		
/*###################################################################################################################*/
// FUNCION		:	FCC_SELECCION_LISTA_JERARQUICA
// DETALLE		:	Selecciona, deselecciona elementos de un picklista jerarquico multivalor (con popup)
/*###################################################################################################################*/

function FCC_SELECCION_LISTA_JERARQUICA1(TEMP_LISTA_MULTIPLE, TEMP_SELECT,TEMP_ARREGLO, ACCION){
	
	var TEMP_ELEMENT = document.createElement("option");
	var  TEMP_TOPE_ARREGLO = TEMP_ARREGLO.length;
	var  TEMP_TOPE_LISTA = TEMP_SELECT.length;	

	

		//LIMPIANDO LISTA DE PRESENTACION CON WIDGET
		try{		
			var TEMP_MULTIPLE_SELECCION = TEMP_LISTA_MULTIPLE.getElementsByClassName("scrollable_readonly_ms")[0];
			var TEMP_MULTIPLE_SELECCION_NAME = TEMP_MULTIPLE_SELECCION.id.substring(20, 100);
			mult_sel_del_all(TEMP_MULTIPLE_SELECCION,TEMP_MULTIPLE_SELECCION_NAME);
			
			
		}catch(err){}	
	
	if (ACCION=="ADD") {	
		//AÑADIENDO ELEMENTOS AL SELECT INTERNO
		try{
			for (ni=0; ni<TEMP_TOPE_ARREGLO; ni++){
				TEMP_ELEMENT = document.createElement("option");
				TEMP_ELEMENT.value = TEMP_ARREGLO[ni];
				TEMP_SELECT.options.add(TEMP_ELEMENT,0);
				TEMP_SELECT.options[0].selected = true;
			}
		}catch(err){}	
		
	} else if (ACCION=="DEL"){
		try{
			
			console.log("borrando");
			
			var TEMP_MULTIPLE_SELECCION = TEMP_LISTA_MULTIPLE.getElementsByClassName("scrollable_readonly_ms")[0];
			var TEMP_MULTIPLE_SELECCION_NAME = TEMP_MULTIPLE_SELECCION.id.substring(20, 100);
			
			mult_sel_del_all(TEMP_MULTIPLE_SELECCION,TEMP_MULTIPLE_SELECCION_NAME);
			
		}catch(err){}
	}
}
		
		
		
		
		
		
		
		
		


		

// EMPLEOS - CARRERAS

function UL_TB_004_CHANGE(TEMP_ACCION){
	
	var TEMP_CONTROL = UL_TB_004.checked;
	UL_TXT_004.value = TEMP_CONTROL;
	
	if (TEMP_CONTROL) {
			
		try{ // ACCION SOBRE VISUALIZACION DE OPCIONES 
			UL_SECCION_CONDICION_EMPLEO_OBL.style.display=FCC_VIEW;
			UL_SECCION_CONDICION_EMPLEO_DES.style.display=FCC_NONE;
			UL_SECCION_MSJ_004.style.display=FCC_NONE;	

		}catch(err){}
			
		try{ // ACCION SOBRE COPORTAMIENTO DE CAMPOS 	
			if(TEMP_ACCION){	
				FCC_SELECCION_LISTA_JERARQUICA1(UL_WIDGET_CONDICION_EMPLEO_OBL, UL_SELECT_CONDICION_EMPLEO_OBL[1],UL_ARREGLO_CONDICION_EMPLEO_OBL,"DEL");
			}
		}catch(err){}		
					
	}else if (!TEMP_CONTROL){
			
			try{// ACCION SOBRE VISUALIZACION DE OPCIONES 
				UL_SECCION_CONDICION_EMPLEO_OBL.style.display=FCC_NONE;
				UL_SECCION_CONDICION_EMPLEO_DES.style.display=FCC_VIEW;
				UL_SECCION_MSJ_004.style.display=FCC_VIEW;	

			}catch(err){}

			try{	
				if(TEMP_ACCION){ 
					FCC_SELECCION_LISTA_JERARQUICA1(UL_WIDGET_CONDICION_EMPLEO_OBL, UL_SELECT_CONDICION_EMPLEO_OBL[1],UL_ARREGLO_CONDICION_EMPLEO_OBL,"ADD");
				}	
			}catch(err){}
		}
}	

// PRACTICAS PRO - CARRERAS	
function UL_TB_005_CHANGE(TEMP_ACCION){
	//ok
	console.log ("UL_TB_005_CHANGE: "+UL_TB_005.checked);

	try{
		var TEMP_CONTROL = UL_TB_005.checked;
		UL_TXT_005.value = TEMP_CONTROL;
		
		if (TEMP_CONTROL) {
			
			
			UL_LISTA_CARRERA_PRACTICAPRO_OBL.style.height = "360px";
			
			UL_SECCION_CARRERA_PRACTICAPRO_OBL.style.display=FCC_VIEW;
			UL_SECCION_CARRERA_PRACTICAPRO_DES.style.display=FCC_NONE;
			UL_SECCION_MSJ_005.style.display=FCC_NONE;	

			
			if(TEMP_ACCION){FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRO_OBL,"DEL");}
			
		} else if (!TEMP_CONTROL){
			
			UL_LISTA_CARRERA_PRACTICAPRO_DES.style.height = "360px";
			
			UL_SECCION_CARRERA_PRACTICAPRO_OBL.style.display=FCC_NONE;
			UL_SECCION_CARRERA_PRACTICAPRO_DES.style.display=FCC_VIEW;
			UL_SECCION_MSJ_005.style.display=FCC_VIEW;	

			if(TEMP_ACCION){FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRO_OBL,"ADD");}
		}
	}catch(err){
		//console.log ("ERR: UL_TB_005_CHANGE");
	}
}

/*###################################################################################################################*/
// FUNCION		:	FCC_SELECCION_LISTA_JERARQUICA
// DETALLE		:	Selecciona, deselecciona elementos de un picklista jerarquico multivalor (con popup)
/*###################################################################################################################*/

function FCC_SELECCION_LISTA_JERARQUICA(TEMP_LISTA, TEMP_SELECT,TEMP_ARREGLO, ACCION){
	
	var TEMP_ELEMENT = document.createElement("option");
	var  TEMP_TOPE_ARREGLO = TEMP_ARREGLO.length;
	var  TEMP_TOPE_LISTA = TEMP_SELECT.length;		

		//LIMPIANDO LISTA DE PRESENTACION CON WIDGET
		try{
			var pp = TEMP_LISTA.getElementsByClassName("pl-widget pl-widget-multi");
			var jj = pp[0].getElementsByClassName("pl-rm");
					
			var tope= jj.length;
			for (ii= 0; ii<tope ; ii++){
				jj[0].click();
			}
		}catch(err){}	
	
	if (ACCION=="ADD") {	
		//AÑADIENDO ELEMENTOS AL SELECT INTERNO
		try{
			for (ni=0; ni<TEMP_TOPE_ARREGLO; ni++){
				TEMP_ELEMENT = document.createElement("option");
				TEMP_ELEMENT.value = TEMP_ARREGLO[ni];
				TEMP_SELECT.options.add(TEMP_ELEMENT,0);
				TEMP_SELECT.options[0].selected = true;
			}
		}catch(err){}	
		
	} else if (ACCION=="DEL"){
		try{
			var ul = TEMP_LISTA.getElementsByTagName("ul")[0];	
			var li= ul.getElementsByTagName('li'); 
			var tope_lista = li.length
			
			for(xi=0; xi<tope_lista; xi++){
				ul.removeChild(ul.childNodes[0]);
			}
		}catch(err){}		
		
		//BORRANDO ELEMENTOS DE LA SELECT INTERNO
		try{
			for (ni=0; ni<TEMP_TOPE_ARREGLO;  ni++){
				TEMP_SELECT.options.remove(0);
			}	
		}catch(err){}
	}
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









/*###################################################################################################################*/
// FUNCION		:	FCC_CONTROL DE IDICOMAS
// DETALLE		:	AÑADE Y ELEIINA LISTA DE IDIOMAS
/*###################################################################################################################*/

function UL_HABILITA_IDIOMA() {
	try{
		
		if (UL_CBX_001.value == "OTRO" ){
			UL_TXT_OTRO_IDIOMA.style.display="";
		} else{
			UL_TXT_OTRO_IDIOMA.style.display=FCC_NONE;
		}
	}catch(err){}
}
	
function UL_ADD_IDIOMA() {
	try{
		var idioma = document.getElementById("UL_CBX_001");
		var nivel = document.getElementById("UL_CBX_002");
		var lista = document.getElementById("UL_GRD_001");
		var valor = "";
		
		if (idioma.value == "OTRO" ){
			valor = UL_TXT_OTRO_IDIOMA.value + "-" + nivel.value;
		} else{
			valor = idioma.value + "-" + nivel.value;
		}
	

		var TEMP_ELEMENT = document.createElement("option");
		TEMP_ELEMENT.text = valor;
		TEMP_ELEMENT.value = valor;

		lista.options.add(TEMP_ELEMENT,0);

		UL_LISTA_IDIOMAS();
	}catch(err){}
}

function UL_INICIA_IDIOMA() {
	try{
		
		var resumen = document.getElementById("dnf_class_values_job__UL_TXT_061_").value;
		var lista = document.getElementById("UL_GRD_001");
		var TEMP_ELEMENT = document.createElement("option");

		var arrayDeCadenas = resumen.split(" / ");
		var limitell = arrayDeCadenas;
		
		for (ll=0 ; ll<limitell.length; ll++){
			
	
			TEMP_ELEMENT = document.createElement("option");
			TEMP_ELEMENT.text = arrayDeCadenas[ll];
			TEMP_ELEMENT.value = arrayDeCadenas[ll];
			lista.options.add(TEMP_ELEMENT,0);
		}
		
	}catch(err){}
}

function UL_DEL_IDIOMA() {
	try{
		var lista = document.getElementById("UL_GRD_001");
		lista.options.remove(lista.selectedIndex);

		UL_LISTA_IDIOMAS();
	}catch(err){}
}

function UL_LISTA_IDIOMAS() {
	try{
		var lista = document.getElementById("UL_GRD_001");
		var tope = lista.length;
		var resumen = document.getElementById("dnf_class_values_job__UL_TXT_061_");

		resumen.value="";
		resumen.value+=lista.options[0].text;  

		  for (i=1; i<tope; i++){
			  resumen.value+=" / "+lista.options[i].text;
		  }
	}catch(err){}
}


/*###################################################################################################################*/
// FUNCION		:	FCC CALCULA POSICION
// DETALLE		:	CALCULA LA POSICION A PUBLICAR
/*###################################################################################################################*/

function UL_CALCULA_POSICION(){
	try{
		var TEMP_AREA =  UL_LISTA_AREA.options[UL_LISTA_AREA.selectedIndex].text;
		var TEMP_CARGO = UL_LISTA_CARGO.options[UL_LISTA_CARGO.selectedIndex].text;
		
		var TEMP_AREA_2 = UL_TXT_AREA.value;
		var TEMP_CARGO_2= UL_TXT_CARGO.value;
		
		if (TEMP_AREA_2!=""){	TEMP_AREA=TEMP_AREA_2;}
		if (TEMP_CARGO_2!=""){TEMP_CARGO=TEMP_CARGO_2;}
		
		UL_TXT_POSICION.value=TEMP_CARGO.toUpperCase()+" DE "+TEMP_AREA.toUpperCase();
	}catch(err){}
}


function UL_COMPONE_CORREO(){


	try{
		var TEMP_DOMINIO =  UL_CORREO_DOMINIO;
		var TEMP_DIRECCION = UL_TXT_CORREO_DIRECCION.value;

		if (TEMP_DIRECCION!=""){
			UL_TXT_CORREO.value=TEMP_DIRECCION+TEMP_DOMINIO;
		}
	}catch(err){}


}


function FCC_INICIA_AFECHA(){


	try{
			
		var numero ="1";
		  //la fecha
		  var TuFecha = new Date();
		  
		  //dias a sumar
		  var dias = parseInt(numero);
		  
		  //nueva fecha sumada
		  TuFecha.setDate(TuFecha.getDate() + dias);
		  //formato de salida para la fecha
		  
		 UL_TXT_FECHAPUBLICACION.value= TuFecha.getFullYear() + '-' + (TuFecha.getMonth() + 1)  + '-' + TuFecha.getDate();

	}catch(err){}


}
function FCC_VER_CORREO(){


	try{
			if(UL_CHK_CORREO.checked){
				UL_SECCION_CORREO_ORIGINAL.style.display = FCC_NONE;
				UL_SECCION_CORREO.style.display = "";
			} else{
				UL_SECCION_CORREO_ORIGINAL.style.display = FCC_NONE;
				UL_SECCION_CORREO.style.display = FCC_NONE;

			}

	}catch(err){}


}

/*###################################################################################################################*/
// FUNCION		:LISTA DE ACTVIDADES
// DETALLE		:FUNCIOENS PARA LSTA DE ACTIVDIADES
/*###################################################################################################################*/


function FCC_CARGA_LISTA_ACTIVIDADES(){
	
	
	
	
	
}



function UL_HABILITA_HABILIDAD() {
	try{
		
		if (UL_CBX_003.value == "OTRO" ){
			UL_TXT_OTRO_HABILIDAD.style.display="";
		} else{
			UL_TXT_OTRO_HABILIDAD.style.display=FCC_NONE;
		}
	}catch(err){}
}
	
function UL_ADD_HABILIDAD() {
	try{
		var habilidad = UL_CBX_003;
		var lista = document.getElementById("UL_GRD_002");
		
		var valor = "";
		
		if (habilidad.value == "OTRO" ){
			valor = UL_TXT_OTRO_HABILIDAD.value;
		} else{
			valor = UL_CBX_003.value;
		}
	
		var TEMP_ELEMENT = document.createElement("option");
		TEMP_ELEMENT.text = valor;
		TEMP_ELEMENT.value = valor;

		lista.options.add(TEMP_ELEMENT,0);

		UL_LISTA_HABILIDAD();
	}catch(err){}
}

function UL_INICIA_HABILIDAD() {
	try{
		
		var resumen = document.getElementById("dnf_class_values_job__ul_txt_077_").value;
		var lista = document.getElementById("UL_GRD_002");
		var TEMP_ELEMENT = document.createElement("option");

		var arrayDeCadenas = resumen.split(" / ");
		var limitell = arrayDeCadenas;
		
		for (ll=0 ; ll<limitell.length; ll++){
	
			TEMP_ELEMENT = document.createElement("option");
			TEMP_ELEMENT.text = arrayDeCadenas[ll];
			TEMP_ELEMENT.value = arrayDeCadenas[ll];
			lista.options.add(TEMP_ELEMENT,0);
		}
		
	}catch(err){}
}

function UL_DEL_HABILIDAD() {
	try{
		var lista = document.getElementById("UL_GRD_002");
		lista.options.remove(lista.selectedIndex);

		UL_LISTA_HABILIDAD();
	}catch(err){}
}

function UL_LISTA_HABILIDAD() {
	try{
		var lista = document.getElementById("UL_GRD_002");
		var tope = lista.length;
		var resumen = document.getElementById("dnf_class_values_job__ul_txt_077_");

		resumen.value="";
		resumen.value+=lista.options[0].text;  

		  for (i=1; i<tope; i++){
			  resumen.value+=" / "+lista.options[i].text;
		  }
	}catch(err){}
}






/*###################################################################################################################

FIN

#####################################################################################################################*/






	