
/*##############################################################################################################################*/

// MODELO PARA MODIFICAR INTERFACE DE:
// 		 	REGISTRO DE EMPRESAS Y CONTACTOS
//			REGISTRO DE CONTACTOS 
//			APROBACION DE EMPRESAS DESDE MANAGER
//			ACTUALIZACION DE PERFIL DE EMPRESAS DESDE MANAGER

// FORMULARIO		: Employer Registration Form
// CAMPO			: FCC_COD_1 (JS FUNCIONES)

// NAME			: FCC_EMPRESAS.JS
	
	const FCC_EMPRESAS_VERSION = "13.03XX";
	const FCC_EMPRESAS_FECHA = "16/08/18";
	
/*############################################################################################################################*/

console.log("# CONTROL FCC_EMPRESAS V:"+FCC_EMPRESAS_VERSION + " al "+FCC_EMPRESAS_FECHA);

/*############################################################################################################################*/

// DECLARACION DE CONSTANTES

/*##############################################################################################################################*/

const FCC_HABILITA_JS = true;
const FCC_DEBUG = 	false;
const FCC_AJUSTE_PICKLIST = 1;

/*############################################################################################################################*/

// DECLARACION DE NOMBRE O ID ELEMENTOS DE FORMULARIO 

/*##############################################################################################################################*/

//ELEMENTOS DE CONTROL 
//------------------------------------------------------------------------------------------------------------------

const ID_TB_001 = "UL_TB_001";
const ID_REG_TB_001 = "dnf_class_values_employer_registration__REG_UL_TB_001_";
const ID_SECC_TB_001= "so_formfield_dnf_class_values_employer_registration__oficina_se_encuentra_en_el_dom_"
const ID_WIDGET_TB_001= "so_formfield_dnf_class_values_employer_registration__REG_UL_TB_001_";

const ID_FCC_CONTROL_0= "dnf_class_values_employer_registration__UL_CONTROL_0_";
const ID_FCC_CONTROL_00= "so_formfield_dnf_class_values_employer_registration__UL_CONTROL_0_";

const CLASS_ERRORES ="alert error";


//ELEMENTOS DE EMPRESA
//------------------------------------------------------------------------------------------------------------------

const ID_EMPRESA_DIR_PAIS = "dnf_class_values_employer_registration__pas_"; 
const ID_EMPRESA_DIR_DEPARTAMENTO = "hp_input3"; 
const ID_EMPRESA_DIR_CIUDAD = "dnf_class_values_employer_registration__ciudad_"; 
const ID_EMPRESA_DIR_CALLE = "dnf_class_values_employer_registration__direccin_de_la_empresa_"; 

const ID_EMPRESA_RUC= "dnf_class_values_employer_registration__tax_id_";
const ID_EMPRESA_MARCA= "autocomplete_input_dnf_class_values_employer_registration__employer_id_";
const ID_EMPRESA_RAZON= "dnf_class_values_employer_registration__razon_social2_";

const ID_EMPRESA_SECC_DIR_DEPARTAMENTO= "so_formfield_dnf_class_values_employer_registration__departamentoprovinciadistrito_";
const ID_CONTACTO_SECC_DIR_DEPARTAMENTO="so_formfield_dnf_class_values_employer_registration__departamentoprovinciadistrito2_";
	
//ELEMENTOS DE NOTIFICACION
//------------------------------------------------------------------------------------------------------------------

const ID_SECC_MENSAJES= "_fieldgroup_UL_SEC_01_MENSAJES";
const ID_SECC_INF_COMERCIAL= "_fieldgroup_UL_SEC_04_INF_COMERCIAL";

const ID_S03_CONTROL_01= "so_formfield_dnf_class_values_employer_registration__UL_SEC_03_CONTROL_01_";
const ID_S03_CONTROL_02= "so_formfield_dnf_class_values_employer_registration__UL_SEC_03_CONTROL_02_";
const ID_NOT_MARCA= "so_formfield_dnf_class_values_employer_registration__UL_NOT_MARCA_";
const ID_S04_CONTROL_01= "so_formfield_dnf_class_values_employer_registration__UL_SEC_04_CONTROL_01_";

