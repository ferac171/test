/*##############################################################################################################################*/

// MODELO PARA MODIFICAR INTERFACE DE:
// POSTULACION DE PUBLICACIONES DE EMPLEO - VISTA ALUMNO
//
// NAME		: FCC_PUBLICACIONES_ALUMNOS.JS
	
	const FCC_PUBLICACIONES_ALUMNOS_VERSION_LOCAL = "1.4";
	const FCC_PUBLICACIONES_ALUMNOS_FECHA_LOCAL= "05/09/22";

/*############################################################################################################################*/

var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://rawgit.com/ferac171/test/master/FCC_EMPRESAS.CSS';
    link.media = 'all';
    head.appendChild(link);
}

/*############################################################################################################################*/
//CONSTANTES DE VERSION
/*############################################################################################################################*/

console.log("# CONTROL FCC_PUBLICACIONES_ALUMNOS V:"+FCC_PUBLICACIONES_ALUMNOS_VERSION_LOCAL + " al "+FCC_PUBLICACIONES_ALUMNOS_FECHA_LOCAL);

/*############################################################################################################################*/
//DECLARACION DE CONSTANTES
/*############################################################################################################################*/

const FCC_BLOCK = "block";
const FCC_NONE = "none";
const FCC_VIEW = "";
const FCC_DEBUG=true;


/*############################################################################################################################*/
// DECLARACION GENERAL DE VARIABLES DE ELEMENTOS
/*##############################################################################################################################*/

//VARIABLES DE CONTROL
//------------------------------------------------------------------------------------------------------------------

// VARIBALES DE CONTROL
var UL_TB_001 = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-UL_TXT_001")[0];
var UL_TB_002 = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-UL_TXT_002")[0];
var UL_TB_003 = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-UL_TXT_003")[0];
var UL_TB_004 = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-UL_TXT_004")[0];
var UL_TB_005 = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-UL_TXT_0055")[0];
		

try{var VAL_TB_001 = UL_TB_001.innerHTML.trim();}catch(err){}
try{var VAL_TB_002 = UL_TB_002.innerHTML.trim();}catch(err){}
try{var VAL_TB_003 = UL_TB_003.innerHTML.trim();}catch(err){}
try{var VAL_TB_004 = UL_TB_004.innerHTML.trim();}catch(err){}
try{var VAL_TB_005 = UL_TB_005.innerHTML.trim();}catch(err){}

						
//VARIABLES DE EMPLEO REMOTO
var UL_TXT_REMOTO=FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-symp_remote_job")[0];
var UL_TXT_REMOTO_VAL= document.getElementsByName("dnf_class_values[job][symp_remote_job]")[0].value;

console.log("# CONTROL CAMPO REMOTO:"+UL_TXT_REMOTO_VAL  );
						
//VARIABLES DE EMPLEO
var UL_TXT_OFERTA=FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-visual_id")[0];


// VARIBALES PRACTICAS PRE
var UL_TXT_CARRERA_PRACTICAPRE_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-screen_work_authorization")[0]; 
var UL_TXT_CARRERA_PRACTICAPRE_DES = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-carreras_para_practicas_pre_pr")[0];
			
var UL_TXT_NIVEL_PRACTICAPRE_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-screen_class_level")[0];
var UL_TXT_NIVEL_PRACTICAPRE_DES = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-nivel_deseable_pre")[0];
				
var UL_TXT_RANKING_PRACTICAPRE_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-ranking_acadmico_ulima")[0];
var UL_TXT_RANKING_PRACTICAPRE_DES = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-ranking_acadmico_ulima")[0];


// VARIBALES PRACTICAS PRO
var UL_TXT_CARRERA_PRACTICAPRO_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-screen_applicant_type")[0]; 
var UL_TXT_CARRERA_PRACTICAPRO_DES = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-sf_carreras_para_practicas_pro")[0];
			
var UL_TXT_NIVEL_PRACTICAPRO_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-condicion_prac_pro")[0];
var UL_TXT_NIVEL_PRACTICAPRO_DES = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-condicion_prac_pro")[0];				

