

/*##############################################################################################################################*/

// MODELO PARA MODIFICAR INTERFACE DE:
// REGISTRO DE PUBLICACIONES DE EMPLEO - VISTA CONTACTO
//
// NAME		: FCC_PUBLICACIONES_CONTACTO.JS
	
	const FCC_PUBLICACIONES_CONTACTO_VERSION_LOCAL = "4.3";
	const FCC_PUBLICACIONES_CONTACTO_FECHA_LOCAL= "17/10/18";

/*############################################################################################################################*/

/*############################################################################################################################*/
//CONSTANTES DE VERSION
/*############################################################################################################################*/

console.log("# CONTROL FCC_PUBLICACIONES_CONTACTO V:"+FCC_PUBLICACIONES_CONTACTO_VERSION_LOCAL + " al "+FCC_PUBLICACIONES_CONTACTO_FECHA_LOCAL);

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

try{var UL_BARRA_MENU = FCC_GET_ELEMENTO_BYCLASSNAME("buttonbar buttonbar-top");}catch(err){}


//VARIABLES DE CONTROL DE EMPLEO
//------------------------------------------------------------------------------------------------------------------

var FCC_CONTROL_SOLICITUD;
var UL_POSICION;
try{var UL_CODIGO_EMPLEO = FCC_GET_ELEMENTO_BYNAME("dnf_class_values[job][visual_id]")[0];}catch(err){};
var UL_TIPO_SOLICITUD;
var UL_VACANTES ;

	
var UL_DESCRIPCION ;
var UL_DISPONIBILIDAD;
var UL_BENEFICIOS;
var UL_UBICACION;
var UL_DISP_HORARIO ;
var UL_HORARIO ;
var UL_CONOCIMIENTOS ;
var UL_EXPERIENCIA ;
var UL_INF_ADICIONAL ;

//VARIABLES DE CONTROL ACADEMICAS
//------------------------------------------------------------------------------------------------------------------

// VARIBALES PRACTICAS PRE
var UL_TXT_CARRERA_PRACTICAPRE_OBL; 
var UL_TXT_CARRERA_PRACTICAPRE_DES;
	
var UL_TXT_NIVEL_PRACTICAPRE_OBL;
var UL_TXT_NIVEL_PRACTICAPRE_DES;
				
var UL_TXT_RANKING_PRACTICAPRE_OBL;
var UL_TXT_RANKING_PRACTICAPRE_DES;

// VARIBALES PRACTICAS PRO
var UL_TXT_CARRERA_PRACTICAPRO_OBL ; 
var UL_TXT_CARRERA_PRACTICAPRO_DES ;
			
var UL_TXT_NIVEL_PRACTICAPRO_OBL ;
var UL_TXT_NIVEL_PRACTICAPRO_DES ;				

// VARIBALES INTERNADO
var UL_TXT_CARRERA_INTERNADO_OBL ; 
var UL_TXT_NIVEL_INTERNADO_OBL  ;

// VARIBALES EJECUTIVO
var UL_TXT_CARRERA_EJECUTIVO_OBL  ; 
var UL_TXT_MAESTRIA_EJECUTIVO_OBL  ;

// VARIBALES EMPLEOS
var UL_TXT_CARRERA_EMPLEO_OBL  ; 
var UL_TXT_CARRERA_EMPLEO_DES  ;
			
var UL_TXT_NIVEL_EMPLEO_OBL  ;
var UL_TXT_NIVEL_EMPLEO_DES  ;
				
var UL_TXT_ANIOEGRESO_EMPLEO_OBL  ;

var UL_TXT_MAESTRIA_EMPLEO_OBL  ;

// OTRAS OPORTUNIDADES
var UL_TXT_CARRERA_OTRO_OBL  ; 
var UL_TXT_CARRERA_OTRO_DES  ;
			
var UL_TXT_NIVEL_OTRO_OBL  ;
var UL_TXT_NIVEL_OTRO_DES  ;
				
var UL_TXT_ANIOEGRESO_OTRO_OBL  ;

var UL_TXT_MAESTRIA_OTRO_OBL  ;


//VARIABLES DE CONTROL DE REMUNERACIONES
//------------------------------------------------------------------------------------------------------------------

var UL_CBX_DIVISA = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__divisa_");
var UL_TXT_REMUNERACION = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__remuneracion_mensual_");
var UL_TXT_REMUNERACION_VISIBLE = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__remuneracion_");

var UL_RADIOS_REMUNERACION = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__desea_mostrar_el_monto_de_la_r__widget"); 
var UL_RDO_REMUNERACION_SI = FCC_GET_ELEMENTO_BYNAME("dnf_class_values[job][desea_mostrar_el_monto_de_la_r]"); 

var UL_SECCION_REMUNERACION_VISIBLE = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__remuneracion_"); 


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
var UL_SECCION_NIVEL_PRACTICAPRE_DES = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__nivel_deseable_pre___"); 
var UL_SECCION_NIVEL_PRACTICAPRE_OBL = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__screen_class_level___"); 
var UL_WIDGET_NIVEL_PRACTICAPRE_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_class_level____widget");

