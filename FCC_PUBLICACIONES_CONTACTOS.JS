
/*##############################################################################################################################*/

// PROCESOS POST: REGISTRO DE PUBLICACIONES DE EMPLEO
// USUARIO: CONTACTO DE EMPRESA
//
// NAME		: FCC_PUBLICACIONES_CONTACTO.JS
	
	const FCC_PUBLICACIONES_CONTACTO_VERSION_LOCAL = "5.4";
	const FCC_PUBLICACIONES_CONTACTO_FECHA_LOCAL= "05/12/18";

/*############################################################################################################################*/


/*############################################################################################################################*/
//MENSAJE DE VERSION
/*############################################################################################################################*/

console.log("# CONTROL FCC_PUBLICACIONES_CONTACTO V:"+FCC_PUBLICACIONES_CONTACTO_VERSION_LOCAL + " al "+FCC_PUBLICACIONES_CONTACTO_FECHA_LOCAL);

/*############################################################################################################################*/
//DECLARACION DE CONSTANTES
/*############################################################################################################################*/

const FCC_BLOCK = "block";
const FCC_NONE = "none";
const FCC_VIEW = "";
const FCC_DEBUG = true;
//if(FCC_DEBUG){console.log("");}




//UL_BARRA_MENU[0].style.display="";

try{var UL_MSJ_USUARIO = FCC_GET_ELEMENTO_BYID("all_user_hints");
UL_MSJ_USUARIO.style.display="none";
}catch(err){}

FCC_AGREGA_BOTONES_MENU("buttonbar-top");
FCC_AGREGA_BOTONES_MENU("buttonbar-bottom");
try{
	var UL_CHECK_BUSQUEDA_TEXT = document.querySelector("#dnf_class_values_job__job_type__widget > label:nth-child(20)");
	var UL_CHECK_BUSQUEDA_RADIO = document.querySelector("#dnf_class_values_job__job_type__widget > input:nth-child(19)");

	var UL_libro_CV = document.getElementsByClassName("icn-contact_book");

	if (UL_libro_CV.length>=1){
		UL_CHECK_BUSQUEDA_TEXT.style.display="";
		UL_CHECK_BUSQUEDA_RADIO.style.display="";
	} else{
		UL_CHECK_BUSQUEDA_TEXT.style.display="none"
		UL_CHECK_BUSQUEDA_RADIO.style.display="none";
	}

}catch(err){}



/*############################################################################################################################*/
// DECLARACION GENERAL DE VARIABLES DE ELEMENTOS
/*##############################################################################################################################*/


//VARIABLES DE CONTROL DE LISTENERS Y EVENTOS
//------------------------------------------------------------------------------------------------------------------

var UL_CONTROL_LISTENER =false;	



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

//VARIABLES DE TEXTO ACADEMICAS
//------------------------------------------------------------------------------------------------------------------

// VARIBALES PRACTICAS PRE
var FCC_CARRERA_PRACTICAPRE_OBL; 
var FCC_CARRERA_PRACTICAPRE_DES;
var FCC_NIVEL_PRACTICAPRE_OBL;
var FCC_NIVEL_PRACTICAPRE_DES;		
var UL_TXT_RANKING_PRACTICAPRE_OBL;
var FCC_RANKING_PRACTICAPRE_OBL;

// VARIBALES PRACTICAS PRO
var FCC_CARRERA_PRACTICAPRO_OBL; 
var FCC_CARRERA_PRACTICAPRO_DES;	
var UL_TXT_NIVEL_PRACTICAPRO_OBL;
var FCC_NIVEL_PRACTICAPRO_DES;				

// VARIBALES INTERNADO
var FCC_CARRERA_INTERNADO_OBL; 
var FCC_NIVEL_INTERNADO_OBL;

// VARIBALES EJECUTIVO
var UL_TXT_CARRERA_EJECUTIVO_OBL; 
var UL_TXT_MAESTRIA_EJECUTIVO_OBL;

var FCC_CARRERA_EJECUTIVO_OBL;
var FCC_MAESTRIA_EJECUTIVO_OBL;


// VARIBALES EMPLEOS
var FCC_CARRERA_EMPLEO_OBL; 
var FCC_CARRERA_EMPLEO_DES;
var FCC_NIVEL_EMPLEO_OBL;
var FCC_NIVEL_EMPLEO_DES;		
var FCC_ANIOEGRESO_EMPLEO_OBL;
var FCC_MAESTRIA_EMPLEO_OBL;

// OTRAS OPORTUNIDADES
var UL_TXT_CARRERA_OTRO_OBL; 
var UL_TXT_CARRERA_OTRO_DES;	
var UL_TXT_NIVEL_OTRO_OBL;
var UL_TXT_NIVEL_OTRO_DES;		
var UL_TXT_ANIOEGRESO_OTRO_OBL;
var UL_TXT_MAESTRIA_OTRO_OBL;




var UL_SECCION_TIPO_SOLICITUD = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_type__widget"); 
var UL_SECCION_LABEL_TIPO_SOLICITUD = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_type__field-label"); 
var UL_SECCION_CARGO = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__cargo_"); 
var UL_SECCION_CARGO_ESPECIFICO = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__especifique_el_cargo_"); 
var UL_SECCION_AREA = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__rea2_"); 
var UL_SECCION_AREA_ESPECIFICA = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__especifique_el_rea_"); 




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
var UL_TXT_FECHAPUBLICACION_HIDE = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_start__real"); 
var UL_TXT_FECHAFINALIZACION = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_end_"); 
var UL_TXT_FECHAFINALIZACION_HIDE = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_end__real");

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

var UL_LISTA_RANKING_PRACTICAPRE_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__ranking_acadmico_ulima_");

//ELEMENTOS DE PRACTICAS PRO 
//------------------------------------------------------------------------------------------------------------------

var UL_SECCION_CARRERA_PRACTICAPRO_OBL = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__screen_applicant_type___"); 
var UL_SECCION_CARRERA_PRACTICAPRO_DES = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__sf_carreras_para_practicas_pro___"); 
var UL_LISTA_CARRERA_PRACTICAPRO_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_applicant_type___");
var UL_LISTA_CARRERA_PRACTICAPRO_DES = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__sf_carreras_para_practicas_pro___");

var UL_LISTA_NIVEL_PRACTICAPRO_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__condicion_prac_pro____widget");

//INTERNADO
//------------------------------------------------------------------------------------------------------------------

var	UL_LISTA_CARRERA_INTERNADO_OBL= FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_degree_level____widget");
var	UL_LISTA_NIVEL_INTERNADO_OBL= FCC_GET_ELEMENTO_BYID("dnf_class_values_job__niveles____widget");



//ELEMENTOS DE EMPLEOS EJECUTIVOS
//------------------------------------------------------------------------------------------------------------------

var UL_LIST_CARRERA_EJECUTIVO_DES = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__carrera_profesional_deseable____widget");
var UL_LIST_MAESTRIA_EJECUTIVO_DES = FCC_GET_ELEMENTO_BYNAME("dnf_class_values[job][maestra_deseable2][]")[0];


//ELEMENTOS DE EMPLEOS Y OTROS 
//------------------------------------------------------------------------------------------------------------------

var UL_SECCION_CARRERA_EMPLEO_OBL = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__screen_minor___"); 
var UL_SECCION_CARRERA_EMPLEO_DES = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__carrera_profesional_emp___"); 

var UL_SELECT_CARRERA_EMPLEO_OBL= FCC_GET_ELEMENTO_BYNAME("dnf_class_values[job][screen_minor][]");
var UL_SELECT_CARRERA_EMPLEO_DES= FCC_GET_ELEMENTO_BYNAME("dnf_class_values[job][carrera_profesional_emp][]");