// VARIBALES INTERNADO
var UL_TXT_CARRERA_INTERNADO_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-screen_degree_level")[0]; 
var UL_TXT_NIVEL_INTERNADO_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-niveles")[0];

// VARIBALES EJECUTIVO
var UL_TXT_CARRERA_EJECUTIVO_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-carrera_profesional_deseable")[0]; 
var UL_TXT_MAESTRIA_EJECUTIVO_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-maestra_deseable2")[0];


// VARIBALES EMPLEOS
var UL_TXT_CARRERA_EMPLEO_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-screen_minor")[0]; 
var UL_TXT_CARRERA_EMPLEO_DES = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-carrera_profesional_emp")[0];
			
var UL_TXT_NIVEL_EMPLEO_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-screen_certificate")[0];
var UL_TXT_NIVEL_EMPLEO_DES = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-condicionnivel")[0];
				
var UL_TXT_ANIOEGRESO_EMPLEO_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-ao_de_egreso_deseable")[0];

var UL_TXT_MAESTRIA_EMPLEO_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-maestra_deseable2")[0];

// OTRAS OPORTUNIDADES
var UL_TXT_CARRERA_OTRO_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-screen_minor")[0]; 
var UL_TXT_CARRERA_OTRO_DES = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-carrera_profesional_emp")[0];
			
var UL_TXT_NIVEL_OTRO_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-screen_certificate")[0];
var UL_TXT_NIVEL_OTRO_DES = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-condicionnivel")[0];
				
var UL_TXT_ANIOEGRESO_OTRO_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-ao_de_egreso_deseable")[0];

var UL_TXT_MAESTRIA_OTRO_OBL = FCC_GET_ELEMENTO_BYCLASSNAME("widget jobfld-maestra_deseable2")[0];


/*############################################################################################################################*/
// LISTENERS
/*##############################################################################################################################*/



/*############################################################################################################################*/

//FUNCION ONLOAD

//-Ejecuta el codigo al terminar de cargar el formulario
//-Contiene toda la lógica para movilizar y ocultar los elementos en base al tipo de empleo

/*############################################################################################################################*/