var UL_LISTA_NIVEL_PRACTICAPRE_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_class_level___");
var UL_LISTA_NIVEL_PRACTICAPRE_DES = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__nivel_deseable_pre___");

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

// TOOGLE BUTTONS
try{UL_TB_001.addEventListener("change", function(){UL_TB_001_CHANGE(UL_CONTROL_LISTENER);});}catch(err){console.log("ERR LISTENER: UL_TB_001_CHANGE");}
try{UL_TB_002.addEventListener("change", function(){UL_TB_002_CHANGE(UL_CONTROL_LISTENER);});}catch(err){console.log("ERR LISTENER: UL_TB_002_CHANGE");}
try{UL_TB_003.addEventListener("change", function(){UL_TB_003_CHANGE(UL_CONTROL_LISTENER);});}catch(err){console.log("ERR LISTENER: UL_TB_003_CHANGE");}
try{UL_TB_004.addEventListener("change", function(){UL_TB_004_CHANGE(UL_CONTROL_LISTENER);});}catch(err){console.log("ERR LISTENER: UL_TB_004_CHANGE");}
try{UL_TB_005.addEventListener("change", function(){UL_TB_005_CHANGE(UL_CONTROL_LISTENER);});}catch(err){console.log("ERR LISTENER: UL_TB_005_CHANGE");}


// REMUNERACIONES
try{UL_RADIOS_REMUNERACION.addEventListener("click", UL_ACTUALIZA_REMUNERACION);}catch(err){}
try{UL_CBX_DIVISA.addEventListener("change", UL_ACTUALIZA_REMUNERACION);}catch(err){}
try{UL_TXT_REMUNERACION.addEventListener("change", UL_ACTUALIZA_REMUNERACION);}catch(err){}



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
	
	UL_TXT_FECHAPUBLICACION.readOnly  = true;
	UL_BTN_PUBLICAR.style.display=FCC_NONE;
	UL_BTN_BORRAR.style.display=FCC_NONE;
	
	UL_TXT_006.readOnly  = true;
	
	if (UL_CODIGO == 0 ) { 
		FCC_INICIA_AFECHA();
		
		UL_SECCION_TXT_006.style.display="";
		UL_SECCION_SLC_006.style.display=FCC_NONE;
		UL_SECCION_TXT_007.style.display="";
		UL_SECCION_SLC_007.style.display=FCC_NONE;
	} else{
		UL_SECCION_TXT_006.style.display=FCC_NONE;
		UL_SECCION_SLC_006.style.display="";
	 	UL_SECCION_TXT_007.style.display=FCC_NONE;	
		UL_SECCION_SLC_007.style.display="";
	}
		
		
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
	
	
	//REMUNERACIONES
	UL_SECCION_REMUNERACION_VISIBLE.style.display=FCC_NONE;
	
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
	
	
	console.log("hola");
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
				FCC_SELECCION_LISTA_JERARQUICA(UL_LIST_CARRERA_EMPLEO_OBL, UL_SELECT_CARRERA_EMPLEO_OBL[0],UL_ARREGLO_CARRERA_EMPLEO_OBL,"DEL");
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
					FCC_SELECCION_LISTA_JERARQUICA(UL_LIST_CARRERA_EMPLEO_OBL, UL_SELECT_CARRERA_EMPLEO_OBL[0],UL_ARREGLO_CARRERA_EMPLEO_OBL,"ADD");
				}	
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
				FCC_SELECCION_LISTA_JERARQUICA(UL_LIST_CONDICION_EMPLEO_OBL, UL_SELECT_CONDICION_EMPLEO_OBL[0],UL_ARREGLO_CONDICION_EMPLEO_OBL,"DEL");
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
					FCC_SELECCION_LISTA_JERARQUICA(UL_LIST_CONDICION_EMPLEO_OBL, UL_SELECT_CONDICION_EMPLEO_OBL[0],UL_ARREGLO_CONDICION_EMPLEO_OBL,"ADD");
				}	
			}catch(err){}
		}
}	

// PRACTICAS PRO - CARRERAS	
function UL_TB_005_CHANGE(TEMP_ACCION){
	
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
		var hab = true;
		var idioma = document.getElementById("UL_CBX_001");
		var nivel = document.getElementById("UL_CBX_002");
		var lista = document.getElementById("UL_GRD_001");
		var otro_idioma = document.getElementById("UL_TXT_OTRO_IDIOMA");
		var valor = "";
		
		if (idioma.value == "OTRO" ){
			
			if (otro_idioma.value.trim()==""){ 
				hab=false;	
				alert("Debe ingresar un idioma");
			} else{
				valor = otro_idioma.value.toUpperCase() + "-" + nivel.value;
			}

		} else{
			valor = idioma.value + "-" + nivel.value;
		}
	
		if (hab){
			var TEMP_ELEMENT = document.createElement("option");
			TEMP_ELEMENT.text = valor;
			TEMP_ELEMENT.value = valor;
			lista.options.add(TEMP_ELEMENT,0);
			UL_LISTA_IDIOMAS();
		}
	}catch(err){}
}