var UL_LIST_CARRERA_EMPLEO_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_minor____widget");
var UL_LIST_CARRERA_EMPLEO_DES = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__carrera_profesional_emp____widget");

var UL_SELECT_CONDICION_EMPLEO_OBL= FCC_GET_ELEMENTO_BYNAME("dnf_class_values[job][screen_certificate][]");
var UL_SELECT_CONDICION_EMPLEO_DES= FCC_GET_ELEMENTO_BYNAME("dnf_class_values[job][condicionnivel][]");

var UL_SECCION_CONDICION_EMPLEO_OBL = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__screen_certificate___"); 
var UL_SECCION_CONDICION_EMPLEO_DES = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__condicionnivel___"); 

var UL_ARREGLO_CARRERA_EMPLEO_OBL = new Array("0025", "0020", "0040", "0060", "0080", "0100", "0120", "0140", "0160", "0180", "0200", "0220", "0240", "0260", "0280", "0320", "0300");
var UL_ARREGLO_CONDICION_EMPLEO_OBL = new Array("0080","0060", "0040", "0020");	

var UL_LIST_CONDICION_EMPLEO_OBL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_certificate____widget");
var UL_LIST_CONDICION_EMPLEO_DES = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__condicionnivel____widget");


var UL_TXT_ANIOEGRESO_EMPLEO_DES = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__ao_de_egreso_deseable_");

var UL_LIST_MAESTRIA_EMPLEO_DES = FCC_GET_ELEMENTO_BYNAME("dnf_class_values[job][maestra_deseable2][]")[1];

/*############################################################################################################################*/
// LISTENERS
/*##############################################################################################################################*/
try{var UL_BTN_GUARDAR0 = FCC_GET_ELEMENTO_BYNAME("formaction")[0];}catch(err){}
try{var UL_BTN_GUARDAR1 = FCC_GET_ELEMENTO_BYNAME("formaction")[1];}catch(err){}
try{var UL_BTN_GUARDAR2 = FCC_GET_ELEMENTO_BYNAME("formaction")[2];}catch(err){}
try{var UL_BTN_GUARDAR3 = FCC_GET_ELEMENTO_BYNAME("formaction")[3];}catch(err){}


try{UL_BTN_GUARDAR0.addEventListener("click", UL_GUARDA_TEMPORAL);}catch(err){}
try{UL_BTN_GUARDAR1.addEventListener("click", UL_GUARDA_TEMPORAL);}catch(err){}
try{UL_BTN_GUARDAR2.addEventListener("click", UL_GUARDA_TEMPORAL);}catch(err){}
try{UL_BTN_GUARDAR3.addEventListener("click", UL_GUARDA_TEMPORAL);}catch(err){}


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
try{UL_TB_001.addEventListener("change", function(){UL_TB_001_CHANGE(UL_CONTROL_LISTENER);});
}catch(err){if(FCC_DEBUG){console.log("#ERR# LISTENER: UL_TB_001_CHANGE");}}

try{UL_TB_002.addEventListener("change", function(){UL_TB_002_CHANGE(UL_CONTROL_LISTENER);});
}catch(err){if(FCC_DEBUG){console.log("#ERR# LISTENER: UL_TB_002_CHANGE");}}

try{UL_TB_003.addEventListener("change", function(){UL_TB_003_CHANGE(UL_CONTROL_LISTENER);});
}catch(err){if(FCC_DEBUG){console.log("#ERR# LISTENER: UL_TB_003_CHANGE");}}

try{UL_TB_004.addEventListener("change", function(){UL_TB_004_CHANGE(UL_CONTROL_LISTENER);});
}catch(err){if(FCC_DEBUG){console.log("#ERR# LISTENER: UL_TB_004_CHANGE");}}

try{UL_TB_005.addEventListener("change", function(){UL_TB_005_CHANGE(UL_CONTROL_LISTENER);});
}catch(err){if(FCC_DEBUG){console.log("#ERR# LISTENER: UL_TB_005_CHANGE");}}

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


// GUARDA TEMPORAL

var FCC_TXT_PENDIENTE = "<P STYLE='COLOR:RED; FONT-WEIGHT:BOLD; FONT-SIZE: 12px;'>(PENDIENTE)</P>"; 

UL_TXT_POSICION.value= UL_TXT_POSICION.value.replace(FCC_TXT_PENDIENTE, "");

function UL_GUARDA_TEMPORAL() {
	
	UL_TXT_POSICION.value+=FCC_TXT_PENDIENTE;
	
}



/*############################################################################################################################*/

//FUNCION		:	ONLOAD
//DETALLE		:	Función principal que analiza el detalle de los formularios y acciones.
//					Se ejecuta una vez acasarados todos los componentes de la pagina

/*############################################################################################################################*/