window.onload=function() {

	FCC_OCULTA_POR_CLASE(UL_TB_001);
	FCC_OCULTA_POR_CLASE(UL_TB_002);
	FCC_OCULTA_POR_CLASE(UL_TB_003);
	FCC_OCULTA_POR_CLASE(UL_TB_004);
	FCC_OCULTA_POR_CLASE(UL_TB_005);


	//OFERTA 										
			
	FCC_OCULTA_POR_CLASE(UL_TXT_OFERTA);
	FCC_AGREGA_CABECERA('Código de Oferta',UL_TXT_OFERTA.innerHTML);

		
	//	if(FCC_DEBUG){console.log("Validando TB01: " + UL_TB_001);}	

	var FCC_CONTROL= document.getElementsByName("dnf_class_values[job][job_type]")[0].value;
	console.log("VARIABLE DE CONTROL: " + FCC_CONTROL);	

	
// OCULTANDO CAMPOS	
	if (UL_TXT_REMOTO_VAL==0){ 
	FCC_OCULTA_POR_CLASE(UL_TXT_REMOTO);}
	
	FCC_OCULTA_POR_CLASE(UL_TXT_CARRERA_PRACTICAPRE_OBL);
	FCC_OCULTA_POR_CLASE(UL_TXT_CARRERA_PRACTICAPRE_DES);
	FCC_OCULTA_POR_CLASE(UL_TXT_CARRERA_PRACTICAPRO_OBL);
	FCC_OCULTA_POR_CLASE(UL_TXT_CARRERA_PRACTICAPRO_DES);	
	FCC_OCULTA_POR_CLASE(UL_TXT_CARRERA_EMPLEO_OBL);
	FCC_OCULTA_POR_CLASE(UL_TXT_CARRERA_EMPLEO_DES);
	FCC_OCULTA_POR_CLASE(UL_TXT_CARRERA_INTERNADO_OBL);
	FCC_OCULTA_POR_CLASE(UL_TXT_CARRERA_EJECUTIVO_OBL);	
			
	FCC_OCULTA_POR_CLASE(UL_TXT_MAESTRIA_EMPLEO_OBL);
	FCC_OCULTA_POR_CLASE(UL_TXT_MAESTRIA_EJECUTIVO_OBL);		
			
	FCC_OCULTA_POR_CLASE(UL_TXT_NIVEL_PRACTICAPRE_OBL);
	FCC_OCULTA_POR_CLASE(UL_TXT_NIVEL_PRACTICAPRE_DES);
	FCC_OCULTA_POR_CLASE(UL_TXT_NIVEL_PRACTICAPRO_OBL);
	FCC_OCULTA_POR_CLASE(UL_TXT_NIVEL_EMPLEO_OBL);
	FCC_OCULTA_POR_CLASE(UL_TXT_NIVEL_EMPLEO_DES);	
	FCC_OCULTA_POR_CLASE(UL_TXT_NIVEL_INTERNADO_OBL);		
			
	FCC_OCULTA_POR_CLASE(UL_TXT_RANKING_PRACTICAPRE_OBL);
	
	FCC_OCULTA_POR_CLASE(UL_TXT_ANIOEGRESO_EMPLEO_OBL);
	
switch(FCC_CONTROL) {
	
//EMPLEO [14]--------------------------------------------------------------------------------------------------------
	
   case '14': 	console.log("# TIPO: " + FCC_CONTROL+ " - EMPLEO: " );
	
		//INICIANDO VARIABLES DE BARRA LATERAL
		FCC_DETALLE="";
				
		//CARRERA 	
		if (VAL_TB_003=="true"){ 
			FCC_DETALLE= FCC_AGREGA_LATERAL('Carrera profesional',UL_TXT_CARRERA_EMPLEO_OBL.innerHTML,FCC_DETALLE);			
		}else if (VAL_TB_003=="false"){ 
			FCC_DETALLE= FCC_AGREGA_LATERAL('Carrera profesional deseable',UL_TXT_CARRERA_EMPLEO_DES.innerHTML,FCC_DETALLE);
		}
				
		//NIVEL 	
		if (VAL_TB_004=="true"){ 
			FCC_DETALLE= FCC_AGREGA_LATERAL('Condición',UL_TXT_NIVEL_EMPLEO_OBL.innerHTML,FCC_DETALLE);	
		}else if (VAL_TB_004=="false"){ 
			FCC_DETALLE= FCC_AGREGA_LATERAL('Condición deseable',UL_TXT_NIVEL_EMPLEO_DES.innerHTML,FCC_DETALLE);
		}
		
		//MAESTRIA					
			try{
			FCC_DETALLE= FCC_AGREGA_LATERAL('Maestría deseable',UL_TXT_MAESTRIA_EMPLEO_OBL.innerHTML,FCC_DETALLE);	
			}catch(err){}	
		//ANIO EGRESO 					
			try{
			FCC_DETALLE= FCC_AGREGA_LATERAL('Año de egreso deseable',UL_TXT_ANIOEGRESO_EMPLEO_OBL.innerHTML,FCC_DETALLE);	
			}catch(err){}
		//AÑADENDO BARRA LATERAL
			try{
			FCC_AGREGA_SECCION_LATERAL('Criterios de selección',FCC_DETALLE);
			}catch(err){}	
	break;
	
//OTRAS OPORTUNIDADES DE EMPLEO [19] ------------------------------------------------------------------------
				
	case '19':	console.log("# TIPO: " + FCC_CONTROL+ " - OTRAS OPORTUNIDADES: " );
				
		//INICIANDO VARIABLES DE BARRA LATERAL
		FCC_DETALLE="";
				
		//CARRERA 	
		if (VAL_TB_003=="true"){ 
			FCC_DETALLE= FCC_AGREGA_LATERAL('Carrera profesional',UL_TXT_CARRERA_EMPLEO_OBL.innerHTML,FCC_DETALLE);			
		}else if (VAL_TB_003=="false"){ 
			FCC_DETALLE= FCC_AGREGA_LATERAL('Carrera profesional deseable',UL_TXT_CARRERA_EMPLEO_DES.innerHTML,FCC_DETALLE);
		}
				
		//NIVEL 	
		if (VAL_TB_004=="true"){ 
			FCC_DETALLE= FCC_AGREGA_LATERAL('Condición',UL_TXT_NIVEL_EMPLEO_OBL.innerHTML,FCC_DETALLE);
					
		}else if (VAL_TB_004=="false"){ 
			FCC_DETALLE= FCC_AGREGA_LATERAL('Condición deseable',UL_TXT_NIVEL_EMPLEO_DES.innerHTML,FCC_DETALLE);
		}
		
		//MAESTRIA	
		try{
			FCC_DETALLE= FCC_AGREGA_LATERAL('Maestría deseable',UL_TXT_MAESTRIA_EMPLEO_OBL.innerHTML,FCC_DETALLE);	
		}catch(err){}
				
		//ANIO EGRESO
		try{
			FCC_DETALLE= FCC_AGREGA_LATERAL('Año de egreso deseable',UL_TXT_ANIOEGRESO_EMPLEO_OBL.innerHTML,FCC_DETALLE);	
		}catch(err){}
		
		//AÑADENDO BARRA LATERAL
		try{
			FCC_AGREGA_SECCION_LATERAL('Criterios de selección',FCC_DETALLE);		
		}catch(err){}
	break;
				
//PRACTICAS PRE-PROFESIONALES [3] ------------------------------------------------------------------------------------

   case '3':	console.log("# TIPO: " + FCC_CONTROL+ " - PRACTICAS PRE: " );
				
		//INICIANDO VARIABLES DE BARRA LATERAL
		FCC_DETALLE="";
			
		//CARRERA 	
		if (VAL_TB_001=="true"){ 
			FCC_DETALLE= FCC_AGREGA_LATERAL('Carrera profesional',UL_TXT_CARRERA_PRACTICAPRE_OBL.innerHTML,FCC_DETALLE);
		}else if (VAL_TB_001=="false"){ 
			FCC_DETALLE= FCC_AGREGA_LATERAL('Carrera profesional deseable',UL_TXT_CARRERA_PRACTICAPRE_DES.innerHTML,FCC_DETALLE);
		}
			
		//NIVEL 	
		if (VAL_TB_002=="true"){ 
			FCC_DETALLE= FCC_AGREGA_LATERAL('Nivel',UL_TXT_NIVEL_PRACTICAPRE_OBL.innerHTML,FCC_DETALLE);	
		}else if (VAL_TB_002=="false"){ 
			FCC_DETALLE= FCC_AGREGA_LATERAL('Nivel deseable',UL_TXT_NIVEL_PRACTICAPRE_DES.innerHTML,FCC_DETALLE);
		}
				
		//RANKING 
		try{
			FCC_DETALLE= FCC_AGREGA_LATERAL('Ranking deseable',UL_TXT_RANKING_PRACTICAPRE_OBL.innerHTML,FCC_DETALLE);	
		}catch(err){}
					
		//AÑADENDO BARRA LATERAL
		try{
			FCC_AGREGA_SECCION_LATERAL('Criterios de selección',FCC_DETALLE);
		}catch(err){}
	
	break;
				
//PRACTICAS PROFESIONALES ---------------------------------------------------------------------------------------------
	
	case '17':	console.log("# TIPO: " + FCC_CONTROL+ " - PRACTICAS PRO: " );
			
		//INICIANDO VARIABLES DE BARRA LATERAL
		FCC_DETALLE="";
		
		//CARRERA 	
		if (VAL_TB_005=="true"){ 
			FCC_DETALLE= FCC_AGREGA_LATERAL('Carrera profesional',UL_TXT_CARRERA_PRACTICAPRO_OBL.innerHTML,FCC_DETALLE);
			
		}else if (VAL_TB_005=="false"){ 
			FCC_DETALLE= FCC_AGREGA_LATERAL('Carrera profesional deseable',UL_TXT_CARRERA_PRACTICAPRO_DES.innerHTML,FCC_DETALLE);

			
			
		}
				
		//CONDICION 					
			FCC_DETALLE= FCC_AGREGA_LATERAL('Condición deseable',UL_TXT_NIVEL_PRACTICAPRO_OBL.innerHTML,FCC_DETALLE);	

					
		//AÑADENDO BARRA LATERAL
		try{
			FCC_AGREGA_SECCION_LATERAL('Criterios de selección',FCC_DETALLE);
		}catch(err){}
				
	break;
				
//INTERNADO -----------------------------------------------------------------------------------------------------------
	
	case '20':	console.log("# TIPO: " + FCC_CONTROL+ " - INTERNADO: " );
	
		//INICIANDO VARIABLES DE BARRA LATERAL
			FCC_DETALLE="";
		
		//CARRERA 					
				FCC_DETALLE= FCC_AGREGA_LATERAL('Carrera',UL_TXT_CARRERA_INTERNADO_OBL.innerHTML,FCC_DETALLE);	

		
		//NIVEL 					
				FCC_DETALLE= FCC_AGREGA_LATERAL('Nivel',UL_TXT_NIVEL_INTERNADO_OBL.innerHTML,FCC_DETALLE);	

		//AÑADENDO BARRA LATERAL
		try{
				FCC_AGREGA_SECCION_LATERAL('Criterios de selección',FCC_DETALLE);
		}catch(err){}
				
	break;
				
//EMPLEO EJECUTIVO ------------------------------------------------------------------------------------------------------
	
	case '22':	console.log("# TIPO: " + FCC_CONTROL+ " - EMPLEO EJECUTIVO: " );
	
		//INICIANDO VARIABLES DE BARRA LATERAL
			FCC_DETALLE="";
		
		//MAESTRIA 
		try{
				FCC_DETALLE= FCC_AGREGA_LATERAL('Maestría deseable',UL_TXT_MAESTRIA_EJECUTIVO_OBL.innerHTML,FCC_DETALLE);	

		}catch(err){}
		
		//CARRERA 	
		try{
				FCC_DETALLE= FCC_AGREGA_LATERAL('Carrera deseable',UL_TXT_CARRERA_EJECUTIVO_OBL.innerHTML,FCC_DETALLE);	
				
		}catch(err){}
		
		//AÑADENDO BARRA LATERAL
		try{
				FCC_AGREGA_SECCION_LATERAL('Criterios de selección',FCC_DETALLE);
		}catch(err){}
			
				
	break;
				
				
//NO CONTEMPLADO ----------------------------------------------------------------------------------------
				
   default: console.log("CASO NO CONTEMPLADO: " + FCC_CONTROL);	

}

var UL_SB_APPLY = document.getElementById("sb_apply");	
//UL_SB_APPLY.style.display=FCC_NONE;

console.log("==> CIERRE CORRECTO");

}
// GETELEMENTO
//---------------------------------------------------------------------------------------------------------