//ELEMENTOS DE CONTACTO
//------------------------------------------------------------------------------------------------------------------

const ID_CONTACTO_NOMBRE ="dnf_class_values_employer_registration__contact_fname_";
const ID_CONTACTO_APELLIDO_1 = "dnf_class_values_employer_registration__contact_lname_";
const ID_CONTACTO_APELLIDO_2 = "dnf_class_values_employer_registration__apellido_materno_";

const ID_CONTACTO_DIR_PAIS = "dnf_class_values_employer_registration__especifique_el_pas_";
const ID_CONTACTO_DIR_PAIS2 = "dnf_class_values_employer_registration__especifique_el_pas__widget";

const ID_CONTACTO_DIR_DEPARTAMENTO = "hp_input4";
const ID_CONTACTO_DIR_DEPARTAMENTO2 = "dnf_class_values_employer_registration__direccion_del_contacto__widget";

const ID_CONTACTO_DIR_CIUDAD = "dnf_class_values_employer_registration__ciudad_contacto_";
const ID_CONTACTO_DIR_CALLE = "dnf_class_values_employer_registration__direccion_del_contacto_";

const ID_CONTACTO_DIR_COMPLETA = "dnf_class_values_employer_registration__direccin_de_su_oficina_";

/*##############################################################################################################################*/

// VARIABLES GENERALES

/*##############################################################################################################################*/

//ELEMENTOS DE CONTROL

var UL_TB_001 = document.getElementById(ID_TB_001);
var REG_UL_TB_001 = document.getElementById(ID_REG_TB_001);

//ELEMENTOS DE EMPRESA

var UL_EMPRESA_DIR_PAIS = document.getElementById(ID_EMPRESA_DIR_PAIS);
var UL_EMPRESA_DIR_DEPARTAMENTO = document.getElementById(ID_EMPRESA_DIR_DEPARTAMENTO);
var UL_EMPRESA_DIR_CIUDAD = document.getElementById(ID_EMPRESA_DIR_CIUDAD);
var UL_EMPRESA_DIR_CALLE = document.getElementById(ID_EMPRESA_DIR_CALLE);

//ELEMENTOS DE CONTACTO

var UL_CONTACTO_NOMBRE = document.getElementById(ID_CONTACTO_NOMBRE);
var UL_CONTACTO_APELLIDO_1 = document.getElementById(ID_CONTACTO_APELLIDO_1);
var UL_CONTACTO_APELLIDO_2 = document.getElementById(ID_CONTACTO_APELLIDO_2);

var UL_CONTACTO_DIR_PAIS = document.getElementById(ID_CONTACTO_DIR_PAIS);
var UL_CONTACTO_DIR_PAIS2 = document.getElementById(ID_CONTACTO_DIR_PAIS2);

var UL_CONTACTO_DIR_DEPARTAMENTO = document.getElementById(ID_CONTACTO_DIR_DEPARTAMENTO);
var UL_CONTACTO_DIR_DEPARTAMENTO2 = document.getElementById(ID_CONTACTO_DIR_DEPARTAMENTO2);

var UL_CONTACTO_DIR_CIUDAD = document.getElementById(ID_CONTACTO_DIR_CIUDAD);
var UL_CONTACTO_DIR_CALLE = document.getElementById(ID_CONTACTO_DIR_CALLE);

var UL_CONTACTO_DIR_COMPLETA = document.getElementById(ID_CONTACTO_DIR_COMPLETA);

/*##############################################################################################################################*/

// LISTENERS

/*##############################################################################################################################*/


try{
	UL_CONTACTO_DIR_COMPLETA.readOnly = true;
}catch(err){}

