
//#####################################################################################################################
//#
//#	MODELO PARA GESTIONAR LA CREACION DE CONTACTOS DESDE EL PASO 03 DEL MANAGER
//#
//# DESARROLLADO	: FERNANDO CALDERON 
//#
//# FORMULARIO		: 
//# CAMPO			: 
//#
//#################################################################################################################


/*############################################################################################################################

CONSTANTES DE VERSION

##############################################################################################################################*/

const FCC_CONTACTOS_VERSION = "1.3";
const FCC_CONTACTOS_VERSION_FECHA= "20/08/18";

console.log("# CONTROL FCC_CONTACTOS V: "+ FCC_CONTACTOS_VERSION + " al: "+ FCC_CONTACTOS_VERSION_FECHA);

/*############################################################################################################################

DECLARACION DE CONSTANTES

##############################################################################################################################*/

const FCC_HABILITA_JS = true;


/*############################################################################################################################*/

// DECLARACION DE NOMBRE O ID ELEMENTOS DE FORMULARIO 

/*##############################################################################################################################*/

//ELEMENTOS DE CONTACTO
//------------------------------------------------------------------------------------------------------------------

const ID_CONTACTO_NOMBRE ="dnf_class_values_contact__fname_";
const ID_CONTACTO_APELLIDO_1 = "dnf_class_values_contact__lname_";
const ID_CONTACTO_APELLIDO_2 = "dnf_class_values_contact__apellido_materno_";

const ID_CONTACTO_FIRMA_PROF = "dnf_class_values_contact__fullname_";


const ID_CONTACTO_DIR_PAIS = "dnf_class_values_contact__especifique_el_pas_";
const ID_CONTACTO_DIR_DEPARTAMENTO = "hp_input1";
const ID_CONTACTO_DIR_CIUDAD = "dnf_class_values_contact__ciudad_contacto_";
const ID_CONTACTO_DIR_CALLE = "dnf_class_values_contact__direccion_del_contacto_";

const ID_CONTACTO_DIR_COMPLETA = "dnf_class_values_contact__direccin_de_su_oficina_";


/*############################################################################################################################

DECLARACION DE VARIABLES

##############################################################################################################################*/

//ELEMENTOS DE CONTACTO

var UL_CONTACTO_NOMBRE =FCC_GET_ELEMENTO_BYID(ID_CONTACTO_NOMBRE);
var UL_CONTACTO_APELLIDO_1 = FCC_GET_ELEMENTO_BYID(ID_CONTACTO_APELLIDO_1);
var UL_CONTACTO_APELLIDO_2 = FCC_GET_ELEMENTO_BYID(ID_CONTACTO_APELLIDO_2);

var UL_CONTACTO_FIRMA_PROF = FCC_GET_ELEMENTO_BYID(ID_CONTACTO_FIRMA_PROF);

var UL_CONTACTO_DIR_PAIS = FCC_GET_ELEMENTO_BYID(ID_CONTACTO_DIR_PAIS);
var UL_CONTACTO_DIR_DEPARTAMENTO = FCC_GET_ELEMENTO_BYID(ID_CONTACTO_DIR_DEPARTAMENTO);
var UL_CONTACTO_DIR_CIUDAD = FCC_GET_ELEMENTO_BYID(ID_CONTACTO_DIR_CIUDAD);
var UL_CONTACTO_DIR_CALLE = FCC_GET_ELEMENTO_BYID(ID_CONTACTO_DIR_CALLE);

var UL_CONTACTO_DIR_COMPLETA = FCC_GET_ELEMENTO_BYID(ID_CONTACTO_DIR_COMPLETA);


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
	
				
			
		console.log("# COMPONIENDO DIRECCION");			
	
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
			
		//Componiendo la direccion completa
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






	