/*############################################################################################################################*/
/*############################################################################################################################*/
/*############################################################################################################################*/
/*############################################################################################################################*/
//														ZONA DE FUNCIONES
/*############################################################################################################################*/
/*############################################################################################################################*/
/*############################################################################################################################*/


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





function FCC_GET_ELEMENTO(FCC_FIELD){

var FCC_VALOR="";

	try {
		FCC_VALOR=document.getElementsByClassName(FCC_FIELD)[0];
	}catch(err) {
		FCC_VALOR="99";
	}

return FCC_VALOR;
}



/*############################################################################################################################*/
//FUNCION PARA AÑADIR CODIGOS EN CABECERA
/*############################################################################################################################*/

function FCC_AGREGA_CABECERA(FCC_ETIQUETA,FCC_VALOR){

	console.log("CABECERA: "+FCC_ETIQUETA+ " = "+ FCC_VALOR);

	// DECALRACION DE VARIABLES*/
	var FCC_DOM= document.getElementsByClassName("job_summary_inner")[0];
	var FCC_ADD_DOM="";
	var FCC_TEMP_DOM="";
	
	// EJECUCION DEL PROCESO*/
	FCC_ADD_DOM += "<div class='field'>";
		FCC_ADD_DOM+= "<div class='field-label'>";
		FCC_ADD_DOM+= FCC_ETIQUETA;
		FCC_ADD_DOM+= "</div>";
		FCC_ADD_DOM+= "<div class='widget'>";
		FCC_ADD_DOM+= FCC_VALOR;
		FCC_ADD_DOM+= "</div>";
	FCC_ADD_DOM +="</div>";
	FCC_TEMP_DOM=FCC_DOM.innerHTML;			
	FCC_DOM.innerHTML=FCC_ADD_DOM+FCC_TEMP_DOM;
}