// TOGGLE BUTTONS
try{
UL_TB_001.addEventListener("change", UL_COPIA_DIRECCION);
}catch(err){}

// COMPONE FIRMA
try{
	UL_CONTACTO_NOMBRE.addEventListener("change", UL_COMPONE_FIRMA);
	UL_CONTACTO_APELLIDO_1.addEventListener("change", UL_COMPONE_FIRMA);
	UL_CONTACTO_APELLIDO_2.addEventListener("change", UL_COMPONE_FIRMA);
}catch(err){}

//COMPONE DIRECCION
try{
	UL_CONTACTO_DIR_PAIS.addEventListener("change", UL_COPIA_DIRECCION);
	UL_CONTACTO_DIR_PAIS2.addEventListener("change", UL_COPIA_DIRECCION);
	UL_CONTACTO_DIR_DEPARTAMENTO.addEventListener("change", UL_COPIA_DIRECCION);
	UL_CONTACTO_DIR_DEPARTAMENTO2.addEventListener("change", UL_COPIA_DIRECCION);
	UL_CONTACTO_DIR_CIUDAD.addEventListener("change", UL_COPIA_DIRECCION);
	UL_CONTACTO_DIR_CALLE.addEventListener("change", UL_COPIA_DIRECCION);
}catch(err){}

/*##############################################################################################################################*/

// CARGA INICIAL

/*##############################################################################################################################*/

var x = document.getElementsByClassName("hi first");
var PASO1 = false;

if (x.length>0){
	console.log("MANAGER : PASO 1");	
	PASO1=true;
	document.getElementById(ID_SECC_MENSAJES).style.display = 'none';
	document.getElementById(ID_SECC_INF_COMERCIAL).style.display = 'none';
	document.getElementById(ID_S03_CONTROL_01).style.display = 'none';
	document.getElementById(ID_S03_CONTROL_02).style.display = 'none';
	document.getElementById(ID_NOT_MARCA).style.display = 'none';
	document.getElementById(ID_S04_CONTROL_01).style.display = 'none';
	document.getElementById(ID_SECC_TB_001).style.display = 'none';
	document.getElementById(ID_WIDGET_TB_001).style.display = 'none';	
	
	var temp = document.getElementById("dnf_class_values_employer_registration__REG_UL_TB_001__widget").innerHTML
	
	if (temp.search("N")>=0){
		
		try{ document.getElementById("so_formfield_dnf_class_values_employer_registration__misma_direccion_contacto_empre_").style.display = 'none';
		}catch(err){}
	}else{
		try{ document.getElementById("so_formfield_dnf_class_values_employer_registration__misma_direccion_contacto_empre_").style.display = '';
		}catch(err){}
	}

			
}


/*##############################################################################################################################*/

// FUNCION		:	ONLOAD
// DETALLE		:	Función principal que analiza el detalle de los formularios y acciones

/*##############################################################################################################################*/

