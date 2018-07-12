
//#############################################################################################################################
//#
//#	MODELO PARA MODIFICAR INTERFACE DE REGISTRO DE EMPRESA Y CONTACTO
//# AMBITO: EMPRESA Y CONTACTO
//#
//# DESARROLLADO	: FERNANDO CALDERON 
//# VERSION			: 10.0
//# FECHA			: 12.07.18
//#
//# FORMULARIO		: Employeer_registration form
//# CAMPO			: FCC_COD_1 (JS FUNCIONES)
//#
//# NAME			: FCC_EMPRESAS.JS
//# GITHUB			: 
//#
//# INVOCACION LOCALHOST
//# => <script type="text/javascript"src="http://localhost/usb/FCC_REGISTRO_EMPRESAS/FCC_EMPRESAS.js"></script>
//#
//# INVOCACION GITHUB
//# 
//# https://raw.githubusercontent.com/ferac171/test/master/FCC_EMPRESAS.JS
//# https://rawcdn.githack.com/ferac171/test/master/FCC_EMPRESAS.JS	
//#	
//# => <script src="https://rawcdn.githack.com/ferac171/test/master/FCC_EMPRESAS.JS"></script>
//#
//#############################################################################################################################


/*

<input type="button" id="UL_BTN_COPIA_DIRECCION" name="UL_BTN_COPIA_DIRECCION"		
onclick="UL_COMPONE_DIRECCION()" class="input-submit btn btn_primary" value="Copiar Dirección" />
</div>		



*/




//# INVOCACION LOCALHOST

/*

<div class="estilo-menu">DECLARACIÓN DE POLÍTICA</div>
<link rel="stylesheet" type="text/css" href="https://rawcdn.githack.com/ferac171/test/master/FCC_EMPRESAS.CSS">
<script type="text/javascript" src="http://localhost/usb/FCC_CONTROL_JS_LOCALES.js"></script>

<script type="text/javascript">

	var FCC_SRC_FUENTE_SCRIPT="https://cdn.rawgit.com/ferac171/test/master/FCC_EMPRESAS.JS";
	var FCC_SCRIPT_LOCAL="";
	
	try{
		FCC_SCRIPT_LOCAL = FCC_REGISTRO_EMPRESAS_SERVIDOR;
		if(FCC_SCRIPT_LOCAL){FCC_SRC_FUENTE_SCRIPT=FCC_REGISTRO_EMPRESAS_LOCAL;}
	}catch(err){}

	console.log("FCC : EJECUTANDO: " +FCC_SRC_FUENTE_SCRIPT);
	document.write('<script languaje="JavaScript" src="' + FCC_SRC_FUENTE_SCRIPT + '"><' + '/script>');
</script>






*/



/*############################################################################################################################

DECLARACION DE CONSTANTES

##############################################################################################################################*/

const FCC_VERSION = 10;
const FCC_HABILITA_JS = true;
const FCC_DEBUG = false;
const FCC_AJUSTE_PICKLIST = 1;


/*############################################################################################################################

LISTENERS

##############################################################################################################################*/

//try{
//	document.getElementById("dnf_class_values_employer_registration__contact_fname_").addEventListener("change", UL_COMPONE_FIRMA);
//	document.getElementById("dnf_class_values_employer_registration__contact_lname_").addEventListener("change", UL_COMPONE_FIRMA);
//	document.getElementById("dnf_class_values_employer_registration__apellido_materno_").addEventListener("change", UL_COMPONE_FIRMA);
//}catch(err){}


/*############################################################################################################################

FUNCION		: 	UL_BTN_VALIDA_RUC_CLIC
DETALLE		: 	Se simula el envío del formulario con el botón "dnf_opt_submit"
				Se espera que actúe el validador nativo del sistema y si el RUC existe genere un error de RUC repetido

##############################################################################################################################*/

	function UL_BTN_VALIDA_RUC_CLIC(){ 
		document.emp_reg_form.dnf_opt_submit.click() ;
	}
	
