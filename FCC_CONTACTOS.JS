
//#############################################################################################################################
//#
//#	MODELO PARA GESTIONAR LA GESTION DE CONTACTOS
//#
//# DESARROLLADO	: FERNANDO CALDERON 
//#
//# FORMULARIO		: 
//# CAMPO			: 
//#
//# LOCALHOST
//# 
//#
//# INVOCACION GITHUB
//# 
//# 
//#	RAWGIT
//# 
//# 
//#
//#############################################################################################################################


/*############################################################################################################################

CONSTANTES DE VERSION

##############################################################################################################################*/

const FCC_VERSION = "1.1";
const FCC_VERSION_FECHA= "20/08/18";

console.log("# CONTROL FCC_CONTACTOS V: "+ FCC_VERSION);

/*############################################################################################################################

DECLARACION DE CONSTANTES

##############################################################################################################################*/


const FCC_HABILITA_JS = true;
const FCC_DEBUG = false;

/*############################################################################################################################

DECLARACION DE VARIABLES

##############################################################################################################################*/

//ELEMENTOS DE CONTACTO

var UL_CONTACTO_NOMBRE =document.getElementById("dnf_class_values_contact__fname_");
var UL_CONTACTO_APELLIDO_1 = document.getElementById("dnf_class_values_contact__lname_");
var UL_CONTACTO_APELLIDO_2 = document.getElementById("dnf_class_values_contact__apellido_materno_");

var UL_CONTACTO_FIRMA_PROF = document.getElementById("dnf_class_values_contact__fullname_");

var UL_CONTACTO_DIR_PAIS = document.getElementById("dnf_class_values_contact__especifique_el_pas_");
var UL_CONTACTO_DIR_DEPARTAMENTO = document.getElementById("hp_input1");
var UL_CONTACTO_DIR_CIUDAD = document.getElementById("dnf_class_values_contact__ciudad_contacto_");
var UL_CONTACTO_DIR_CALLE = document.getElementById("dnf_class_values_contact__direccion_del_contacto_");

var UL_CONTACTO_DIR_COMPLETA = document.getElementById("dnf_class_values_contact__direccin_de_su_oficina_");


/*############################################################################################################################

LISTENERS

##############################################################################################################################*/


UL_CONTACTO_DIR_COMPLETA.readOnly=true;


// COMPONE FIRMA
try{
	UL_CONTACTO_NOMBRE.addEventListener("change", UL_COMPONE_FIRMA);
	UL_CONTACTO_APELLIDO_1.addEventListener("change", UL_COMPONE_FIRMA);
	UL_CONTACTO_APELLIDO_2.addEventListener("change", UL_COMPONE_FIRMA);
}catch(err){}


//COMPONE DIRECCION
try{
	UL_CONTACTO_DIR_PAIS.addEventListener("change", UL_COMPONE_DIRECCION1);
	UL_CONTACTO_DIR_DEPARTAMENTO.addEventListener("change", UL_COMPONE_DIRECCION1);
	UL_CONTACTO_DIR_CIUDAD.addEventListener("change", UL_COMPONE_DIRECCION1);
	UL_CONTACTO_DIR_CALLE.addEventListener("change", UL_COMPONE_DIRECCION1);
}catch(err){}





/*############################################################################################################################

FUNCION		:	ONLOAD
DETALLE		:	Función principal que analiza el detalle de los formularios y acciones.
				Se ejecuta una vez acasarados todos los componentes de la pagina

##############################################################################################################################*/

window.onload=function() {

// VALIDACION DE EJECUCION DE JS
//---------------------------------------------------------------------------------------------------------
	
	if (FCC_HABILITA_JS){	
		
			
			UL_COMPONE_DIRECCION1();
	
		
// DECALRACION DE VARIABLES
//---------------------------------------------------------------------------------------------------------
		
	var UL_FCC_GEN1 ="";	
		

		
// INICIALIZANDO VARIABLES
//---------------------------------------------------------------------------------------------------------	
		

	
	
	}
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

var TEMP_PAIS;
var TEMP_DEPARTAMENTO;
var TEMP_CALLE;
	
				
		
		
		TEMP_PAIS = UL_CONTACTO_DIR_PAIS.options[UL_CONTACTO_DIR_PAIS.selectedIndex].innerHTML + " / ";
		TEMP_CALLE=UL_CONTACTO_DIR_CALLE.value;

		try{
			if(UL_CONTACTO_DIR_DEPARTAMENTO.innerHTML!=""){
				TEMP_DEPARTAMENTO=UL_CONTACTO_DIR_DEPARTAMENTO.innerHTML + " / ";
			}else{
				TEMP_DEPARTAMENTO=UL_CONTACTO_DIR_CALLE.value + " / ";
			}
		}catch(err){}


	
	UL_CONTACTO_DIR_COMPLETA.value = TEMP_PAIS+TEMP_DEPARTAMENTO+TEMP_CALLE;	

}



/*###################################################################################################################

FUNCIONES	:	UL_COMPONE_FIRMA
DETALLE		:	Método que arma la firma profesional del contacto en base a la composición de sus nombres y apellidos

#####################################################################################################################*/
	
function UL_COMPONE_FIRMA(){
	
	UL_CONTACTO_FIRMA_PROF.value	= UL_CONTACTO_NOMBRE.value + " " + UL_CONTACTO_APELLIDO_1.value + " " + UL_CONTACTO_APELLIDO_2.value;
	
}	




/*###################################################################################################################

FIN

#####################################################################################################################*/






	