window.onload=function() {

// VALIDACION DE EJECUCION DE JS
//---------------------------------------------------------------------------------------------------------
	
if (FCC_HABILITA_JS && !PASO1){	
		
// DECALRACION DE VARIABLES
//---------------------------------------------------------------------------------------------------------
		
	var UL_FORM_ESTADO ="";	
	var UL_RUC="";
	var UL_CONTROL_0="";
	var UL_RAZON;
	var UL_MARCA;
	var UL_CONTROL_CONTACTOS=1;
	var UL_ERRORES;
	
	var UL_FORMULARIO_ORIGEN ="";
	
	var UL_CONTROL_00 ="";
	var FCC_RUC;
	var FCC_RAZON;
	var FCC_MARCA;
	var FCC_CONTROL_0;
	var FCC_CONTROL_00;
	var TEMP_RUC_CONTROL;
	var TEMP_ERRORES_TAX;
	
// INICIALIZANDO VARIABLES
//---------------------------------------------------------------------------------------------------------	
		
	UL_FORMULARIO_ORIGEN = getFormulario();	
		
	FCC_CONTROL_0= FCC_GET_ELEMENTO_BYID(ID_FCC_CONTROL_0);
	FCC_CONTROL_00= FCC_GET_ELEMENTO_BYID(ID_FCC_CONTROL_00);
	
// IDENTIFICACION DE MODO DEBUG
//---------------------------------------------------------------------------------------------------------	

	try{	
		if (FCC_DEBUG){
			console.log("# MODO: DEBUG");
			FCC_CONTROL_00.style.display = 'block';
		}else{ 
			console.log("# MODO: USER"); 
			FCC_CONTROL_00.style.display = 'none';
		}
	}catch(err){}		

// EVALUANDO ESTADO PARA DEFINIR COMPORTAMIENTO DEL FOMRULARIO
//---------------------------------------------------------------------------------------------------------	
		
	switch (UL_FORMULARIO_ORIGEN) {
				
		//FORMULARIO REGISTRO EMPRESA-------------------------------------------------------------------------		
		case "E": console.log("## ENTRADA: REGISTRO EMPRESA/CONTACTO");
				
				//OBTENIENDO VARIABLES DE CONTROL
				UL_RUC=FCC_GET_VALOR_ELEMENTO(ID_EMPRESA_RUC);
				UL_MARCA=FCC_GET_VALOR_ELEMENTO(ID_EMPRESA_MARCA);	
				UL_RAZON=FCC_GET_VALOR_ELEMENTO(ID_EMPRESA_RAZON);	
				UL_CONTROL_0=FCC_GET_NUMERO_ELEMENTO(ID_FCC_CONTROL_0);	
				TEMP_ERRORES_TAX= FCC_VALIDA_ERRORES(document.querySelector(".alert.error"),"TaxID"); 	
				
				UL_FORM_ESTADO = UL_CONTROL_0;	
				//LOG DE VARIBLES
				console.log("=> UL_RUC = "+UL_RUC);
				console.log("=> UL_MARCA = "+UL_MARCA);
				console.log("=> UL_RAZON = "+UL_RAZON);
				console.log("=> UL_CONTROL_0 = "+UL_CONTROL_0);
				console.log("=> ESTADO > "+UL_FORM_ESTADO);
						
				//VALIDANDO CASOS	
				if (UL_FORM_ESTADO == 0){	
					
					console.log("### FORMULARIO: CARGA INICIAL");
					UL_FORM_ESTADO = 2;
						
				}else if(UL_RUC=="" && UL_MARCA==""){ 
					
					//CASO	: CLIC BOTON REGRESAR 20100132592
					console.log("=> UL_RUC & UL_MARCA = null =>" + UL_FORM_ESTADO);
					
					
				}else if(UL_RUC!=""&& UL_MARCA==""){ 

					//CASO	: CREACION DE EMPRESA
					console.log("### SOLICITUD DE VALIDACION DE RAZON SOCIAL");
									
					if (TEMP_ERRORES_TAX){
						console.log("=> ERROR: EL RUC YA SE ENCUETRA REGISTRADO");
						UL_FORM_ESTADO = 6;
					}else{
						console.log("=> CORRECTO: EL RUC NO SE ENCUETRA REGISTRADO");
						UL_FORM_ESTADO = 5; 
					}
						
				}else if(UL_RUC!="" && UL_MARCA!=""){ 
					
					//CASO	: CREACION DE CONTACTO
					console.log("### EMPRESA EXISTE");
						
					TEMP_RUC_CONTROL= UL_MARCA.search(UL_RUC);
						
					//CASO	: EMPRESA YA EXISTE	
					if (TEMP_ERRORES_TAX){
						console.log("=> ERROR: LA EMPRESA QUE INTENTA MODIFICAR YA SE ENCUENTRA REGISTRADA");
						UL_FORM_ESTADO = 6;
						
					}else if(UL_CONTROL_0== "5" && TEMP_RUC_CONTROL>=0){
						console.log("=> ERROR: SOLICITUD DE CREACION DE UNA EMPRESA YA REGISTRADA");
						UL_FORM_ESTADO = 6;
							
					}else {
						console.log("=> CORRECTO: CONTINUAR CON EL REGISTRO");
					
						try{
							tt = document.getElementsByClassName("alert error");
							tt[0].style.display = 'block';
							console.log("=> MOSTRANDO ERRORES");
							console.log(UL_ERRORES);
						}catch(err){}
								
						if(UL_RAZON==""){UL_FORM_ESTADO = 7;}
						
					}
				}	
					
			break;
					
		//FORMULARIO MANAGER -------------------------------------------------------------------------------
		case "M": console.log("## ENTRADA: MANAGER");
				
				UL_FORM_ESTADO =1;
				
				//OCUALTANDO WIDGET DIRECCION NATIVO
				var WIDGET_DIRECCION = FCC_GET_ELEMENTO_BYID("emp_reg_form_fieldgroup_FCC_WIDGET_DIRECCION");
				
				try{WIDGET_DIRECCION.style.display = "none";}catch(err){}
				try{UL_CONTACTO_DIR_COMPLETA.readOnly=true;}catch(err){}
				
				UL_COMPONE_RAZON_SOCIAL();

				break;		

		//FORMULARIO INVALIDO-------------------------------------------------------------------------			
		case "X": console.log("## ENTRADA: INVALIDA");
				UL_FORM_ESTADO =99;
				break;
	}

//HABILITANDO COMPORTAMIENTO DEL FORMULARIO-----------------------------------------------------------------------------------

	UL_HABILITA_GENERAL(UL_FORM_ESTADO);

// ACCIONES SI JS ESTA DESHABILITADO
//---------------------------------------------------------------------------------------------------------
	
}else{
	console.log("JS DESHABILITADO");	
}


}