/*############################################################################################################################

FUNCION		:	UL_BTN_ENVIA_CLIC
DETALLE		:	Se simula el envío del formulario con el botón "dnf_opt_submit"

##############################################################################################################################*/	
	
	function UL_BTN_ENVIA_CLIC(){ 
		document.emp_reg_form.dnf_opt_submit.click() ;
	}	

/*############################################################################################################################

FUNCION		:	ONLOAD
DETALLE		:	Función principal que analiza el detalle de los formularios y acciones

##############################################################################################################################*/

window.onload=function() {

// VALIDACION DE EJECUCION DE JS
//---------------------------------------------------------------------------------------------------------
	
if (FCC_HABILITA_JS){	
		
	console.log("# CONTROL FCC_EMPRESAS V:"+FCC_VERSION);
		
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
		
	UL_FORMULARIO_ORIGEN = getFormulario();	
	UL_MODO_DEBUG = getParameterByName('FCC');	
		
	FCC_RUC= FCC_GET_ELEMENTO_BYID("dnf_class_values_employer_registration__tax_id_");
	FCC_RAZON= FCC_GET_ELEMENTO_BYID("autocomplete_input_dnf_class_values_employer_registration__employer_id_");
	FCC_CONTROL_0= FCC_GET_ELEMENTO_BYID("dnf_class_values_employer_registration__UL_CONTROL_0_");
	FCC_CONTROL_00= FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_employer_registration__UL_CONTROL_0_");
	
// IDENTIFICACION DE MODO DEBUG
//---------------------------------------------------------------------------------------------------------	
	try{	
		if (UL_MODO_DEBUG==1 || FCC_DEBUG){
			console.log("# MODO: DEBUG");
			FCC_CONTROL_00.style.display = 'block';
		}else{
			console.log("# MODO: USER"); 
			FCC_CONTROL_00.style.display = 'none';
		}
	}catch(err){}		

// IDENTIFICACION DE FORMAULARIO DE CARGA
//---------------------------------------------------------------------------------------------------------	
		
	switch (UL_FORMULARIO_ORIGEN) {
				
		//FORMULARIO REGISTRO EMPRESA-------------------------------------------------------------------------		
		case "E": console.log("## ENTRADA: REGISTRO EMPRESA/CONTACTO");
				
				//OBTENIENDO VARIABLES DE CONTROL
				UL_RUC=FCC_GET_VALOR_ELEMENTO(FCC_RUC);
				UL_RAZON=FCC_GET_VALOR_ELEMENTO(FCC_RAZON);	
				UL_CONTROL_0=FCC_GET_NUMERO_ELEMENTO(FCC_CONTROL_0);	
				UL_ERRORES=document.querySelector(".alert.error"); 			
			
				//LOG DE VARIBLES
				console.log("=> UL_RUC = "+UL_RUC);
				console.log("=> UL_RAZON = "+UL_RAZON);
				console.log("=> UL_CONTROL_0 = "+UL_CONTROL_0);
				console.log("=> ESTADO > "+UL_FORM_ESTADO);
					
			
				//VALIDANDO CASOS	
				if (UL_CONTROL_0 == 0){	
					
					console.log("FORMULARIO: CARGA INICIAL");
					UL_FORM_ESTADO = 2;
						
				}else {
									
					//CASO	: CLIC BOTON REGRESAR 20100132592
					
					if(UL_RUC=="" && UL_RAZON==""){ 
						console.log("=> UL_RUC & UL_RAZON = null =>" + UL_CONTROL_0);
						UL_FORM_ESTADO = UL_CONTROL_0;	
					}
					
					//CASO	: CREACION DE EMPRESA
					
					if(UL_RUC!=""&& UL_RAZON==""){ 
						console.log("### SOLICITUD DE VALIDACION DE RAZON SOCIAL");
					
						//CASO	: EMPRESA YA EXISTE					
						if (FCC_VALIDA_ERRORES(UL_ERRORES,"TaxID")){
							UL_FORM_ESTADO = 6;
							console.log("=> ERROR: EL RUC YA SE ENCUETRA REGISTRADO");
						
						//CASO	: EMPRESA NUEVA	
						}else{
							UL_FORM_ESTADO = 5; 
							console.log("=> CORRECTO: EL RUC NO SE ENCUETRA REGISTRADO");

						}
					}
					
					//CASO	: EMPRESA EXISTE
					
					if(UL_RUC!="" && UL_RAZON!=""){ 
						console.log("### EMPRESA EXISTE");
				
						UL_FORM_ESTADO = 7;
					
						//CASO	: EMPRESA YA EXISTE	
						if (FCC_VALIDA_ERRORES(UL_ERRORES,"TaxID")){
							console.log("LA EMPRESA QUE INTENTA MODIFICAR YA ESTA REGISTRADA");
							
						//CASO	: EMPRESA NUEVA	
						}else {
							console.log("=> REGISTRO DE NUEVO CONTACTO");
							
							try{
								tt = document.getElementsByClassName("alert error");
								tt[0].style.display = 'block';
								console.log("=> MOSTRANDO ERRORES");
								console.log(UL_ERRORES);
							}catch(err){}

						}				
					}
				}		
				break;
					
		//FORMULARIO MANAGER -------------------------------------------------------------------------------
		case "M":
				console.log("ENTRADA: MANAGER");
				UL_FORM_ESTADO =1;
				break;		
				
		//FORMULARIO INVALIDO-------------------------------------------------------------------------			
		case "X":
				console.log("ENTRADA: INVALIDA");
				UL_FORM_ESTADO =99;
				break;
	}

	//HABILITANDO FORMULARIO-----------------------------------------------------------------------------------
	if (UL_FORM_ESTADO!="") UL_HABILITA_GENERAL(UL_FORM_ESTADO);

// ACCIONES SI JS ESTA DESHABILITADO
//---------------------------------------------------------------------------------------------------------
	
}else{
	console.log("JS DESHABILITADO");	
}

}