/*############################################################################################################################*/
//FUNCION PARA ABRIR Y CERRAR SECCIONES LATERALES
/*############################################################################################################################*/

function FCC_AGREGA_SECCION_LATERAL(FCC_ETIQUETA, FCC_DETALLE){

	console.log("SECCION LATERAL: "+FCC_ETIQUETA);

	// DECALRACION DE VARIABLES*/
	var FCC_DOM= document.getElementsByClassName("sidebar sidebar-right")[0];
	var FCC_DOM_SECCIONES="";
	var FCC_DOM_SECCION="";
	var FCC_ADD_DOM="";

	// OCUALTANDO SECCION ORIGINAL
	FCC_DOM_SECCIONES=FCC_DOM.getElementsByClassName("sidebar-inner sb");
	
	var i;
		for (i = 0; i < FCC_DOM_SECCIONES.length ; i++) { 
			FCC_DOM_SECCION = FCC_DOM_SECCIONES[i];
					
			if (FCC_DOM_SECCION.id=="") {
				FCC_DOM_SECCION.style.display = 'none';
				console.log("Sección lateral original : oculta");
				break;
			}
			
		}
	
	// EJECUCION DEL PROCESO*/
	FCC_ADD_DOM += "<div class='sidebar-inner sb' id='fcc_detalle'>";
		FCC_ADD_DOM += "<div class='sidebar-header row'>"
			FCC_ADD_DOM += "<div class='sidebar-title col col-12'>"
			FCC_ADD_DOM += FCC_ETIQUETA
			FCC_ADD_DOM += "</div>"
		FCC_ADD_DOM += "</div>"
		FCC_ADD_DOM += FCC_DETALLE	
	FCC_ADD_DOM +="</div>";
	
	FCC_DOM.innerHTML+=FCC_ADD_DOM;
}