/*##############################################################################################################################*/

// FUNCION		:	UL_HABILITA_GENERAL
// DETALLE		:	Establece un estado en la variable de control "UL_SEC_CONTROL_0"  para que se validen las 
//					dependencias registradas en el formulario de la aplicación
				
//					Se cuenta con una variable de "ajustePickList" ya que los picklist en la aplicación no 
//					trabajan por descripción sino por un código de indice.

/*##############################################################################################################################*/
			
function UL_HABILITA_GENERAL(CODIGO_FUNCION){ 

// INICIALIZANDO VARIABLES
//---------------------------------------------------------------------------------------------------------	
	var VALOR_FUNCION=CODIGO_FUNCION + FCC_AJUSTE_PICKLIST;
		
// ACTUALIZANDO EL ESTADO DEL CAMPO DE CONTROL
//---------------------------------------------------------------------------------------------------------	

	console.log("=> ESTADO > " + CODIGO_FUNCION);
	//Simular click en el control
	
	document.getElementById('dnf_class_values_employer_registration__UL_CONTROL_0_').value=VALOR_FUNCION; 
	document.getElementById('dnf_class_values_employer_registration__UL_CONTROL_0_').onchange();
	
	
// ACTUALIZANDO ACCIONES ADICIONALES
//---------------------------------------------------------------------------------------------------------	
	UL_CHANGE_CONTROL();

}
	
/*###################################################################################################################*/

// FUNCION		:	UL_CHANGE_CONTROL
// DETALLE		:	Establece el comportamiento particular de cada estado del "UL_SEC_CONTROL_0"

/*###################################################################################################################*/