/*############################################################################################################################

FUNCION		:	UL_HABILITA_GENERAL
DETALLE		:	Establece un estado en la variable de control "UL_SEC_CONTROL_0"  para que se validen las 
				dependencias registradas en el formulario de la aplicación
				
				Se cuenta con una variable de "ajustePickList" ya que los picklist en la aplicación no 
				trabajan por descripción sino por un código de indice.

##############################################################################################################################*/
			
function UL_HABILITA_GENERAL(CODIGO_FUNCION){ 

// VALIDACION DE EJECUCION DE JS
//---------------------------------------------------------------------------------------------------------
	
if (FCC_HABILITA_JS){	

// INICIALIZANDO VARIABLES
//---------------------------------------------------------------------------------------------------------	

	var ajustePickList =1;
	var VALOR_FUNCION=CODIGO_FUNCION + FCC_AJUSTE_PICKLIST;
		
// ACTUALIZANDO EL ESTADO DEL CAMPO DE CONTROL
//---------------------------------------------------------------------------------------------------------	

	console.log("=> ESTADO > " + CODIGO_FUNCION);
	document.getElementById('dnf_class_values_employer_registration__UL_CONTROL_0_').value=VALOR_FUNCION; 
	document.getElementById('dnf_class_values_employer_registration__UL_CONTROL_0_').onchange();

// ACTUALIZANDO ACCIONES ADICIONALES
//---------------------------------------------------------------------------------------------------------	
	UL_CHANGE_CONTROL();
	
}else{
	
	console.log("JS DESHABILITADO");	
}
}
	
/*###################################################################################################################

FUNCION		:	UL_CHANGE_CONTROL
DETALLE		:	Establece el comportamiento particular de cada estado del "UL_SEC_CONTROL_0"

#####################################################################################################################*/