function UL_INICIA_IDIOMA() {
	try{
		
		var resumen = document.getElementById("dnf_class_values_job__UL_TXT_061_").value;
		var lista = document.getElementById("UL_GRD_001");
		var TEMP_ELEMENT = document.createElement("option");

		var arrayDeCadenas = resumen.split(" / ");
		var limitell = arrayDeCadenas;
		
	
		for (ll=1 ; ll<limitell.length; ll++){
			
	
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
	
	var hab = true;
	var habilidad = UL_CBX_003;
	var lista = document.getElementById("UL_GRD_002");		
	var valor = "";
	var otro = document.getElementById("UL_TXT_OTRO_HABILIDAD");
	
	try{
	
		if (habilidad.value == "OTRO" ){
			
			valor = otro.value.trim().toUpperCase();
			
			if (valor==""){ 
				hab=false;	
				alert("Debe ingresar un valor");
			}
			
		} else{
			valor = UL_CBX_003.value;
		}
	
		if (hab){
			var TEMP_ELEMENT = document.createElement("option");
			TEMP_ELEMENT.text = valor;
			TEMP_ELEMENT.value = valor;

			lista.options.add(TEMP_ELEMENT,0);

			UL_LISTA_HABILIDAD();
		}
	}catch(err){}
}

function UL_INICIA_HABILIDAD() {
	try{
		
		var resumen = document.getElementById("dnf_class_values_job__ul_txt_077_").value;
		var lista = document.getElementById("UL_GRD_002");
		var TEMP_ELEMENT = document.createElement("option");

		var arrayDeCadenas = resumen.split(" / ");
		var limitell = arrayDeCadenas;
		
		for (ll=1 ; ll<limitell.length; ll++){
	
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



/*###################################################################################################################*/
// FUNCION		:ACTUALIZA REMUNERACION
// DETALLE		:CALCULA Y COMPLETA LA RMEUNERACION VISIBLE EN CASO DE SER LA OPCION SELECCIONADA 
/*###################################################################################################################*/



function UL_ACTUALIZA_REMUNERACION (){
	
	if(UL_RDO_REMUNERACION_SI[0].checked){
		
		UL_TXT_REMUNERACION_VISIBLE.value= UL_TXT_REMUNERACION.value + " " + UL_CBX_DIVISA.options[UL_CBX_DIVISA.selectedIndex].text;
		
	}else if (!UL_RDO_REMUNERACION_SI[0].checked){
		
		UL_TXT_REMUNERACION_VISIBLE.value="";
	}
}


/*###################################################################################################################*/


// FUNCION		:CARGA VISTA PREVIA


// DETALLE		:El equivalente a la funcion load para la vista previa 


/*###################################################################################################################*/

var modal;

//FCC_AGREGA_BOTONES();
	
function CARGA_VISTA_PREVIA(){
	
//VARIABLES TEMPIORALES DE TRABAJO
var ul_temp;
var ul_temp2;
var ul_temp3;
var ul_temp4;
var ul_temp5;	
	

//VARIABLES POR TIPO DE EMPLEO
	
//Posición 
try{ UL_POSICION = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_title_");}catch(err){}

//Tipo Oferta 
try{ 

UL_TIPO_SOLICITUD = "No declarada";

ul_temp= FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_type__widget");
ul_temp2 = ul_temp.getElementsByTagName("input");
ul_temp3;

for(i=0;i< ul_temp2.length;i++){
	if (ul_temp2[i].checked){
		
		FCC_CONTROL_SOLICITUD=ul_temp2[i].value;
		
		switch(FCC_CONTROL_SOLICITUD) {
			case "22":
				UL_TIPO_SOLICITUD = "Empleos Ejecutivos";
				break;
			case "14":
				UL_TIPO_SOLICITUD = "Empleos";
				break;
			case "3":
				UL_TIPO_SOLICITUD = "Prácticas Pre Profesionales";
				break;
			case "17":
				UL_TIPO_SOLICITUD = "Prácticas Profesionales";
				break;
			case "20":
				UL_TIPO_SOLICITUD = "Internado";
				break;	
			case "19":
				UL_TIPO_SOLICITUD = "Otras Oportunidades Laborales";
				break;		
			case "24":
				UL_TIPO_SOLICITUD = "VIP";
				break;		
			default:
				UL_TIPO_SOLICITUD = "TIpo de solicitud no declarada, contactar con el admin";
		}
	}
}
}catch(err){}

//Número de vacantes
try{ UL_VACANTES = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__num_openings_");}catch(err){}	
	
//Descripción de las principales funciones
try{
	var iframe = document.getElementById("dnf_class_values_job__job_desc__ifr");
	UL_DESCRIPCION = iframe.contentWindow.document.getElementById("tinymce");
}catch(err){}

//Disponibilidad
try{ UL_DISPONIBILIDAD = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__disponibilidad_");}catch(err){}

//Beneficios adicionales
try{ UL_BENEFICIOS = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__ingrese_informacin_adicional_q_");}catch(err){}

//Lugar de trabajo
try{ 
	ul_temp = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__ubicacin_geogrfica__widget");
	UL_UBICACION = ul_temp.getElementsByTagName("li")[0];
}catch(err){}


//Disponibilidad de horario
try{ UL_DISP_HORARIO = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__disponibilidad_de_horario_");}catch(err){}
//Horario de trabajo
try{ UL_HORARIO = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__horario_de_trabajo_");}catch(err){}
//Conocimientos
try{ UL_CONOCIMIENTOS = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__conocimientos_");}catch(err){}
//Experiencia
try{ UL_EXPERIENCIA = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__experiencia_");}catch(err){}
//Información adicional
try{ UL_INF_ADICIONAL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__ingrese_informacin_adicional_q_");}catch(err){}
	
	
	
	
// VARIBALES PRACTICAS PRE
//************************

 try{
	 UL_TXT_CARRERA_PRACTICAPRE_OBL="";
	 ul_temp = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_work_authorization___"); 
	 for (i=0 ; i<ul_temp.options.length; i++){
		 if ( ul_temp.options[i].selected){UL_TXT_CARRERA_PRACTICAPRE_OBL+=ul_temp.options[i].text + "<br>"} 
	 }
 }catch(err){}
 

 try{
	 UL_TXT_CARRERA_PRACTICAPRE_DES="";
	 ul_temp = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__carreras_para_practicas_pre_pr___"); 
	 for (i=0 ; i<ul_temp.options.length; i++){
		if ( ul_temp.options[i].selected){UL_TXT_CARRERA_PRACTICAPRE_DES+=ul_temp.options[i].text + "<br>"} 
	 }
 }catch(err){}


//NIVEL

  try{
	 UL_TXT_NIVEL_PRACTICAPRE_OBL="";
	 ul_temp = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_class_level___"); 
	 for (i=0 ; i<ul_temp.options.length; i++){
		 if ( ul_temp.options[i].selected){UL_TXT_NIVEL_PRACTICAPRE_OBL+=ul_temp.options[i].text + "<br>"} 
	 }
 }catch(err){}
 

 try{
	 UL_TXT_NIVEL_PRACTICAPRE_DES="";
	 ul_temp = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__nivel_deseable_pre___"); 
	 for (i=0 ; i<ul_temp.options.length; i++){
		if ( ul_temp.options[i].selected){UL_TXT_NIVEL_PRACTICAPRE_DES+=ul_temp.options[i].text + "<br>"} 
	 }
 }catch(err){}
 
 	
 try{				
	UL_TXT_RANKING_PRACTICAPRE_DES = "";
	ul_temp= FCC_GET_ELEMENTO_BYID("dnf_class_values_job__ranking_acadmico_ulima_");
	
	UL_TXT_RANKING_PRACTICAPRE_DES= ul_temp.options[ul_temp.selectedIndex].text
	
	
 }catch(err){}

// VARIBALES PRACTICAS PRO
//************************
 
 try{
	 UL_TXT_CARRERA_PRACTICAPRO_OBL="";
	 ul_temp = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_applicant_type___"); 
	 for (i=0 ; i<ul_temp.options.length; i++){
		 if ( ul_temp.options[i].selected){UL_TXT_CARRERA_PRACTICAPRO_OBL+=ul_temp.options[i].text + "<br>"} 
	 }
 }catch(err){}
 

 try{
	 UL_TXT_CARRERA_PRACTICAPRO_DES="";
	ul_temp = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__sf_carreras_para_practicas_pro___"); 
	 for (i=0 ; i<ul_temp.options.length; i++){
		if ( ul_temp.options[i].selected){UL_TXT_CARRERA_PRACTICAPRO_DES+=ul_temp.options[i].text + "<br>"} 
	 }
 }catch(err){}
 
 
try{ 
	UL_TXT_NIVEL_PRACTICAPRO_DES="";
	ul_temp = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__condicion_prac_pro____widget");
	ul_temp2=ul_temp.getElementsByTagName("li");
	for (i=0 ; i<ul_temp2.length; i++){	UL_TXT_NIVEL_PRACTICAPRO_DES+= ul_temp2[i].innerHTML+ "<br>";	}
}catch(err){}
 
			

// VARIBALES INTERNADO
 

try{ 
	
	UL_TXT_CARRERA_INTERNADO_OBL = "No Seleccionada";
	ul_temp= FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_degree_level____widget");
	ul_temp2 = ul_temp.getElementsByTagName("input");
	ul_temp3;

	for(i=0;i< ul_temp2.length;i++){
		if (ul_temp2[i].checked){
			
			ul_temp3=ul_temp2[i].value;
			
			switch(ul_temp3) {
				case "28":
					UL_TXT_CARRERA_INTERNADO_OBL = "PSICOLOGÍA";
					break;
				default:
					UL_TXT_CARRERA_INTERNADO_OBL = "No Seleccionada";
			}
		}
	}
}catch(err){}
 
 
 try{ 
	
	UL_TXT_NIVEL_INTERNADO_OBL = "";
	ul_temp= FCC_GET_ELEMENTO_BYID("dnf_class_values_job__niveles____widget");
	ul_temp2 = ul_temp.getElementsByTagName("input");
	ul_temp3;

	for(i=0;i< ul_temp2.length;i++){
		if (ul_temp2[i].checked){
			
			ul_temp3=ul_temp2[i].value;
			
			switch(ul_temp3) {
				case "1":
					UL_TXT_NIVEL_INTERNADO_OBL += "Nivel 11"+"<br>";
					break;
				case "2":
					UL_TXT_NIVEL_INTERNADO_OBL += "Nivel 12"+"<br>";
					break;	
				default:
					UL_TXT_NIVEL_INTERNADO_OBL = "No Seleccionada";
			}
		}
	}
}catch(err){}
 
 
 
 


// VARIBALES EMPLEOS / OTROS
//**********************************

//CARRERA
	try{ 
		UL_TXT_CARRERA_EMPLEO_OBL="";
		ul_temp = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_minor____widget");
		ul_temp2=ul_temp.getElementsByTagName("li");
		for (i=0 ; i<ul_temp2.length; i++){	UL_TXT_CARRERA_EMPLEO_OBL+= ul_temp2[i].innerHTML+ "<br>";	}
	}catch(err){}

	try{ 
		UL_TXT_CARRERA_EMPLEO_DES="";
		ul_temp = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__carrera_profesional_emp____widget");
		ul_temp2=ul_temp.getElementsByTagName("li");
		for (i=0 ; i<ul_temp2.length; i++){	UL_TXT_CARRERA_EMPLEO_DES+= ul_temp2[i].innerHTML+ "<br>";	}
	}catch(err){}

//NIVEL
	try{ 
		UL_TXT_NIVEL_EMPLEO_OBL="";
		ul_temp = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_certificate____widget");
		ul_temp2=ul_temp.getElementsByTagName("li");
		for (i=0 ; i<ul_temp2.length; i++){	UL_TXT_NIVEL_EMPLEO_OBL+= ul_temp2[i].innerHTML+ "<br>";	}
	}catch(err){}

	try{ 
		UL_TXT_NIVEL_EMPLEO_DES="";
		ul_temp = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__condicionnivel____widget");
		ul_temp2=ul_temp.getElementsByTagName("li");
		for (i=0 ; i<ul_temp2.length; i++){	UL_TXT_NIVEL_EMPLEO_DES+= ul_temp2[i].innerHTML+ "<br>";	}
	}catch(err){}

 
 //AÑO DE EGRESO
	try{
		 UL_TXT_ANIOEGRESO_EMPLEO_OBL = "";
		 UL_TXT_ANIOEGRESO_EMPLEO_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__ao_de_egreso_deseable_").value;
	}catch(err){}		

//MAESTRIA	
	try{
		UL_TXT_MAESTRIA_EMPLEO_OBL = "";
		ul_temp=FCC_GET_ELEMENTO_BYNAME("dnf_class_values[job][maestra_deseable2][]")[1];
		
		for (i=0 ; i<ul_temp.options.length; i++){
		if ( ul_temp.options[i].selected){UL_TXT_MAESTRIA_EMPLEO_OBL+=ul_temp.options[i].text + "<br>";} 
	 }
	}catch(err){
		UL_TXT_MAESTRIA_EMPLEO_OBL = "No Seleccionada";
	}		

	

	
// VARIBALES EJECUTIVO

 UL_TXT_CARRERA_EJECUTIVO_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-carrera_profesional_deseable")[0]; 
 UL_TXT_MAESTRIA_EJECUTIVO_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-maestra_deseable2")[0];
	
	
	try{ 
		UL_TXT_CARRERA_EJECUTIVO_OBL="";
		ul_temp = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__carrera_profesional_deseable____widget");
		ul_temp2=ul_temp.getElementsByTagName("li");
		for (i=0 ; i<ul_temp2.length; i++){	UL_TXT_CARRERA_EJECUTIVO_OBL+= ul_temp2[i].innerHTML+ "<br>";	}
	}catch(err){}	
	
	
//MAESTRIA	
	try{
		UL_TXT_MAESTRIA_EJECUTIVO_OBL = "";
		ul_temp=FCC_GET_ELEMENTO_BYNAME("dnf_class_values[job][maestra_deseable2][]")[1];
		
		for (i=0 ; i<ul_temp.options.length; i++){
		if ( ul_temp.options[i].selected){UL_TXT_MAESTRIA_EJECUTIVO_OBL+=ul_temp.options[i].text + "<br>";} 
	 }
	}catch(err){
		UL_TXT_MAESTRIA_EJECUTIVO_OBL = "No Seleccionada";
	}	
	
	
	
	
	
	
	////////////////////////
	////////////////////////
	///////////////////////
	
	
	
		try{FCC_AGREGA_TITULO(UL_POSICION.value);}catch(err){}
		
		try{FCC_AGREGA_CABECERA("Número de vacantes",UL_VACANTES.value);}catch(err){}
		try{FCC_AGREGA_CABECERA("Tipo de solicitud",UL_TIPO_SOLICITUD);}catch(err){}
		try{FCC_AGREGA_CABECERA("Código de oferta",UL_CODIGO_EMPLEO.value);}catch(err){}
		
		try{FCC_AGREGA_DESCRIPCION("Descripción de las principales funciones",UL_DESCRIPCION.innerHTML);}catch(err){}
		
		try{FCC_AGREGA_CAMPOS("Información adicional",UL_INF_ADICIONAL.value);}catch(err){}	
		try{FCC_AGREGA_CAMPOS("Experiencia",UL_EXPERIENCIA.value);}catch(err){}
		try{FCC_AGREGA_CAMPOS("Habilidades",UL_TXT_007.value);}catch(err){}
		try{FCC_AGREGA_CAMPOS("Idiomas",UL_TXT_006.value);}catch(err){}
		try{FCC_AGREGA_CAMPOS("Conocimientos",UL_CONOCIMIENTOS.value);}catch(err){}
		try{FCC_AGREGA_CAMPOS("Horario de trabajo",UL_HORARIO.value);}catch(err){}
		try{FCC_AGREGA_CAMPOS("Disponibilidad de horario",UL_DISP_HORARIO.options[UL_DISP_HORARIO.selectedIndex].text);}catch(err){}
		try{FCC_AGREGA_CAMPOS("Lugar de trabajo",UL_UBICACION.innerHTML);}catch(err){}
		try{FCC_AGREGA_CAMPOS("Beneficios adicionales",UL_BENEFICIOS.value);}catch(err){}
		try{FCC_AGREGA_CAMPOS("Remuneración",UL_TXT_REMUNERACION_VISIBLE.value);}catch(err){}
		try{FCC_AGREGA_CAMPOS("Disponibilidad",UL_DISPONIBILIDAD.options[UL_DISPONIBILIDAD.selectedIndex].text);}catch(err){}
		
		
		
		//try{FCC_AGREGA_LATERAL("test","test");}catch(err){}
		
		
//**********************************************************

switch(FCC_CONTROL_SOLICITUD) {
	
//EMPLEO --------------------------------------------------------------------------------------------------------
	
	case '14': 	console.log("# TIPO: " + FCC_CONTROL_SOLICITUD+ " - EMPLEO: " );
		try{	
			//CARRERA 	
			if (UL_TB_003.checked){ 
				try{FCC_AGREGA_LATERAL("Carrera profesional",UL_TXT_CARRERA_EMPLEO_OBL);}catch(err){}
			}else if (VAL_TB_003=="false"){ 
				try{FCC_AGREGA_LATERAL("Carrera profesional deseable",UL_TXT_CARRERA_EMPLEO_DES);}catch(err){}
			}
					
			//NIVEL 	
			if (UL_TB_004.checked){ 
				try{FCC_AGREGA_LATERAL("Condición",UL_TXT_NIVEL_EMPLEO_OBL);}catch(err){}				
			}else if (VAL_TB_004=="false"){ 
				try{FCC_AGREGA_LATERAL("Condición deseable",UL_TXT_NIVEL_EMPLEO_DES);}catch(err){}
			}
			
			//MAESTRIA					
				try{FCC_AGREGA_LATERAL("Maestría deseable",UL_TXT_MAESTRIA_EMPLEO_OBL);}catch(err){}

			//ANIO EGRESO 				
				try{FCC_AGREGA_LATERAL("Año de egreso deseable",UL_TXT_ANIOEGRESO_EMPLEO_OBL);}catch(err){}

		}catch(err){}
		
	break;
	
	//OTRAS OPORTUNIDADES DE EMPLEO ----------------------------------------------------------------------------------------
				
	case '19':	console.log("# TIPO: " + FCC_CONTROL_SOLICITUD+ " - OTRAS OPORTUNIDADES: " );
		try{	
			//CARRERA 	
			if (UL_TB_003.checked){ 
				try{FCC_AGREGA_LATERAL("Carrera profesional",UL_TXT_CARRERA_EMPLEO_OBL);}catch(err){}
			}else if (VAL_TB_003=="false"){ 
				try{FCC_AGREGA_LATERAL("Carrera profesional deseable",UL_TXT_CARRERA_EMPLEO_DES);}catch(err){}
			}
					
			//NIVEL 	
			if (UL_TB_004.checked){ 
				try{FCC_AGREGA_LATERAL("Condición",UL_TXT_NIVEL_EMPLEO_OBL);}catch(err){}				
			}else if (VAL_TB_004=="false"){ 
				try{FCC_AGREGA_LATERAL("Condición deseable",UL_TXT_NIVEL_EMPLEO_DES);}catch(err){}
			}
			
			//MAESTRIA					
				try{FCC_AGREGA_LATERAL("Maestría deseable",UL_TXT_MAESTRIA_EMPLEO_OBL);}catch(err){}

			//ANIO EGRESO 				
				try{FCC_AGREGA_LATERAL("Año de egreso deseable",UL_TXT_ANIOEGRESO_EMPLEO_OBL);}catch(err){}

		}catch(err){}	
	break;
				
//PRACTICAS PRE PROFESIONALES ----------------------------------------------------------------------------------------
 
   case '3':	console.log("# TIPO: " + FCC_CONTROL_SOLICITUD+ " - PRACTICAS PRE: " );
		try{		
			//CARRERA 	
			if (UL_TB_001.checked){ 
				try{FCC_AGREGA_LATERAL("Carrera profesional",UL_TXT_CARRERA_PRACTICAPRE_OBL);}catch(err){}
			}else if (!UL_TB_005.checked){ 
				try{FCC_AGREGA_LATERAL("Carrera profesional deseable",UL_TXT_CARRERA_PRACTICAPRE_DES);}catch(err){}
			}
					
			//NIVEL 	
			if (UL_TB_002.checked){ 
				try{FCC_AGREGA_LATERAL("Nivel",UL_TXT_NIVEL_PRACTICAPRE_OBL);}catch(err){}
						
			}else if (!UL_TB_002.checked){ 
				try{FCC_AGREGA_LATERAL("Nivel deseable",UL_TXT_NIVEL_PRACTICAPRE_DES);}catch(err){}

			}
					
			//RANKING
				try{FCC_AGREGA_LATERAL("Ranking deseable",UL_TXT_RANKING_PRACTICAPRE_DES);}catch(err){}
			
			
				
		
		
			
		}catch(err){}		
	break;
				
//PRACTICAS PROFESIONALES ---------------------------------------------------------------------------------------------
	
	case '17':	console.log("# TIPO: " + FCC_CONTROL_SOLICITUD+ " - PRACTICAS PRO: " );
		
	
		try{	
		//INICIANDO VARIABLES DE BARRA LATERAL
	
		//CARRERA 	
		if (UL_TB_005.checked){ 
			try{FCC_AGREGA_LATERAL("Carrera profesional",UL_TXT_CARRERA_PRACTICAPRO_OBL);}catch(err){}	
			
		}else if (!UL_TB_005.checked){ 
			try{FCC_AGREGA_LATERAL("Carrera profesional deseable",UL_TXT_CARRERA_PRACTICAPRO_DES);}catch(err){}
		}
				
		//CONDICION 					
			try{FCC_AGREGA_LATERAL("Condición deseable",UL_TXT_NIVEL_PRACTICAPRO_DES);}catch(err){}
		}catch(err){

		}				
	break;
				
//INTERNADO -----------------------------------------------------------------------------------------------------------
	
	case '20':	console.log("# TIPO: " + FCC_CONTROL_SOLICITUD+ " - INTERNADO: " );
		try{
		//INICIANDO VARIABLES DE BARRA LATERAL
		
		//CARRERA 					
			try{FCC_AGREGA_LATERAL("Carrera",UL_TXT_CARRERA_INTERNADO_OBL);}catch(err){}

		
		//NIVEL 					
			try{FCC_AGREGA_LATERAL("Nivel",UL_TXT_NIVEL_INTERNADO_OBL);}catch(err){}
				
		}catch(err){}				
	break;
				
//EMPLEO EJECUTIVO ------------------------------------------------------------------------------------------------------
	
	case '22':	console.log("# TIPO: " + FCC_CONTROL_SOLICITUD+ " - EMPLEO EJECUTIVO: " );
		try{
		//INICIANDO VARIABLES DE BARRA LATERAL
			FCC_DETALLE="";
		
		//MAESTRIA 					
			try{FCC_AGREGA_LATERAL("Maestría deseable","ADMINISTRACIÓN, INGENIERÍA INDUSTRIAL");}catch(err){}
		
		//CARRERA 	
			try{FCC_AGREGA_LATERAL("Carrera deseable","ADMINISTRACIÓN, INGENIERÍA INDUSTRIAL");}catch(err){}
	
		}catch(err){}		
	break;
				
				
//NO CONTEMPLADO ----------------------------------------------------------------------------------------
				
   default: console.log("CASO NO CONTEMPLADO: " + FCC_CONTROL_SOLICITUD);	

}




//**********************************************************

}
	

function FCC_BORRA_SECCION(){

		// DECALRACION DE VARIABLES*/
		document.getElementById("FCC_TITULO").innerHTML=" ";
		document.getElementById("FCC_CABECERA").innerHTML=" ";
		document.getElementById("FCC_DESCRIPCION").innerHTML=" ";
		document.getElementById("FCC_CAMPOS").innerHTML=" ";
		document.getElementById("FCC_LATERAL").innerHTML=" ";
		
	}
	
	
	
	
	
	
function FCC_AGREGA_TITULO(FCC_VALOR){

		// DECALRACION DE VARIABLES*/
		var FCC_DOM= document.getElementById("FCC_TITULO");

		// EJECUCION DEL PROCESO*/
	
		FCC_DOM.innerHTML=FCC_VALOR;
	}


	
	function FCC_AGREGA_CABECERA(FCC_ETIQUETA,FCC_VALOR){

		// DECALRACION DE VARIABLES*/
		var FCC_DOM= document.getElementById("FCC_CABECERA");
		var FCC_ADD_DOM="";
		var FCC_TEMP_DOM="";
		
		
		// EJECUCION DEL PROCESO*/
		FCC_ADD_DOM += "<div class='field'><div class='label'>";
			FCC_ADD_DOM+= FCC_ETIQUETA;
			FCC_ADD_DOM+= "</div><div class='widget'>";
			FCC_ADD_DOM+= FCC_VALOR;
			FCC_ADD_DOM+= "</div></div>";
		
		FCC_TEMP_DOM=FCC_DOM.innerHTML;			
		FCC_DOM.innerHTML=FCC_ADD_DOM+FCC_TEMP_DOM;
	}


	function FCC_AGREGA_DESCRIPCION(FCC_ETIQUETA,FCC_VALOR){

		// DECALRACION DE VARIABLES*/
		var FCC_DOM= document.getElementById("FCC_DESCRIPCION");
		var FCC_ADD_DOM="";
		var FCC_TEMP_DOM="";

		// EJECUCION DEL PROCESO*/
		FCC_ADD_DOM += "<div class='label'>";
			FCC_ADD_DOM+= FCC_ETIQUETA;
			FCC_ADD_DOM+= "</div><div>";
			FCC_ADD_DOM+= FCC_VALOR;
			FCC_ADD_DOM+= "</div>";
		
		FCC_TEMP_DOM=FCC_DOM.innerHTML;			
		FCC_DOM.innerHTML=FCC_ADD_DOM+FCC_TEMP_DOM;
	}

		
	function FCC_AGREGA_CAMPOS(FCC_ETIQUETA,FCC_VALOR){

		// DECALRACION DE VARIABLES*/
		var FCC_DOM= document.getElementById("FCC_CAMPOS");
		var FCC_ADD_DOM="";
		var FCC_TEMP_DOM="";
		
		// EJECUCION DEL PROCESO*/
		FCC_ADD_DOM += "<div class='field'><div class='label'>";
			FCC_ADD_DOM+= FCC_ETIQUETA;
			FCC_ADD_DOM+= "</div><div class='widget'>";
			FCC_ADD_DOM+= FCC_VALOR;
			FCC_ADD_DOM+= "</div></div>";
		
		FCC_TEMP_DOM=FCC_DOM.innerHTML;			
		FCC_DOM.innerHTML=FCC_ADD_DOM+FCC_TEMP_DOM;
	}	
	
	
	function FCC_AGREGA_BOTONES(){

		// DECALRACION DE VARIABLES*/
		var FCC_DOM= document.getElementById("FCC_BOTONES");
		var FCC_ADD_DOM="";
		var FCC_TEMP_DOM="";

		// EJECUCION DEL PROCESO*/
		FCC_ADD_DOM += "<input type='button' id='UL_BTN_VISTA_PREVIA' onclick='CARGA_VISTA_PREVIA()' class='input-submit btn btn_primary' value='Carga' />";		
		FCC_TEMP_DOM=FCC_DOM.innerHTML;			
		FCC_DOM.innerHTML=FCC_ADD_DOM+FCC_TEMP_DOM;
	}	
	
	
	function FCC_AGREGA_LATERAL(FCC_ETIQUETA,FCC_VALOR){

		// DECALRACION DE VARIABLES*/
		var FCC_DOM= document.getElementById("FCC_LATERAL");
		var FCC_ADD_DOM="";
		var FCC_TEMP_DOM="";

		
		// EJECUCION DEL PROCESO*/
		FCC_ADD_DOM += "<div class='sidebar-body' style='text-align: left'><b>";
			FCC_ADD_DOM+= FCC_ETIQUETA;
			FCC_ADD_DOM+= "</b><br>";
			FCC_ADD_DOM+= FCC_VALOR;
			FCC_ADD_DOM+= "<br></div>";
		
		FCC_TEMP_DOM=FCC_DOM.innerHTML;			
		FCC_DOM.innerHTML=FCC_TEMP_DOM +FCC_ADD_DOM;
	}
	
	
		
		
    
	function MODAL_OPEN(ID_MODAL){				
		modal = document.getElementById(ID_MODAL); 
        modal.style.display = "block";
		
		FCC_BORRA_SECCION();
		CARGA_VISTA_PREVIA();
	} 	

    
	
	function MODAL_CLOSE(){		
		modal.style.display = "none";
	}		 
	
	window.onclick = function(event) {	
	
		if (event.target == modal){								
			modal.style.display = "none";} 
	} 




/*###################################################################################################################

FIN

#####################################################################################################################*/






	