function UL_CHANGE_CONTROL(){
		
	// INICIALIZANDO VARIABLES
	//---------------------------------------------------------------------------------------------------------	

	var CODIGO_FUNCION = FCC_GET_NUMERO_ELEMENTO(ID_FCC_CONTROL_0);
	
	var UL_RUC = document.getElementById(ID_EMPRESA_RUC);
	var UL_RAZON = document.getElementById(ID_EMPRESA_RAZON);
	var UL_MARCA = document.getElementById(ID_EMPRESA_MARCA);
	
	var TEMP_EMPRESAS_DPTO= document.getElementById(ID_EMPRESA_SECC_DIR_DEPARTAMENTO);
	var TEMP_CONTACTO_DPTO= document.getElementById(ID_CONTACTO_SECC_DIR_DEPARTAMENTO);
	
	var TEMP_SECCION_TL_TB_001= document.getElementById(ID_SECC_TB_001);
	var TEMP_WIDGET_TB_001= FCC_GET_ELEMENTO_BYID(ID_WIDGET_TB_001);
	
	var TEMP_ERRORES="";
	try{TEMP_ERRORES = document.getElementsByClassName(CLASS_ERRORES)[0];}catch(err){}
	
	// MENSAJE DE CONTROL
	//---------------------------------------------------------------------------------------------------------	
		
	console.log("==> EJECUTANDO FUNCIONES ADICIONALES DE ESTADO > "+ CODIGO_FUNCION);	
	
	// EJECUCION DEL PROCESO
	//---------------------------------------------------------------------------------------------------------		
		
	try{
		UL_RUC.readOnly = false;
		UL_RAZON.readOnly = false;
	}catch(err){}
	
	try{
		TEMP_EMPRESAS_DPTO.style.display = "none";
		TEMP_CONTACTO_DPTO.style.display = "none";
	}catch(err){}
	
	
	// ANALIZA EL VALOR DEL TB_001 
		
	
	if (REG_UL_TB_001.value=="N"){
		UL_TB_001.checked=false;
	}else{
		UL_TB_001.checked=true;
	}
	
	
	TEMP_WIDGET_TB_001.style.display = "none";

	
	// AJUSTES ADICIONALES SEGUN EL ESTADO ENVIADO 
	
	switch(CODIGO_FUNCION) {
			case 0: //VISTA MANAGER PASO 3
					try{					
						TEMP_EMPRESAS_DPTO.style.display = "";
						TEMP_CONTACTO_DPTO.style.display = "";
					}catch(err){}
					
					UL_COPIA_DIRECCION();
					UL_CARGA_NOTIFICACION();
					
					break;
					
			case 1:	//VISTA MANAGER PASO 1
					try{					
						TEMP_EMPRESAS_DPTO.style.display = "";
						TEMP_CONTACTO_DPTO.style.display = "";
					}catch(err){}
					
					UL_COPIA_DIRECCION();		
					
					break;
			
			case 2:	//PAGINA INICIAL DE REGISTRO
					try{TEMP_ERRORES.style.display = 'none';}catch(err){}
					
					break;
					
			case 3:	//CREACION DE NUEVA EMPRESA - VALIDACION DE RUC
					try{TEMP_ERRORES.style.display = 'none';}catch(err){}
					
					UL_RUC.value="";
					UL_RAZON.value="";
					UL_MARCA.value="";
					
					break;

			case 4:	//CREACION DE NUEVO CONTACTO - VALIDACION DE MARCA COMERCIAL
					try{TEMP_ERRORES.style.display = 'none';}catch(err){}
					
					UL_RUC.value="";
					UL_RAZON.value="";
					UL_MARCA.value="";
					
					break;
					
			case 5:	//REGISTRO DE NUEVA EMPRESA + CONTACTO 
					UL_COPIA_DIRECCION();
					
					UL_RUC.readOnly = true ;

					break;
					
			case 6:	//ERROR: CREACION/MODIFICACION DE UNA EMPRESA QUE YA EXISTE
					
					break;
			
			
			case 7:	//REGISTRO DE NUEVO CONTACTO
					
					try{TEMP_SECCION_TL_TB_001.style.display = "none";}catch(err){}
					REG_UL_TB_001.value="N";
					
					UL_RUC.readOnly = true;
					UL_RAZON.readOnly = true;

					break;
					
			default:break;
		}

}	