function UL_CHANGE_CONTROL(){
		
// INICIALIZANDO VARIABLES
//---------------------------------------------------------------------------------------------------------	

	var ajustePickList =1;
	FCC_CONTROL_0= FCC_GET_ELEMENTO_BYID("dnf_class_values_employer_registration__UL_CONTROL_0_");
	var CODIGO_FUNCION = FCC_GET_NUMERO_ELEMENTO(FCC_CONTROL_0);
	var UL_RUC = document.getElementById('dnf_class_values_employer_registration__tax_id_');
	var UL_RAZON = document.getElementById('autocomplete_input_dnf_class_values_employer_registration__employer_id_');

	try{
	UL_RUC.readOnly = false;
	UL_RAZON.readOnly = false;
	}catch(err){}
	
	console.log("==> EJECUTANDO FUNCIONES ADICIONALES DE ESTADO > "+ CODIGO_FUNCION);
	
	/*ajustes adicionales según estado enviado*/
	switch(CODIGO_FUNCION) {
			case 0: 
					UL_CARGA_NOTIFICACION();
					break;
					
			case 1:	break;
			
			case 2:	
					try{document.getElementsByClassName("alert error")[0].style.display = 'none';
					}catch(err){}
					break;
					
			case 3:	
					try{document.getElementsByClassName("alert error")[0].style.display = 'none';
					}catch(err){}
					UL_RUC.value="";
					UL_RAZON.value="";
					console.log("=> BORRA RUC");
					console.log("=> BORRA RAZON");
					break;

			case 4:	
					try{document.getElementsByClassName("alert error")[0].style.display = 'none';
					}catch(err){}					UL_RUC.value="";
					UL_RAZON.value="";
					console.log("=> BORRA RUC");
					console.log("=> BORRA RAZON");
					break;
					
			case 5:	UL_RUC.readOnly = true ;
					console.log("=> BLOQUEA RUC");
					break;
					
			case 6:	break;
			
			case 7:	UL_RUC.readOnly = true;
					UL_RAZON.readOnly = true;
					console.log("=> BLOQUEA RUC");
					console.log("=> BLOQUEA RAZON");
					break;
					
			case 8:	break;
			case 9:	break;
			case 10:break;
			default:
		}

}	

