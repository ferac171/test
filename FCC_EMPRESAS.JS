
//#############################################################################################################################
//#
//#	MODELO PARA MODIFICAR INTERFACE DE REGISTRO DE EMPRESA Y CONTACTO
//# AMBITO: EMPRESA Y CONTACTO
//#
//# FORMULARIO		: Employeer_registration
//# CAMPO			: FCC_COD_1 (JS FUNCIONES)
//# DESARROLLADO	: FERNANDO CALDERON 
//# VERSION			: 1.0
//# FECHA			: 06.06.18
//#
//# NAME			: FCC_EMPRESAS.JS
//#
//# INVOCACION LOCALHOST
//# => <script type="text/javascript"src="http://localhost/usb/FCC_EMPRESAS.js"></script>
//#
//# INVOCACION BIBLIOTECA
//# => <script src="https://ulima-cde.symplicity.com/utils/view.php?id=76432cbebfa5d33fc56279f613fb0ff3"></script>
//# 
//#
//# INVOCACION GITHUB
//# https://raw.githubusercontent.com/ferac171/test/master/FCC_EMPRESAS.CSS
//# https://rawcdn.githack.com/ferac171/test/master/FCC_EMPRESAS.CSS	
//#	
//# => <link rel="stylesheet" type="text/css" href="https://rawcdn.githack.com/ferac171/test/master/FCC_EMPRESAS.CSS">
//#
//#############################################################################################################################

/*  COPIAR PRUEBAS LOCALHOST	

<script type="text/javascript"src="http://localhost/usb/FCC_EMPRESAS.js"></script>
<link rel="stylesheet" type="text/css" href="http://localhost/usb/FCC_EMPRESAS.css">	

*/

/*  COPIAR PRODUCCION
	
<script src="https://ulima-cde.symplicity.com/utils/view.php?id=76432cbebfa5d33fc56279f613fb0ff3"></script>

<link rel="stylesheet" type="text/css" href="https://ulima-cde.symplicity.com/utils/view.php?id=d34c261583d33034acc7e81aa54e7eb0">
	
*/

/*############################################################################################################################

DECLARACION DE CONSTANTES

##############################################################################################################################*/

const FCC_VERSION = 8;
const FCC_HABILITA_JS = true;
const FCC_DEBUG = false;
const FCC_AJUSTE_PICKLIST = 1;

/*############################################################################################################################

LISTENERS

##############################################################################################################################*/

try{
	document.getElementById("dnf_class_values_employer_registration__contact_fname_").addEventListener("change", UL_COMPONE_FIRMA);
	document.getElementById("dnf_class_values_employer_registration__contact_lname_").addEventListener("change", UL_COMPONE_FIRMA);
	document.getElementById("dnf_class_values_employer_registration__apellido_materno_").addEventListener("change", UL_COMPONE_FIRMA);
}catch(err){}


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
		
	console.log("VERSION DE CONTROL: "+FCC_VERSION);
		
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
		
	if (UL_MODO_DEBUG==1 || FCC_DEBUG){
		console.log("MODO: DEBUG");
		FCC_CONTROL_00.style.display = 'block';
	}else{
		console.log("MODO: USER"); 
		FCC_CONTROL_00.style.display = 'none';
	}	

// IDENTIFICACION DE FORMAULARIO DE CARGA
//---------------------------------------------------------------------------------------------------------	
		
	switch (UL_FORMULARIO_ORIGEN) {
				
		//FORMULARIO REGISTRO EMPRESA-------------------------------------------------------------------------		
		case "E":
				console.log("ENTRADA: REGISTRO EMPRESA/CONTACTO");
				
				//OBTENIENDO VARIABLES DE CONTROL
				UL_RUC=FCC_GET_VALOR_ELEMENTO(FCC_RUC);
				UL_RAZON=FCC_GET_VALOR_ELEMENTO(FCC_RAZON);	
				UL_CONTROL_0=FCC_GET_NUMERO_ELEMENTO(FCC_CONTROL_0);	
				UL_ERRORES=document.querySelector(".alert.error"); 			
			
				//LOG DE VARIBLES
				console.log("=> UL_RUC = "+UL_RUC);
				console.log("=> UL_RAZON = "+UL_RAZON);
				console.log("=> UL_CONTROL_0 = "+UL_CONTROL_0);
				console.log("...");
				console.log("ESTADO > "+UL_FORM_ESTADO);
					
			
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
					
					//CASO	: CLIC BOTON VALIDA RUC
					if(UL_RUC!=""){ 
						
					console.log("# SOLICITUD DE VALIDACION DE RUC");
					
						//CASO	: EMPRESA YA EXISTE					
						if (FCC_VALIDA_ERRORES(UL_ERRORES,"TaxID")){
							UL_FORM_ESTADO = 6;
							console.log("ERROR: EL RUC YA SE ENCUETRA REGISTRADO");
						
						//CASO	: EMPRESA NUEVA	
						}else{
							UL_FORM_ESTADO = 5; 
							console.log("CORRECTO: EL RUC NO SE ENCUETRA REGISTRADO");

						}
					}
					
					//CASO	: CLIC ACTAULIZAR FORMULARIO
					if(UL_RUC!="" && UL_RAZON!=""){ 
						
						//CASO	: EMPRESA YA EXISTE	
						if (FCC_VALIDA_ERRORES(UL_ERRORES,"TaxID")){
							UL_FORM_ESTADO = 7;
							console.log("LA EMPRESA QUE INTENTA MODIFICAR YA ESTA REGISTRADA");
							
						//CASO	: EMPRESA NUEVA	
						}else {
							UL_FORM_ESTADO = 5;
							console.log("RUC NUEVO");
							console.log("=> UL_RUC & UL_RAZON "+UL_RUC+" => 5");
							//console.log(UL_ERRORES);
							
							try{
								
							console.log(UL_ERRORES);
							tt = document.getElementsByClassName("alert error");
							console.log(tt[0].style.display);
							tt[0].style.display = 'block';
							
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

	console.log("ESTADO > " + CODIGO_FUNCION);
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
	
	console.log("# EJECUTANDO FUNCIONES ADICIONALES DE ESTADO > "+ CODIGO_FUNCION);
	
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
	

/*###################################################################################################################

FIN

#####################################################################################################################*/