/*############################################################################################################################

FUNCION		: 	UL_BTN_VALIDA_RUC_CLIC
DETALLE		: 	Se simula el envío del formulario con el botón "dnf_opt_submit"
				Se espera que actúe el validador nativo del sistema y si el RUC existe genere un error de RUC repetido (tax_id)

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

FUNCION		:	UL_COMPONE DIRECCION
DETALLE		:	Estructura el copiado de campos de dirección en el widget de dirección para que sea visible en:
				MAIN TAB / STEP 1

##############################################################################################################################*/

function UL_COMPONE_DIRECCION1(){
	UL_COPIA_DIRECCION();
}	

/*############################################################################################################################

FUNCION		:	UL_COPIA_DIRECCION
DETALLE		:	Estructura el copiado de campos de dirección de empresa en contacto cuando se indique que es la misma

##############################################################################################################################*/

function UL_COPIA_DIRECCION(){

//Declaración de variables

	//variables temporales
	var TEMP_PAIS;
	var TEMP_DEPARTAMENTO;
	var TEMP_CALLE;

	//variables de las secciones de los campos de dirección del contacto
	
	var SECC_CONTACTO_DIR1;
	var SECC_CONTACTO_DIR2;
	var SECC_CONTACTO_DIR3;
	var SECC_CONTACTO_DIR4;

	//variables del formulario	
	var	FCC_WIDGET_VAR2;
	
//Inicialización de variables

 FCC_WIDGET_VAR2= FCC_GET_ELEMENTO_BYID("dnf_class_values_employer_registration__street_");

 SECC_CONTACTO_DIR1 =document.getElementById("so_formfield_dnf_class_values_employer_registration__especifique_el_pas_");
 SECC_CONTACTO_DIR2 =document.getElementById("so_formfield_dnf_class_values_employer_registration__departamentoprovinciadistrito2_");
 SECC_CONTACTO_DIR3 =document.getElementById("so_formfield_dnf_class_values_employer_registration__ciudad_contacto_");
 SECC_CONTACTO_DIR4 =document.getElementById("so_formfield_dnf_class_values_employer_registration__direccion_del_contacto_");

 

 
//Definición del proceso
 
	if (UL_TB_001.checked==true) {
			
	console.log("=> COPIA DIRECCION TRUE : COPIA DIRECCION DE LA EMPRESA");	
	
		REG_UL_TB_001.value="Y";
	
		//Oculta campos dirección del contacto
		SECC_CONTACTO_DIR1.style.display = "none";
		SECC_CONTACTO_DIR2.style.display = "none";
		SECC_CONTACTO_DIR3.style.display = "none";
		SECC_CONTACTO_DIR4.style.display = "none";
		
		//Mensaje de copia de direccion
		try{ document.getElementById("so_formfield_dnf_class_values_employer_registration__misma_direccion_contacto_empre_").style.display = '';
		}catch(err){}
	
		//Composición de variables temporales de dirección
		TEMP_PAIS = UL_EMPRESA_DIR_PAIS.options[UL_EMPRESA_DIR_PAIS.selectedIndex].innerHTML + " / ";
		
		try{
			if(UL_EMPRESA_DIR_DEPARTAMENTO.innerHTML!=""){
				TEMP_DEPARTAMENTO=UL_EMPRESA_DIR_DEPARTAMENTO.innerHTML + " / ";
			}else{
				TEMP_DEPARTAMENTO=UL_EMPRESA_DIR_CIUDAD.value + " / ";
			}
		}catch(err){}
		
		TEMP_CALLE=UL_EMPRESA_DIR_CALLE.value;
			

    } else if (UL_TB_001.checked==false) {
	
	console.log("=> COPIA DIRECCION FALSE : INGRESO DIRECCION DE CONTACTO");			

		REG_UL_TB_001.value="N";
		
		//Muestra campos dirección del contacto
		SECC_CONTACTO_DIR1.style.display = "";
		SECC_CONTACTO_DIR4.style.display = "";
		
		//Mensaje de copia de direccion
		try{ document.getElementById("so_formfield_dnf_class_values_employer_registration__misma_direccion_contacto_empre_").style.display = 'none';
		}catch(err){}
		
		//Composición de variables temporales de dirección		
		TEMP_PAIS = UL_CONTACTO_DIR_PAIS.options[UL_CONTACTO_DIR_PAIS.selectedIndex].innerHTML + " / ";

		try{
			if(UL_CONTACTO_DIR_DEPARTAMENTO.innerHTML!=""){
				TEMP_DEPARTAMENTO=UL_CONTACTO_DIR_DEPARTAMENTO.innerHTML + " / ";
			}else{
				TEMP_DEPARTAMENTO=UL_CONTACTO_DIR_CIUDAD.value + " / ";
			}
		}catch(err){}
		
		TEMP_CALLE=UL_CONTACTO_DIR_CALLE.value;
			
		//Comportamiento por Pais
		console.log("pasi =>" + TEMP_PAIS);
		if(TEMP_PAIS==" / ") {
			SECC_CONTACTO_DIR2.style.display = "none";
			SECC_CONTACTO_DIR3.style.display = "none";
		}else if(TEMP_PAIS=="PERU - 208 / ") {
			SECC_CONTACTO_DIR2.style.display = "";
			SECC_CONTACTO_DIR3.style.display = "none";
		}else{
			SECC_CONTACTO_DIR2.style.display = "none";
			SECC_CONTACTO_DIR3.style.display = "";
		}

    }
	
	//Componiendo la direccion completa

	UL_CONTACTO_DIR_COMPLETA.value = TEMP_PAIS+TEMP_DEPARTAMENTO+TEMP_CALLE;	
	FCC_WIDGET_VAR2.value = TEMP_PAIS+TEMP_DEPARTAMENTO+TEMP_CALLE;	

}