/*###################################################################################################################

FUNCION		:	getParameterByName
DETALLE		:	retorna el valor de un parámetro de la URL
	
#####################################################################################################################*/
	
	function getParameterByName(variable){	
			
	/*Declaración e Inicialización de variables*/
		var query = window.location.search.substring(1);				
		var vars = query.split("&");	

	/*buscando ubicación del parámetro*/
		for (var i=0; i < vars.length; i++) {								
			var pair = vars[i].split("=");								
				if(pair[0] == variable){												
					return pair[1];
				}
			}	
			return 0; 
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


function FCC_GET_VALOR_ELEMENTO(FCC_ELEMENTO){

var FCC_VALOR="";

		try {
			FCC_VALOR=FCC_ELEMENTO.value;
		}catch(err) {
			FCC_VALOR="";
		}
		
return FCC_VALOR;
}


function FCC_GET_NUMERO_ELEMENTO(FCC_ELEMENTO){

var FCC_VALOR=99;
		try {
			FCC_VALOR=parseInt(FCC_ELEMENTO.value)-FCC_AJUSTE_PICKLIST;
		}catch(err) {
			FCC_VALOR=0;
		}
		
		if (isNaN(FCC_VALOR)){
			FCC_VALOR=0
		}
		
return FCC_VALOR;
}

/*###################################################################################################################

FUNCIONES	:	FCC_VALIDA_ERRORES
DETALLE		:	Se verifica la existencia de un error determinado

#####################################################################################################################*/	

function FCC_VALIDA_ERRORES(UL_ERRORES,TEXTO_ERROR){

var FCC_VALOR;
	
		if(UL_ERRORES!= undefined || UL_ERRORES!= null){			
			if (UL_ERRORES.outerText.search(TEXTO_ERROR)>=0){
				FCC_VALOR=true;
			}else {
				FCC_VALOR=false;
			}
		}	
		
return FCC_VALOR;
}	

/*###################################################################################################################

FUNCION		:	getFormulario
DETALLE		:	Determina en base a los parámetros de la URL la vista del formulario en el que nos encontramos

#####################################################################################################################*/

	function getFormulario(){	
					
		/*Declaración e Inicialización de variables*/
		var str =  window.location.pathname;
		var n = str.indexOf("/employers");
		var m = str.indexOf("/manager");
		var formulario_identificado="X";	

		/*buscando ubicación del parámetro*/
		if (n==0 ) formulario_identificado = "E";
		else if (m==0) formulario_identificado="M";
		else if ( n==-1) formulario_identificado ="X";
				
		return formulario_identificado; 
	} 	
	
	
	
/*###################################################################################################################

FUNCION		:	UL_CARGA_NOTIFICACION
DETALLE		: 	Se cargan los datos para el envio de la notificación desde el formulario

#####################################################################################################################*/		

function UL_CARGA_NOTIFICACION(){	

// DECLARACION DE VARIABLES
//---------------------------------------------------------------------------------------------------------	
		
		//Elemento de origen
		var FCC_MSJ_EMPRESA=document.getElementById('dnf_class_values_employer_registration__razon_social2_'); 
		var FCC_MSJ_CONTACTO=document.getElementById('dnf_class_values_employer_registration__contact_'); 
		var FCC_MSJ_PARA=document.getElementById('dnf_class_values_employer_registration__email_'); 
		
		var FCC_MSJ_CC="ulimalaboral@ulima.edu.pe"; ; 
		var FCC_MSJ_ASUNTO; 
		var FCC_MSJ_MENSAJE;
		
		//Variables de Trabajo
		var UL_PARA; 
		var UL_CC; 
		var UL_ASUNTO; 
		var UL_EMPRESA; 
		var UL_CONTACTO; 
		var UL_MENSAJE;	

		//Elmentos de Destino	
		var UL_MSJ_PARA=document.getElementById('dnf_class_values_employer_registration__UL_DESTINATARIO_');
		var UL_MSJ_CC=document.getElementById('dnf_class_values_employer_registration__UL_CONCOPIA_');
		var UL_MSJ_ASUNTO=document.getElementById('dnf_class_values_employer_registration__UL_ASUNTO_');
		var UL_MSJ_MENSAJE=document.getElementById('so_formfield_dnf_class_values_employer_registration__UL_MENSAJE_');
		UL_MSJ_MENSAJE.style.display='none';
		
// INICIALIZACION DE VARIABLES
//---------------------------------------------------------------------------------------------------------	
		UL_EMPRESA=FCC_MSJ_EMPRESA.value; 		
		UL_CONTACTO=FCC_MSJ_CONTACTO.value;
		UL_PARA=FCC_MSJ_PARA.value; 		
		UL_CC=FCC_MSJ_CC; 		
		 		
		UL_ASUNTO="[ULima Laboral] - " + UL_EMPRESA + " - Observación de registro"; 
		
		UL_MENSAJE="Estimado(a) " + UL_CONTACTO +" el registro de tu empresa: "+UL_EMPRESA+" presenta las siguientes observaciones: "+"ULima Laboral"; 		 		

// TRANFIRIENDO VARIABLES AL FORMULARIO
//---------------------------------------------------------------------------------------------------------	
		UL_MSJ_PARA.value=UL_PARA; 		
		UL_MSJ_CC.value=UL_CC; 		
		UL_MSJ_ASUNTO.value=UL_ASUNTO; 		
		UL_MSJ_MENSAJE.innerHTML=UL_MENSAJE; 	
		
} 
	
/*###################################################################################################################

FUNCIONES	:	UL_BTN_ENVIA_NOTIFICACION_CLIC
DETALLE		:	Método que envía la notificación a la aplicación de envio de email por defecto

#####################################################################################################################*/	
		
function UL_BTN_ENVIA_NOTIFICACION_CLIC(){

	var UL_MSJ_PARA=document.getElementById('dnf_class_values_employer_registration__UL_DESTINATARIO_');
	var UL_MSJ_CC=document.getElementById('dnf_class_values_employer_registration__UL_CONCOPIA_');
	var UL_MSJ_ASUNTO=document.getElementById('dnf_class_values_employer_registration__UL_ASUNTO_');
	var UL_MSJ_MENSAJE=document.getElementById('so_formfield_dnf_class_values_employer_registration__UL_MENSAJE_');
	
	var UL_CORREO="";
	
	UL_CORREO = "mailto:"+ UL_MSJ_PARA.value
             + "?cc="+UL_MSJ_CC.value
             + "&subject=" + UL_MSJ_ASUNTO.value
             + "&body=" + UL_MSJ_MENSAJE.innerHTML;
	
	window.location.href = UL_CORREO;
}
	
/*###################################################################################################################

FUNCIONES	:	UL_COMPONE_FIRMA
DETALLE		:	Método que arma la firma profesional del contacto en base a la composición de sus nombres y apellidos

#####################################################################################################################*/
	
function UL_COMPONE_FIRMA(){
	
	var FCC_NOMBRE 	= document.getElementById("dnf_class_values_employer_registration__contact_fname_").value;
	var FCC_APP_1 	= document.getElementById("dnf_class_values_employer_registration__contact_lname_").value;
	var FCC_APP_2 	= document.getElementById("dnf_class_values_employer_registration__apellido_materno_").value;
	var FCC_FIRMA	= document.getElementById("dnf_class_values_employer_registration__contact_");
		
	FCC_FIRMA.value	= FCC_NOMBRE + " " + FCC_APP_1 + " " + FCC_APP_2;
}	


function UL_COMPONE_DIRECCION(){
	
	var FCC_DIR_EMP 	= document.getElementById("dnf_class_values_employer_registration__direccin_de_la_empresa_").value;
	var FCC_DIR_CONTACTO	= document.getElementById("dnf_class_values_employer_registration__direccin_de_su_oficina_");
		
	FCC_DIR_CONTACTO.value	= FCC_DIR_EMP;
}	


/*###################################################################################################################

FUNCIONES	:	UL_FUNCIONES MANAGER
DETALLE		:	Método uqe se ejeucta al cargar el formulario de manager paso 01

#####################################################################################################################*/


/*############################################################################################################################

LISTENERS

##############################################################################################################################*/
try{
document.getElementById("dnf_class_values_employer_registration__contact_fname_").addEventListener("change", UL_COMPONE_FIRMA);
document.getElementById("dnf_class_values_employer_registration__contact_lname_").addEventListener("change", UL_COMPONE_FIRMA);
document.getElementById("dnf_class_values_employer_registration__apellido_materno_").addEventListener("change", UL_COMPONE_FIRMA);

//document.getElementById("dnf_class_values_employer_registration__direccin_de_la_empresa_").addEventListener("change", UL_COMPONE_DIRECCION);

}catch(err){}

/*############################################################################################################################

DECLARACION DE CONSTANTES

##############################################################################################################################*/

const FCC_VERSION_FCC_EMPRESAS_EXT = 1.1;

/*############################################################################################################################

OCULATA CAMPOS MANAGER

##############################################################################################################################*/

console.log("# CONTROL FCC_EMPRESAS_EXT V:"+FCC_VERSION_FCC_EMPRESAS_EXT);

var x = document.getElementsByClassName("hi first");

if (x.length>0){
	
	document.getElementById("_fieldgroup_UL_SEC_01_MENSAJES").style.display = 'none';
	document.getElementById("_fieldgroup_UL_SEC_04_INF_COMERCIAL").style.display = 'none';
	document.getElementById("so_formfield_dnf_class_values_employer_registration__UL_SEC_03_CONTROL_01_").style.display = 'none';
	document.getElementById("so_formfield_dnf_class_values_employer_registration__UL_SEC_03_CONTROL_02_").style.display = 'none';
	document.getElementById("so_formfield_dnf_class_values_employer_registration__UL_NOT_MARCA_").style.display = 'none';
	document.getElementById("so_formfield_dnf_class_values_employer_registration__UL_SEC_04_CONTROL_01_").style.display = 'none';
	
	console.log("MANAGER : PASO 1");
	
}else{
	console.log("NO ES MANAGER : PASO 1");
}


/*###################################################################################################################

FIN

#####################################################################################################################*/






	