/*############################################################################################################################*/
//FUNCION PARA AÑADIR CODIGOS EN BARRA LATERAL DERECHA
/*############################################################################################################################*/

function FCC_AGREGA_LATERAL(FCC_ETIQUETA,FCC_VALOR,FCC_DETALLE){

	console.log("LATERAL: "+FCC_ETIQUETA);

	// EJECUCION DEL PROCESO*/
	
	var arrayDeCadenas = FCC_VALOR.split(",");
	var limitell = arrayDeCadenas.length;
	
	
	FCC_DETALLE += "<div class='sidebar-body'>";
		
		FCC_DETALLE+= "<b>" + FCC_ETIQUETA + "</b>";
		
		for (ll=0 ; ll<limitell; ll++){
			FCC_DETALLE+= "<br>"+ "-"+ arrayDeCadenas[ll];
		}
		

		FCC_DETALLE+= "<br><br>";
	FCC_DETALLE +="</div>";
		
	return FCC_DETALLE;
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







/*############################################################################################################################*/
//FUNCION PARA OCULTAR ELEMENTOS
/*############################################################################################################################*/

function FCC_OCULTA_CAMPOS_SECCION(FCC_SUB_FORM_DESC,FCC_FIELD,FCC_INDICE_FIELD){

	var FCC_SUB_FORM= document.getElementsByClassName(FCC_SUB_FORM_DESC)[0];
	var FCC_ELEMENTO = FCC_SUB_FORM.getElementsByClassName(FCC_FIELD)[FCC_INDICE_FIELD];

	FCC_ELEMENTO.style.display = 'none';

	console.log("ocultando: " + FCC_SUB_FORM_DESC + " - "+ FCC_INDICE_FIELD);	
}

/*############################################################################################################################*/
// FUNCION PARA OCULTAR CONTROLES
/*############################################################################################################################*/

function FCC_OCULTA_POR_CLASE(FCC_VALOR){
	try{
		FCC_CLASS_WIDGET_HIDE=FCC_VALOR.className;
		FCC_SUB_FORM_DESC=	"job-bfields";
		FCC_FIELD	="field";
		FCC_INDICE_FIELD=0;
		var FCC_ELEMENTO="";
		
		//obtenido el sub formulario prinicpal
		var FCC_SUB_FORM= document.getElementsByClassName(FCC_SUB_FORM_DESC)[0];
		
		//obteniendo todos los Fields que coinciden con el valor 
		var FCC_ELEMENTOS = FCC_SUB_FORM.getElementsByClassName(FCC_FIELD);
		
		var i;
			for (i = 0; i < FCC_ELEMENTOS.length ; i++) { 
			
				FCC_ELEMENTO = FCC_ELEMENTOS[i].getElementsByClassName(FCC_CLASS_WIDGET_HIDE);
						
				if (FCC_ELEMENTO.length>0) {
					FCC_ELEMENTOS[i].style.display = 'none';
					console.log("ocultando:"+i+" : " +FCC_CLASS_WIDGET_HIDE);
					break;
				}
			}
	}catch(err){}
}

function FCC_OCULTA_POR_NOMBRE(FCC_VALOR){
	
	FCC_CLASS_WIDGET_HIDE=FCC_VALOR;
	FCC_SUB_FORM_DESC=	"job_summary";
	FCC_FIELD	="field";
	var FCC_ELEMENTO="";
	var FCC_SUB_ELEMENTO="";
	
	//obtenido el sub formulario prinicpal
	var FCC_SUB_FORM= document.getElementsByClassName(FCC_SUB_FORM_DESC)[0];
	
	//obteniendo todos los Fields que coinciden con el valor 
	var FCC_ELEMENTOS = FCC_SUB_FORM.getElementsByClassName(FCC_FIELD);
	
	console.log("CONTANDO CABECERAS  " +FCC_ELEMENTOS.length);
	
	try{FCC_ELEMENTOS[2].style.display = 'none';}catch(err){}
	
	console.log("ocultando:"+2+ " : " + FCC_CLASS_WIDGET_HIDE);
}

function FCC_OCULTA(FCC_CLASS_WIDGET_HIDE){
	
	FCC_SUB_FORM_DESC=	"job-bfields";
	FCC_FIELD	="field";
	FCC_INDICE_FIELD=0;
	var FCC_ELEMENTO="";
	
	//obtenido el sub formulario prinicpal
	var FCC_SUB_FORM= document.getElementsByClassName(FCC_SUB_FORM_DESC)[0];
	
	//obteniendo todos los Fields que coinciden con el valor 
	var FCC_ELEMENTOS = FCC_SUB_FORM.getElementsByClassName(FCC_FIELD);
	
	var i;
		for (i = 0; i < FCC_ELEMENTOS.length ; i++) { 
		
			FCC_ELEMENTO = FCC_ELEMENTOS[i].getElementsByClassName(FCC_CLASS_WIDGET_HIDE);
					
			if (FCC_ELEMENTO.length>0) {
				FCC_ELEMENTOS[i].style.display = 'none';
				console.log("ocultando:"+i+" : " +FCC_CLASS_WIDGET_HIDE);
				break;
			}
			
		}
	
	
}