window.onload=function() {

try{
	var UL_CONTADOR_VISTAS = document.getElementsByTagName("aside")[0];
	var tem_original = UL_CONTADOR_VISTAS.innerHTML;
	var tem_res = tem_original.replace("Estudiante", "Vistas de estudiantes");
	UL_CONTADOR_VISTAS.innerHTML=tem_res;
}catch(err){}

// VALIDACION DE EJECUCION DE JS
//---------------------------------------------------------------------------------------------------------

	
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
		
		
	var  UL_CODIGO="1";

/*try{		
	var EMP_APROBADO = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__approved_");
	UL_CODIGO=EMP_APROBADO.value;	

}catch(err){}	*/

		
try{var UL_BARRA_MENU = FCC_GET_ELEMENTO_BYCLASSNAME("buttonbar buttonbar-top");}catch(err){}
try{var UL_BARRA_MENU_INFERIOR = FCC_GET_ELEMENTO_BYCLASSNAME("buttonbar buttonbar-bottom");}catch(err){}

		
		var TEMP_ELEMENTOS;
		var tope_barra;
	
	
		try{		
		
		TEMP_ELEMENTOS = UL_BARRA_MENU[0].getElementsByTagName("input");
		tope_barra = TEMP_ELEMENTOS.length;
		
			for ( bb = 0; bb <tope_barra ; bb++){
				if (TEMP_ELEMENTOS[bb].value.indexOf("Guardar")>=0){
				UL_CODIGO="0";
				}	
			}
		}catch(err){}
	
	
	try{		
		
		TEMP_ELEMENTOS = UL_BARRA_MENU[0].getElementsByTagName("input");
		tope_barra = TEMP_ELEMENTOS.length;

		if (UL_CODIGO=="10"){
			
			for ( bb = 0; bb <tope_barra ; bb++){
				if (TEMP_ELEMENTOS[bb].value.trim().toUpperCase()=="ENVIAR"){
					TEMP_ELEMENTOS[bb].style.display="none";
					TEMP_ELEMENTOS[bb].classList.remove("btn");
					TEMP_ELEMENTOS[bb].classList.remove("input-submit");
				}	
			}
		}	
	}catch(err){}
	
	UL_BARRA_MENU_INFERIOR
	
		try{		
		 TEMP_ELEMENTOS = UL_BARRA_MENU_INFERIOR[0].getElementsByTagName("input");
		 tope_barra = TEMP_ELEMENTOS.length;

		if (UL_CODIGO=="10"){
			
			for ( bb = 0; bb <tope_barra ; bb++){
				if (TEMP_ELEMENTOS[bb].value.trim().toUpperCase()=="ENVIAR"){
					TEMP_ELEMENTOS[bb].style.display="none";
					TEMP_ELEMENTOS[bb].classList.remove("btn");
					TEMP_ELEMENTOS[bb].classList.remove("input-submit");
				}	
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
		//console.log("003 - desde load");
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
	try{
		
	UL_TXT_FECHAPUBLICACION.readOnly  = true;
	UL_BTN_PUBLICAR.style.display=FCC_NONE;
	UL_BTN_BORRAR.style.display=FCC_NONE;
	
	
	UL_TXT_006.readOnly  = true;
	}catch(err){}
	
	//HABILITANDO CAMPOS IDOMAS Y HABILIDADES
	if (UL_CODIGO == 0 ) { 
		//EMPLEO NUEVO
		FCC_INICIA_AFECHA();
		
		UL_SECCION_TXT_006.style.display=FCC_NONE;
		UL_SECCION_SLC_006.style.display="";
		UL_SECCION_TXT_007.style.display=FCC_NONE;
		UL_SECCION_SLC_007.style.display="";
		
	} else{
		//EMPLEO GUARDADO O PUBLICADO 
		UL_SECCION_TXT_006.style.display="";
		UL_SECCION_SLC_006.style.display=FCC_NONE;
	 	UL_SECCION_TXT_007.style.display="";	
		UL_SECCION_SLC_007.style.display=FCC_NONE;
			
		UL_SECCION_TIPO_SOLICITUD.style.display=FCC_NONE;
		
		
//TIPO SOLICITUD 
		var FCC_TIPO_SOLICITUD_SEL = "";
			try{ 
				UL_TIPO_SOLICITUD_SEL= FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_type__widget");
				ul_temp2 = UL_TIPO_SOLICITUD_SEL.getElementsByTagName("input");

				for(i=0;i< ul_temp2.length;i++){
					if (ul_temp2[i].checked){
						FCC_CONTROL_SOLICITUD_SEL=ul_temp2[i].value;
						switch(FCC_CONTROL_SOLICITUD_SEL) {
							case "22":	FCC_TIPO_SOLICITUD_SEL = "Empleos Ejecutivos";	break;
							case "14":	FCC_TIPO_SOLICITUD_SEL = "Empleos";	break;
							case "17":	FCC_TIPO_SOLICITUD_SEL = "Prácticas Profesionales";	break;
							case "20": FCC_TIPO_SOLICITUD_SEL = "Internado"; break;	
							case "19":	FCC_TIPO_SOLICITUD_SEL = "Otras Oportunidades Laborales";	break;		
							case "24":	FCC_TIPO_SOLICITUD_SEL = "VIP";break;	
							case "3":	FCC_TIPO_SOLICITUD_SEL = "Prácticas Pre Profesionales";break;					
							default:FCC_TIPO_SOLICITUD_SEL = "TIpo de solicitud no declarada, contactar con el admin";
						}
					}
				}
			}catch(err){}		
		

		UL_SECCION_LABEL_TIPO_SOLICITUD.innerHTML  = FCC_TIPO_SOLICITUD_SEL.toUpperCase();
		
		
		//OCULATANDO CAMPOS DE CARGO Y AREA 
		UL_SECCION_CARGO.style.display=FCC_NONE;
		UL_SECCION_CARGO_ESPECIFICO.style.display=FCC_NONE;
		UL_SECCION_AREA.style.display=FCC_NONE;
		UL_SECCION_AREA_ESPECIFICA.style.display=FCC_NONE;
		
		//HACIENDO CAMPOS DE SOLO LECTURA
		UL_TXT_POSICION.readOnly =true;

		
		//DESCRIPCIOPN DE FUNCIONES
		
		var desc_sel = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_desc__widget");
		var desc_LABEL_sel = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_desc__field-label");
		
//pendiente read only de descripcion 
//$$$$$$$$$$$$$$$$$$$$$
		
		
	try{
		var iframe_sel = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_desc__ifr");
		var UL_DESCRIPCION_SEL = iframe.contentWindow.document.getElementById("tinymce");
		
		UL_DESCRIPCION_SEL.readOnly =true;
		//desc_LABEL_sel.innerHTML = UL_DESCRIPCION_SEL.innerHTML;
		
	}catch(err){}

	
	
		
	}
		
//INICIA LISTA DE IDIOMA		
	UL_INICIA_IDIOMA();
	
//INICIA LISTA DE HABILIDADES
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
			
			if(TEMP_ACCION){
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRE_OBL,"DEL");
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRE_DES,"ADD");
			}else{
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRE_DES,"DEL");
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRE_DES,"ADD");
			}
			
		} else if (!TEMP_CONTROL){
			
			UL_LISTA_CARRERA_PRACTICAPRE_DES.style.height = "360px";
			UL_SECCION_CARRERA_PRACTICAPRE_OBL.style.display=FCC_NONE;
			UL_SECCION_CARRERA_PRACTICAPRE_DES.style.display=FCC_VIEW;
			UL_SECCION_MSJ_001.style.display=FCC_VIEW;	
			
			if(TEMP_ACCION){
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRE_OBL,"ADD");
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRE_DES,"DEL");
			}else{
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRE_OBL,"DEL");
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRE_OBL,"ADD");
			}
		}
	}catch(err){}

}

// PRACTICAS PRE-PROFESIONALES - NIVELES	
function UL_TB_002_CHANGE(TEMP_ACCION){
	
	if(FCC_DEBUG){console.log ("[FUNCION] UL_TB_002_CHANGE: "+UL_TB_002.checked);}
	
	try{
		var TEMP_CONTROL = UL_TB_002.checked;
			UL_TXT_002.value = TEMP_CONTROL;

		if (TEMP_CONTROL) {
			
			UL_LISTA_NIVEL_PRACTICAPRE_OBL.style.height = "270px";
			UL_SECCION_NIVEL_PRACTICAPRE_OBL.style.display=FCC_VIEW;
			UL_SECCION_NIVEL_PRACTICAPRE_DES.style.display=FCC_NONE;
			UL_SECCION_MSJ_002.style.display=FCC_NONE;	
			
			if(TEMP_ACCION){
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_NIVEL_PRACTICAPRE_OBL,"DEL");
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_NIVEL_PRACTICAPRE_DES,"ADD");
			}else{
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_NIVEL_PRACTICAPRE_DES,"DEL");
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_NIVEL_PRACTICAPRE_DES,"ADD");
			}
				
		}else if (!TEMP_CONTROL){
			
			UL_LISTA_NIVEL_PRACTICAPRE_DES.style.height = "270px";
			UL_SECCION_NIVEL_PRACTICAPRE_OBL.style.display=FCC_NONE;
			UL_SECCION_NIVEL_PRACTICAPRE_DES.style.display=FCC_VIEW;
			UL_SECCION_MSJ_002.style.display=FCC_VIEW;	
			
			if(TEMP_ACCION){
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_NIVEL_PRACTICAPRE_OBL,"ADD");
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_NIVEL_PRACTICAPRE_DES,"DEL");
			}else{
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_NIVEL_PRACTICAPRE_OBL,"DEL");
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_NIVEL_PRACTICAPRE_OBL,"ADD");
			}
		}
	}catch(err){}
}