/*############################################################################################################################

FUNCION		:	UL_COMPONE RAZON SOCIAL
DETALLE		:	Estructura el copiado de campos de Razón social en el widget de dirección para que sea visible en:
				MAIN TAB / STEP 1

##############################################################################################################################*/


function UL_COMPONE_RAZON_SOCIAL(){
	try{
		var FCC_WIDGET_VAR3= FCC_GET_ELEMENTO_BYID("dnf_class_values_employer_registration__zip_");
		var FCC_RAZON_SOCIAL = FCC_GET_ELEMENTO_BYID("dnf_class_values_employer_registration__razon_social2_");
		
		FCC_WIDGET_VAR3.value = FCC_RAZON_SOCIAL.value;	
	}catch(err){}
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


//FUNCIONES DE APOYO

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
			FCC_VALOR= document.getElementById(FCC_ID);
		}catch(err) {
			FCC_VALOR= "FCC";
		}
		
return FCC_VALOR;
}


function FCC_GET_VALOR_ELEMENTO(FCC_ID){

var FCC_VALOR="";

		try {
			FCC_VALOR= document.getElementById(FCC_ID).value;
		}catch(err) {
			FCC_VALOR= "";
		}
		
return FCC_VALOR;
}


function FCC_GET_NUMERO_ELEMENTO(FCC_ID){

var FCC_VALOR=99;

		try {
			FCC_VALOR=  parseInt(document.getElementById(FCC_ID).value)-FCC_AJUSTE_PICKLIST;
		}catch(err) {
			FCC_VALOR=  0;
		}
		
		if (isNaN(FCC_VALOR)){
			FCC_VALOR=  0;
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

FUNCIONES	:	GESTION DE MODALES
DETALLE		:	Funciones para gestionar los eventos de las ventanas modales 

#####################################################################################################################*/		
	
	
	var modal;
    
	function MODAL_OPEN(ID_MODAL){				
		modal = document.getElementById(ID_MODAL); 
        modal.style.display = "block";
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






	