// EMPLEOS - CARRERAS
function UL_TB_003_CHANGE(TEMP_ACCION){
	
	if(FCC_DEBUG){console.log ("[FUNCION] UL_TB_003_CHANGE: "+UL_TB_003.checked);}
	console.log ("ACCION => " +TEMP_ACCION);
	
	
	
	var TEMP_CONTROL = UL_TB_003.checked;
	UL_TXT_003.value = TEMP_CONTROL;
	
	if (TEMP_CONTROL) { // trabajar sobre campos obligatorios
			
		try{ // ACCION SOBRE VISUALIZACION DE OPCIONES 
			UL_SECCION_CARRERA_EMPLEO_OBL.style.display=FCC_VIEW;
			UL_SECCION_CARRERA_EMPLEO_DES.style.display=FCC_NONE;
			UL_SECCION_MSJ_003.style.display=FCC_NONE;	
		}catch(err){}
			
		try{ // ACCION SOBRE COPORTAMIENTO DE CAMPOS 	
			if(TEMP_ACCION){	
				FCC_SELECCION_LISTA_JERARQUICA(UL_LIST_CARRERA_EMPLEO_OBL, UL_SELECT_CARRERA_EMPLEO_OBL[0],UL_ARREGLO_CARRERA_EMPLEO_OBL,"DEL");
				FCC_SELECCION_LISTA_JERARQUICA(UL_LIST_CARRERA_EMPLEO_DES, UL_SELECT_CARRERA_EMPLEO_DES[0],UL_ARREGLO_CARRERA_EMPLEO_OBL,"ADD");
			}else{
				FCC_SELECCION_LISTA_JERARQUICA(UL_LIST_CARRERA_EMPLEO_DES, UL_SELECT_CARRERA_EMPLEO_DES[0],UL_ARREGLO_CARRERA_EMPLEO_OBL,"DEL");
				FCC_SELECCION_LISTA_JERARQUICA(UL_LIST_CARRERA_EMPLEO_DES, UL_SELECT_CARRERA_EMPLEO_DES[0],UL_ARREGLO_CARRERA_EMPLEO_OBL,"ADD");
			}
			
		}catch(err){
			
		}		
					
	}else if (!TEMP_CONTROL){
			
			try{// ACCION SOBRE VISUALIZACION DE OPCIONES 
				UL_SECCION_CARRERA_EMPLEO_OBL.style.display=FCC_NONE;
				UL_SECCION_CARRERA_EMPLEO_DES.style.display=FCC_VIEW;
				UL_SECCION_MSJ_003.style.display=FCC_VIEW;	

			}catch(err){}

			try{	
				if(TEMP_ACCION){ 
					FCC_SELECCION_LISTA_JERARQUICA(UL_LIST_CARRERA_EMPLEO_OBL, UL_SELECT_CARRERA_EMPLEO_OBL[0],UL_ARREGLO_CARRERA_EMPLEO_OBL,"ADD");
					FCC_SELECCION_LISTA_JERARQUICA(UL_LIST_CARRERA_EMPLEO_DES, UL_SELECT_CARRERA_EMPLEO_DES[0],UL_ARREGLO_CARRERA_EMPLEO_OBL,"DEL");	
				}else{
					FCC_SELECCION_LISTA_JERARQUICA(UL_LIST_CARRERA_EMPLEO_OBL, UL_SELECT_CARRERA_EMPLEO_OBL[0],UL_ARREGLO_CARRERA_EMPLEO_OBL,"DEL");	
					FCC_SELECCION_LISTA_JERARQUICA(UL_LIST_CARRERA_EMPLEO_OBL, UL_SELECT_CARRERA_EMPLEO_OBL[0],UL_ARREGLO_CARRERA_EMPLEO_OBL,"ADD");	
				}
			}catch(err){}
		}
}	
		

// EMPLEOS - CONDICION

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
				FCC_SELECCION_LISTA_JERARQUICA(UL_LIST_CONDICION_EMPLEO_DES, UL_SELECT_CONDICION_EMPLEO_DES[0],UL_ARREGLO_CONDICION_EMPLEO_OBL,"ADD");
			}else{
				FCC_SELECCION_LISTA_JERARQUICA(UL_LIST_CONDICION_EMPLEO_DES, UL_SELECT_CONDICION_EMPLEO_DES[0],UL_ARREGLO_CONDICION_EMPLEO_OBL,"DEL");
				FCC_SELECCION_LISTA_JERARQUICA(UL_LIST_CONDICION_EMPLEO_DES, UL_SELECT_CONDICION_EMPLEO_DES[0],UL_ARREGLO_CONDICION_EMPLEO_OBL,"ADD");
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
					FCC_SELECCION_LISTA_JERARQUICA(UL_LIST_CONDICION_EMPLEO_DES, UL_SELECT_CONDICION_EMPLEO_DES[0],UL_ARREGLO_CONDICION_EMPLEO_OBL,"DEL");
				}else{
					FCC_SELECCION_LISTA_JERARQUICA(UL_LIST_CONDICION_EMPLEO_OBL, UL_SELECT_CONDICION_EMPLEO_OBL[0],UL_ARREGLO_CONDICION_EMPLEO_OBL,"DEL");
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

			
			if(TEMP_ACCION){
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRO_OBL,"DEL");
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRO_DES,"ADD");
			}else{
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRO_DES,"DEL");
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRO_DES,"ADD");	
			}
			
		} else if (!TEMP_CONTROL){
			
			UL_LISTA_CARRERA_PRACTICAPRO_DES.style.height = "360px";
			
			UL_SECCION_CARRERA_PRACTICAPRO_OBL.style.display=FCC_NONE;
			UL_SECCION_CARRERA_PRACTICAPRO_DES.style.display=FCC_VIEW;
			UL_SECCION_MSJ_005.style.display=FCC_VIEW;	

			if(TEMP_ACCION){
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRO_OBL,"ADD");
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRO_DES,"DEL");
			}else{
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRO_OBL,"DEL");
				FCC_ACCION_SOBRE_SIMPLE(UL_LISTA_CARRERA_PRACTICAPRO_OBL,"ADD");	
			}
		}
	}catch(err){}
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
// FUNCION		:	FCC_CONTROL DE IDIOMAS
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
		var elemento ="";
		
		resumen.value="";
		
		  for (i=0; i<tope; i++){
			  elemento = lista.options[i].text;
			  
			  if ( elemento !="") {
				  
				  if (resumen.value !="") { 
					resumen.value+=" / "+lista.options[i].text; 
				  }else{
					resumen.value+=lista.options[i].text; 
				  }
			  }
			  
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
		  var dias;
		  //dias a sumar
		  var dias = parseInt(numero);
		  
		  //nueva fecha sumada
		  TuFecha.setDate(TuFecha.getDate() + dias);
		  //formato de salida para la fecha
		  
		  	  
		  if(TuFecha.getDate() <10){
			  dias ="0"+TuFecha.getDate()
			}else{
				dias =TuFecha.getDate()
			}
			
			console.log("dias -->" + dias);
		  
		 UL_TXT_FECHAPUBLICACION.value= TuFecha.getFullYear() + '-' + (TuFecha.getMonth() + 1)  + '-' + dias;
			UL_TXT_FECHAPUBLICACION_HIDE.value = UL_TXT_FECHAPUBLICACION.value;
			
	}catch(err){}


}
function FCC_VER_CORREO(){


	try{
			if(UL_CHK_CORREO.checked && UL_TXT_CORREO.value!=""){
				UL_SECCION_CORREO_ORIGINAL.style.display = FCC_NONE;
				UL_SECCION_CORREO.style.display = "";
			}else if(UL_CHK_CORREO.checked && UL_TXT_CORREO.value==""){
				UL_SECCION_CORREO_ORIGINAL.style.display = "";
				UL_TXT_CORREO.readOnly  = false;
				UL_SECCION_CORREO.style.display = FCC_NONE;
			}else{
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
	
		
		if (hab && valor != ""){
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
		var elemento ="";
		
		resumen.value="";
		
		  for (i=0; i<tope; i++){
			  elemento = lista.options[i].text;
			  
			  if ( elemento !="") {
				  
				  if (resumen.value !="") { 
					resumen.value+=" / "+lista.options[i].text; 
				  }else{
					resumen.value+=lista.options[i].text; 
				  }
			  }
			  
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

////

function GET_TEXT(FCC_ELEMENTO,FCC_MSJ_DEFAULT, FCC_TIPO){
	 
	var temp1 = "";
	try{ 
		switch(FCC_TIPO) {
			case "OPTION":
							for (i=0 ; i<FCC_ELEMENTO.options.length; i++){
								if (FCC_ELEMENTO.options[i].selected){
									temp1+=FCC_ELEMENTO.options[i].text + "<br>"
								} 
							}
							break;
			case "LISTA":
							ul_temp2=FCC_ELEMENTO.getElementsByTagName("li");
							for (i=0 ; i<ul_temp2.length; i++){	
								temp1+= ul_temp2[i].innerHTML+ "<br>";
							}
							break;	
					
			case "LISTA1":
							temp1= FCC_ELEMENTO.options[FCC_ELEMENTO.selectedIndex].text
							break;			

			case "TEXT":
							temp1 = FCC_ELEMENTO.value;
							break;	

			case "CARRERA_PSI":
							ul_temp2 = FCC_ELEMENTO.getElementsByTagName("input");
							for(i=0;i< ul_temp2.length;i++){
								if (ul_temp2[i].checked){
									ul_temp3=ul_temp2[i].value;
									switch(ul_temp3) {
										case "28":	temp1 = "PSICOLOGÍA";
												break;
										default:	temp1 = "";
									}
								}
							}
							break;	
					
			case "NIVEL_PSI":
							ul_temp2 = FCC_ELEMENTO.getElementsByTagName("input");
							for(i=0;i< ul_temp2.length;i++){
								if (ul_temp2[i].checked){
									ul_temp3=ul_temp2[i].value;
									switch(ul_temp3) {
										case "1":
											temp1 += "Nivel 11"+"<br>";
											break;
										case "2":
											temp1 += "Nivel 12"+"<br>";
											break;	
										default:
											temp1 = "";
									}
								}
							}
							
							break;			

			case "CHECKS":
							ul_temp2 = FCC_ELEMENTO.getElementsByTagName("input");
							for(i=0;i< ul_temp2.length;i++){
								if (ul_temp2[i].checked){
									//temp1 +=ul_temp2[i].innerHTML+"<br>"
									temp1 +="Tiempo parcial máximo 30 horas semanales"+"<br>";
								}
							}
							break;	

			default:		FCC_TIPO_SOLICITUD = "TIpo de solicitud no declarada, contactar con el admin";
		}
		
		if (temp1==""){temp1=FCC_MSJ_DEFAULT;}
		
	}catch(err){}
	
	return 	temp1;
	
 }







//FCC_AGREGA_BOTONES();
	
function CARGA_VISTA_PREVIA(){
	
//VARIABLES TEMPIORALES DE TRABAJO
	var ul_temp;
	var ul_temp2;
	var ul_temp3;
	var ul_temp4;
	var ul_temp5;	
	
	
//===============================================================================================================			
// CATALOGO DE MENSAJES
//===============================================================================================================
			
	var MSJ_CAMPO_OBLIGATORIO = "<a style='color: red;'>Falta completar campo obligatorio <a>";
	var MSJ_CAMPO_OBLIGATORIO_H1 = "<h1 style='color: red;'>Falta completar campo obligatorio <h1>";
	var MSJ_CAMPO_DESEABLE = "No se registró información opcional. No se mostrará en la publicación";		
	var MSJ_NO_MOSTRAR="Se eligió no mostrar información en la oferta";
	
	var MSJ_CARRERA_PROFESIONAL = "Carrera profesional";
	var MSJ_CARRERA_PROFESIONAL_DESEABLE = "Carrera profesional deseable";
	var MSJ_CONDICION = "Condición";
	var MSJ_CONDICION_DESEABLE = "Condición deseable";
	var MSJ_MAESTRIA = "Maestría";
	var MSJ_MAESTRIA_DESEABLE = "Maestría deseable";
	var MSJ_ANIO_EGRESO = "Año de egreso";
	var MSJ_ANIO_EGRESO_DESEABLE = "Año de egreso deseable";
	var MSJ_RANKING = "Ranking";
	var MSJ_RANKING_DESEABLE = "Ranking deseable";
	var MSJ_NIVEL = "Nivel";
	var MSJ_NIVEL_DESEABLE = "Nivel deseable";	
	
	
	
//===============================================================================================================			
// INICIALIZANDO ELEMENTOS DE RESTRICCIONES ACADEMICAS
//===============================================================================================================

	
//POSICIION 
	try{ UL_POSICION = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_title_");}catch(err){}

//NUMERO DE VACANTES
	try{ UL_VACANTES = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__num_openings_");}catch(err){}	
	
//DESCRIPCIOPN DE FUNCIONES
	try{
		var iframe = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_desc__ifr");
		UL_DESCRIPCION = iframe.contentWindow.document.getElementById("tinymce");
	}catch(err){}

//DISPONIBILIDAD
	try{ UL_DISPONIBILIDAD = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__disponibilidad_");}catch(err){}

//BENEFICIOS ADICIONALES
	try{ UL_BENEFICIOS = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__beneficios_adicionales_");}catch(err){}

//LUGAR DE TRABAJO
	try{ 
		ul_temp = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__ubicacin_geogrfica__widget");
		UL_UBICACION = ul_temp.getElementsByTagName("li")[0];
	}catch(err){}

//DISPONIBILIDAD DE HORARIO
	try{ UL_DISP_HORARIO = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__disponibilidad_de_horario_");}catch(err){}
	try{ UL_DISP_HORARIO_PRE = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__disponibilidad_horaria3__widget");}catch(err){}
	
	
//HORARIO DE TRABAJO
	try{ UL_HORARIO = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__horario_de_trabajo_");}catch(err){}
//CONOCIMIENTOS
	try{ UL_CONOCIMIENTOS = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__conocimientos_");}catch(err){}
//EXPERIENCIA
	try{ UL_EXPERIENCIA = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__experiencia_");}catch(err){}
//INFORMACION ADICIONAL
	try{ UL_INF_ADICIONAL = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__ingrese_informacin_adicional_q_");}catch(err){}
	

// TEXTOS PRACTICAS PRE
//************************

	//CARRERA
	FCC_CARRERA_PRACTICAPRE_OBL=GET_TEXT(UL_LISTA_CARRERA_PRACTICAPRE_OBL,MSJ_CAMPO_OBLIGATORIO,"OPTION");
	FCC_CARRERA_PRACTICAPRE_DES=GET_TEXT(UL_LISTA_CARRERA_PRACTICAPRE_DES,MSJ_CAMPO_OBLIGATORIO,"OPTION");
	//NIVEL
	FCC_NIVEL_PRACTICAPRE_OBL=GET_TEXT(UL_LISTA_NIVEL_PRACTICAPRE_OBL,MSJ_CAMPO_OBLIGATORIO,"OPTION");
	FCC_NIVEL_PRACTICAPRE_DES=GET_TEXT(UL_LISTA_NIVEL_PRACTICAPRE_DES,MSJ_CAMPO_OBLIGATORIO,"OPTION");
	//RANKING	 
	FCC_RANKING_PRACTICAPRE_OBL=GET_TEXT(UL_LISTA_RANKING_PRACTICAPRE_OBL,MSJ_CAMPO_OBLIGATORIO,"LISTA1");

// TEXTOS PRACTICAS PRO
//************************
 
	//CARRERA
	FCC_CARRERA_PRACTICAPRO_OBL=GET_TEXT(UL_LISTA_CARRERA_PRACTICAPRO_OBL,MSJ_CAMPO_OBLIGATORIO,"OPTION");
	FCC_CARRERA_PRACTICAPRO_DES=GET_TEXT(UL_LISTA_CARRERA_PRACTICAPRO_DES,MSJ_CAMPO_OBLIGATORIO,"OPTION");
	//CONDICION 
	FCC_NIVEL_PRACTICAPRO_DES=GET_TEXT(UL_LISTA_NIVEL_PRACTICAPRO_OBL,MSJ_CAMPO_OBLIGATORIO,"LISTA");
 
// TEXTOS INTERNADO
//************************ 

	//CARRERA
	FCC_CARRERA_INTERNADO_OBL=GET_TEXT(UL_LISTA_CARRERA_INTERNADO_OBL,MSJ_CAMPO_OBLIGATORIO,"CARRERA_PSI");
	//NIVEL
	FCC_NIVEL_INTERNADO_OBL=GET_TEXT(UL_LISTA_NIVEL_INTERNADO_OBL,MSJ_CAMPO_OBLIGATORIO,"NIVEL_PSI"); 

// TEXTOS EMPLEOS / OTROS
//**********************************

	//CARRERA	
	FCC_CARRERA_EMPLEO_OBL=GET_TEXT(UL_LIST_CARRERA_EMPLEO_OBL,MSJ_CAMPO_OBLIGATORIO,"LISTA");
	FCC_CARRERA_EMPLEO_DES=GET_TEXT(UL_LIST_CARRERA_EMPLEO_DES,MSJ_CAMPO_OBLIGATORIO,"LISTA");
	//NIVEL
	FCC_NIVEL_EMPLEO_OBL=GET_TEXT(UL_LIST_CONDICION_EMPLEO_OBL,MSJ_CAMPO_OBLIGATORIO,"LISTA");
	FCC_NIVEL_EMPLEO_DES=GET_TEXT(UL_LIST_CONDICION_EMPLEO_DES,MSJ_CAMPO_OBLIGATORIO,"LISTA");
	//AÑO DE EGRESO
	FCC_ANIOEGRESO_EMPLEO_OBL=GET_TEXT(UL_TXT_ANIOEGRESO_EMPLEO_DES,MSJ_CAMPO_DESEABLE,"TEXT");
	//MAESTRIA	
	FCC_MAESTRIA_EMPLEO_OBL=GET_TEXT(UL_LIST_MAESTRIA_EMPLEO_DES,MSJ_CAMPO_DESEABLE,"OPTION");

// TEXTOS EJECUTIVO
//**********************************

//CARRERA	
	FCC_CARRERA_EJECUTIVO_OBL=GET_TEXT(UL_LIST_CARRERA_EJECUTIVO_DES,MSJ_CAMPO_OBLIGATORIO,"LISTA");
	
//MAESTRIA	
	FCC_MAESTRIA_EJECUTIVO_OBL=GET_TEXT(UL_LIST_MAESTRIA_EJECUTIVO_DES,MSJ_CAMPO_OBLIGATORIO,"OPTION");


/*

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
	*/
	
	
//===============================================================================================================			
// INICIALIZANDO VARIABLES DE CAMPOS
//===============================================================================================================
	
//POSICION 		
		var FCC_POSICION = MSJ_CAMPO_OBLIGATORIO_H1;
			try{	ul_temp = UL_POSICION.value;
					if (ul_temp !=""){FCC_POSICION=ul_temp; }
			}catch(err){}
			
//CODIGO DE EMPLEO 			
		var FCC_CODIGO_EMPLEO = "S/C";
			try{ ul_temp = UL_CODIGO_EMPLEO.value;
				 if (ul_temp !=""){FCC_CODIGO_EMPLEO=ul_temp; }
			}catch(err){}
			
//INFORMACION ADICIONAL 	
		var FCC_INF_ADICIONAL = MSJ_CAMPO_DESEABLE;
			try{ ul_temp = UL_INF_ADICIONAL.value;
				 if (ul_temp !=""){FCC_INF_ADICIONAL=ul_temp; }
			}catch(err){}
			
//EXPERIENCIA 	
		var FCC_EXPERIENCIA = MSJ_CAMPO_DESEABLE;
			try{ ul_temp = UL_EXPERIENCIA.value;
				 if (ul_temp !=""){FCC_EXPERIENCIA=ul_temp; }
			}catch(err){}

//NUMERO DE VACANTES 	
		var FCC_VACANTES = MSJ_CAMPO_OBLIGATORIO;
			try{ ul_temp = UL_VACANTES.value;
				 if (ul_temp !=""){FCC_VACANTES=ul_temp; }
			}catch(err){}	
					
//TIPO SOLICITUD 
		var FCC_TIPO_SOLICITUD = MSJ_CAMPO_OBLIGATORIO;
			try{ 
				UL_TIPO_SOLICITUD= FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_type__widget");
				ul_temp2 = UL_TIPO_SOLICITUD.getElementsByTagName("input");

				for(i=0;i< ul_temp2.length;i++){
					if (ul_temp2[i].checked){
						FCC_CONTROL_SOLICITUD=ul_temp2[i].value;
						switch(FCC_CONTROL_SOLICITUD) {
							case "22":	FCC_TIPO_SOLICITUD = "Empleos Ejecutivos";	break;
							case "14":	FCC_TIPO_SOLICITUD = "Empleos";	break;
							case "17":	FCC_TIPO_SOLICITUD = "Prácticas Profesionales";	break;
							case "20": 	FCC_TIPO_SOLICITUD = "Internado"; break;	
							case "19":	FCC_TIPO_SOLICITUD = "Otras Oportunidades Laborales";	break;		
							case "24":	FCC_TIPO_SOLICITUD = "VIP";break;	
							case "3":	FCC_TIPO_SOLICITUD = "Prácticas Pre Profesionales";break;							
							default:FCC_TIPO_SOLICITUD = "TIpo de solicitud no declarada, contactar con el admin";
						}
					}
				}
			}catch(err){}

//DESCRIPCION
		var FCC_DESCRIPCION = MSJ_CAMPO_OBLIGATORIO;
			try{ ul_temp = UL_DESCRIPCION.innerHTML;
				 if (!ul_temp.includes("data-mce-bogus")){FCC_DESCRIPCION=ul_temp; }
			}catch(err){}		
	
//DISPONIBILIDAD
		var FCC_DISPONIBILIDAD = MSJ_CAMPO_OBLIGATORIO;
			try{ ul_temp = UL_DISPONIBILIDAD.options[UL_DISPONIBILIDAD.selectedIndex].text;
				 if (ul_temp !=""){FCC_DISPONIBILIDAD=ul_temp; }
			}catch(err){}	

//REMUNERACION
		var FCC_REMUNERACION = MSJ_CAMPO_OBLIGATORIO;
			try{ 
				ul_temp = UL_TXT_REMUNERACION_VISIBLE.value;
				ul_temp2 = UL_TXT_REMUNERACION.value;
				if(ul_temp2 !="" && ul_temp =="" ){FCC_REMUNERACION = MSJ_NO_MOSTRAR;}
				if (ul_temp !=""){FCC_REMUNERACION=ul_temp; }
			}catch(err){}		

//BENEFICIOS ADICIONALES
		var FCC_BENEFICIOS = MSJ_CAMPO_DESEABLE;
			try{ul_temp = UL_BENEFICIOS.value;
				 if (ul_temp !=""){FCC_BENEFICIOS=ul_temp; }
			}catch(err){}	

//LUGAR DE TRABAJO
		var FCC_UBICACION = MSJ_CAMPO_DESEABLE;
			try{ul_temp = UL_UBICACION.innerHTML;
				 if (ul_temp !=""){FCC_UBICACION=ul_temp; }
			}catch(err){}				

//DISPONIBILIDAD DE HORARIO
		var FCC_DISP_HORARIO = MSJ_CAMPO_OBLIGATORIO;
			try{ ul_temp = UL_DISP_HORARIO.options[UL_DISP_HORARIO.selectedIndex].text;
				 if (ul_temp !=""){FCC_DISP_HORARIO=ul_temp; }
			}catch(err){}

			
			
		var FCC_DISP_HORARIO_PRE = GET_TEXT(UL_DISP_HORARIO_PRE,MSJ_CAMPO_OBLIGATORIO,"CHECKS");
		
		
		


			
			
//HORARIO DE TRABAJO
		var FCC_HORARIO = MSJ_CAMPO_DESEABLE;
			try{ul_temp = UL_HORARIO.value;
				 if (ul_temp !=""){FCC_HORARIO=ul_temp; }
			}catch(err){}	

//CONOCIMIENTOS
		var FCC_CONOCIMIENTOS = MSJ_CAMPO_DESEABLE;
			try{ul_temp = UL_CONOCIMIENTOS.value;
				 if (ul_temp !=""){FCC_CONOCIMIENTOS=ul_temp; }
			}catch(err){}	
			
//IDIOMAS
		var FCC_IDIOMAS = MSJ_CAMPO_DESEABLE;
			try{ul_temp = UL_TXT_006.value;
				 if (ul_temp !=""){FCC_IDIOMAS=ul_temp; }
			}catch(err){}	
//HABILIDADES
		var FCC_HABILIDADES = MSJ_CAMPO_DESEABLE;
			try{ul_temp = UL_TXT_007.value;
				 if (ul_temp !=""){FCC_HABILIDADES=ul_temp; }
			}catch(err){}			

//===============================================================================================================		
// AGREGANDO CAMPOS A VISTA PREVIA

//===============================================================================================================

		try{FCC_AGREGA_TITULO(FCC_POSICION);}catch(err){}
		try{FCC_AGREGA_CABECERA("Número de vacantes",FCC_VACANTES);}catch(err){}
		try{FCC_AGREGA_CABECERA("Tipo de solicitud",FCC_TIPO_SOLICITUD);}catch(err){}
		try{FCC_AGREGA_CABECERA("Código de oferta",FCC_CODIGO_EMPLEO);}catch(err){}
		try{FCC_AGREGA_DESCRIPCION("Descripción de las principales funciones",FCC_DESCRIPCION);}catch(err){}
		try{FCC_AGREGA_CAMPOS("Información adicional",FCC_INF_ADICIONAL);}catch(err){}	
		try{FCC_AGREGA_CAMPOS("Experiencia",FCC_EXPERIENCIA);}catch(err){}
		try{FCC_AGREGA_CAMPOS("Habilidades",FCC_HABILIDADES);}catch(err){}
		try{FCC_AGREGA_CAMPOS("Idiomas",FCC_IDIOMAS);}catch(err){}
		try{FCC_AGREGA_CAMPOS("Conocimientos",FCC_CONOCIMIENTOS);}catch(err){}
		try{FCC_AGREGA_CAMPOS("Horario de trabajo",FCC_HORARIO);}catch(err){}
		
		if (FCC_CONTROL_SOLICITUD=="3") {
			try{FCC_AGREGA_CAMPOS("Disponibilidad de horario",FCC_DISP_HORARIO_PRE);}catch(err){}
		}else{
			try{FCC_AGREGA_CAMPOS("Disponibilidad de horario",FCC_DISP_HORARIO);}catch(err){}
		}
		
		try{FCC_AGREGA_CAMPOS("Lugar de trabajo",FCC_UBICACION);}catch(err){}
		try{FCC_AGREGA_CAMPOS("Beneficios adicionales",FCC_BENEFICIOS);}catch(err){}
		try{FCC_AGREGA_CAMPOS("Remuneración",FCC_REMUNERACION);}catch(err){}
		try{FCC_AGREGA_CAMPOS("Disponibilidad",FCC_DISPONIBILIDAD);}catch(err){}		
			
		
// AGREGANDO CAMPOS LATERALES A VISTA PREVIA
try{
	switch(FCC_CONTROL_SOLICITUD) {
	
//EMPLEO --------------------------------------------------------------------------------------------------------
	case '14': 	console.log("# TIPO: " + FCC_CONTROL_SOLICITUD+ " - EMPLEO: " );
		try{	
		//CARRERA 	
		FCC_AGREGA_BARRA_LATERAL(UL_TXT_003.value =="true", MSJ_CARRERA_PROFESIONAL,FCC_CARRERA_EMPLEO_OBL,MSJ_CARRERA_PROFESIONAL_DESEABLE,FCC_CARRERA_EMPLEO_DES);
		//NIVEL 			
		FCC_AGREGA_BARRA_LATERAL(UL_TXT_004.value =="true", MSJ_CONDICION,FCC_NIVEL_EMPLEO_OBL,MSJ_CONDICION_DESEABLE,FCC_NIVEL_EMPLEO_DES);
		//MAESTRIA					
		FCC_AGREGA_BARRA_LATERAL(false, "","",MSJ_MAESTRIA_DESEABLE,FCC_MAESTRIA_EMPLEO_OBL);
		//ANIO EGRESO 						
		FCC_AGREGA_BARRA_LATERAL(false, "","",MSJ_ANIO_EGRESO_DESEABLE,FCC_ANIOEGRESO_EMPLEO_OBL);	
		}catch(err){}
	break;
	
//OTRAS OPORTUNIDADES DE EMPLEO---------------------------------------------------------------------------			
	case '19':	console.log("# TIPO: " + FCC_CONTROL_SOLICITUD+ " - OTRAS OPORTUNIDADES: " );
		try{	
		//CARRERA 	
		FCC_AGREGA_BARRA_LATERAL(UL_TXT_003.value =="true", MSJ_CARRERA_PROFESIONAL,FCC_CARRERA_EMPLEO_OBL,MSJ_CARRERA_PROFESIONAL_DESEABLE,FCC_CARRERA_EMPLEO_DES);//NIVEL 			
		FCC_AGREGA_BARRA_LATERAL(UL_TXT_004.value =="true", MSJ_CONDICION,FCC_NIVEL_EMPLEO_OBL,MSJ_CONDICION_DESEABLE,FCC_NIVEL_EMPLEO_DES);
		//MAESTRIA					
		FCC_AGREGA_BARRA_LATERAL(false, "","",MSJ_MAESTRIA_DESEABLE,FCC_MAESTRIA_EMPLEO_OBL);
		//ANIO EGRESO 						
		FCC_AGREGA_BARRA_LATERAL(false, "","",MSJ_ANIO_EGRESO_DESEABLE,FCC_ANIOEGRESO_EMPLEO_OBL);	
		}catch(err){}
	break;
				
//PRACTICAS PRE PROFESIONALES ----------------------------------------------------------------------------------------
   case '3':	console.log("# TIPO: " + FCC_CONTROL_SOLICITUD+ " - PRACTICAS PRE: " );
		try{		
		//CARRERA 	
		FCC_AGREGA_BARRA_LATERAL(UL_TXT_001.value =="true", MSJ_CARRERA_PROFESIONAL,FCC_CARRERA_PRACTICAPRE_OBL,MSJ_CARRERA_PROFESIONAL_DESEABLE,FCC_CARRERA_PRACTICAPRE_DES);
		//NIVEL 		
		FCC_AGREGA_BARRA_LATERAL(UL_TXT_002.value =="true", MSJ_CONDICION,FCC_NIVEL_PRACTICAPRE_OBL,MSJ_CONDICION_DESEABLE,FCC_NIVEL_PRACTICAPRE_DES);
		//RANKING
		FCC_AGREGA_BARRA_LATERAL(false, "","",MSJ_RANKING_DESEABLE,FCC_RANKING_PRACTICAPRE_OBL);	
		}catch(err){}		
	break;
				
//PRACTICAS PROFESIONALES -----------------------------------------------------------------------------------------
	case '17':	console.log("# TIPO: " + FCC_CONTROL_SOLICITUD+ " - PRACTICAS PRO: " );
		try{		
		//CARRERA 	
		FCC_AGREGA_BARRA_LATERAL(UL_TXT_005.value =="true", MSJ_CARRERA_PROFESIONAL,FCC_CARRERA_PRACTICAPRO_OBL,MSJ_CARRERA_PROFESIONAL_DESEABLE,FCC_CARRERA_PRACTICAPRO_DES);			
		//CONDICION 
		FCC_AGREGA_BARRA_LATERAL(false, "","",MSJ_CONDICION_DESEABLE,FCC_NIVEL_PRACTICAPRO_DES);	
		}catch(err){}				
	break;
				
//INTERNADO -------------------------------------------------------------------------------------------------------
	case '20':	console.log("# TIPO: " + FCC_CONTROL_SOLICITUD+ " - INTERNADO: " );
		try{	
		//CARRERA
		FCC_AGREGA_BARRA_LATERAL(true, MSJ_CARRERA_PROFESIONAL,FCC_CARRERA_INTERNADO_OBL,"","");	
		//NIVEL 	
		FCC_AGREGA_BARRA_LATERAL(true,MSJ_NIVEL,FCC_NIVEL_INTERNADO_OBL);	
		}catch(err){}				
	break;
				
//EMPLEO EJECUTIVO ------------------------------------------------------------------------------------------------------
	case '22':	console.log("# TIPO: " + FCC_CONTROL_SOLICITUD+ " - EMPLEO EJECUTIVO: " );
		try{			
		//CARRERA 	
		FCC_AGREGA_BARRA_LATERAL(true, MSJ_CARRERA_PROFESIONAL,FCC_CARRERA_EJECUTIVO_OBL,"","");	
		//MAESTRIA					
		FCC_AGREGA_BARRA_LATERAL(true, MSJ_MAESTRIA,FCC_MAESTRIA_EJECUTIVO_OBL,"","");
		}catch(err){}		
	break;
						
//NO CONTEMPLADO ----------------------------------------------------------------------------------------			
	default: console.log("CASO NO CONTEMPLADO: " + FCC_CONTROL_SOLICITUD);	
	}
}catch(err){}

//**********************************************************

}
	
	
/*###################################################################################################################*/
// FUNCION		:AGREGA / ELIMINA ELEMENTOS DE VISTA PREVIA
// DETALLE		:
/*###################################################################################################################*/	

function FCC_BORRA_SECCION(){
	document.getElementById("FCC_TITULO").innerHTML=" ";
	document.getElementById("FCC_CABECERA").innerHTML=" ";
	document.getElementById("FCC_DESCRIPCION").innerHTML=" ";
	document.getElementById("FCC_CAMPOS").innerHTML=" ";
	document.getElementById("FCC_LATERAL").innerHTML=" ";
}
	
function FCC_AGREGA_TITULO(FCC_VALOR){
	var FCC_DOM= document.getElementById("FCC_TITULO");
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

function FCC_AGREGA_BARRA_LATERAL(FCC_CONDICION, FCC_ETIQUETA_TRUE,FCC_VALOR_TRUE,FCC_ETIQUETA_FALSE,FCC_VALOR_FALSE){
	try{
	// DECALRACION DE VARIABLES
		var FCC_DOM= document.getElementById("FCC_LATERAL");
		var FCC_ADD_DOM="";
		var FCC_TEMP_DOM="";
		var FCC_ETIQUETA="";
		var FCC_VALOR="";
	// INICIALIZANDO VARIABLES
		if (FCC_CONDICION){
			FCC_ETIQUETA=FCC_ETIQUETA_TRUE;
			FCC_VALOR=FCC_VALOR_TRUE;
		}else{
			FCC_ETIQUETA=FCC_ETIQUETA_FALSE;
			FCC_VALOR=FCC_VALOR_FALSE;
		}
	// EJECUCION DEL PROCESO
		FCC_ADD_DOM += "<div class='sidebar-body' style='text-align: left'><b>";
		FCC_ADD_DOM+= FCC_ETIQUETA;
		FCC_ADD_DOM+= "</b><br>";
		FCC_ADD_DOM+= FCC_VALOR;
		FCC_ADD_DOM+= "<br></div>";	
		FCC_TEMP_DOM=FCC_DOM.innerHTML;			
		FCC_DOM.innerHTML=FCC_TEMP_DOM +FCC_ADD_DOM;
	}catch(err){}
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

function FCC_AGREGA_BOTONES_MENU(FCC_BUTTTON_BAR){
try{
	// DECALRACION DE VARIABLES*/
	var FCC_DOM= document.getElementsByClassName(FCC_BUTTTON_BAR)[0];
	var FCC_ADD_DOM="";
	var FCC_TEMP_DOM="";

	// EJECUCION DEL PROCESO*/
	
	FCC_ADD_DOM += "<input type='button' onclick='MODAL_OPEN()' class='input-button btn btn_generic' value='Vista previa'>";		
	
	FCC_ADD_DOM += "<input type='button' onclick='FINALIZA_OFERTA()' class='input-button btn btn_generic' value='Finaliza Oferta'>";	
	
	FCC_TEMP_DOM=FCC_DOM.innerHTML;			
	FCC_DOM.innerHTML=FCC_ADD_DOM+FCC_TEMP_DOM;
}catch(err){}
}
	
	
/*###################################################################################################################*/
// FUNCION		:FINALIZA OFERTA
// DETALLE		:comportamiento de las ventanas modales 
/*###################################################################################################################*/
		    
function FINALIZA_OFERTA(){

	try{
			
		var numero ="1";
		  //la fecha
		  var TuFecha = new Date();
		  var dias;
		  //dias a sumar
		  var dias = parseInt(numero);
		  
		  //nueva fecha sumada
		  TuFecha.setDate(TuFecha.getDate());
		  //formato de salida para la fecha
		  
		  	  
		  if(TuFecha.getDate() <10){
			  dias ="0"+TuFecha.getDate()
			}else{
				dias =TuFecha.getDate()
			}
			
			console.log("dias -->" + dias);
		  
		 UL_TXT_FECHAFINALIZACION.value= TuFecha.getFullYear() + '-' + (TuFecha.getMonth() + 1)  + '-' + dias;
		UL_TXT_FECHAFINALIZACION_HIDE.value = UL_TXT_FECHAFINALIZACION.value;
			
	}catch(err){}


}	
	
	
	
/*###################################################################################################################*/
// FUNCION		:COMPORTAMIENTO MODAL
// DETALLE		:comportamiento de las ventanas modales 
/*###################################################################################################################*/
		    
function MODAL_OPEN(){				
	modal = document.getElementById("myModal"); 
   modal.style.display = "block";
		
	FCC_BORRA_SECCION();
	CARGA_VISTA_PREVIA();
} 	 
	
function MODAL_CLOSE(){		
	modal.style.display = "none";
}		 
	
window.onclick = function(event) {	
	if (event.target == modal){modal.style.display = "none";} 
} 


/*###################################################################################################################

FIN

#####################################################################################################################*/






	