
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

const FCC_CONTACTOS_VERSION = "2.01";
const FCC_CONTACTOS_VERSION_FECHA= "27/08/18";

console.log("# CONTROL FCC_CONTACTOS V: "+ FCC_CONTACTOS_VERSION + " al: "+ FCC_CONTACTOS_VERSION_FECHA);

/*############################################################################################################################

DECLARACION DE CONSTANTES

##############################################################################################################################*/

const FCC_HABILITA_JS = true;

/*############################################################################################################################*/

// DECLARACION DE NOMBRE O ID ELEMENTOS DE FORMULARIO 

/*##############################################################################################################################*/

const ID_WIDGET_TB_001= "so_formfield_dnf_class_values_contact__REG_UL_TB_001_";

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

//ELEMENTOS DE PERMISOS
//------------------------------------------------------------------------------------------------------------------

const NAME_BOTON_LISTA = "formaction";

const NAME_CHECK_MUESTRA_ALUMNOS="dnf_class_values[contact][FCC_MUESTRA_ALUMNOS]";

const ID_BOTON_AGREGAR = "FCC_ADD";
const ID_BOTON_QUITAR = "FCC_DEL";

const ID_FCC_CONTACTOS = "dnf_class_values_contact__FCC_CONTACTOS_";

const ID_WIDGET_OCULTAR_INFORMACION = "so_formfield_dnf_class_values_contact__hide_info_";

//ELEMENTOS DE NAVEGACION
//------------------------------------------------------------------------------------------------------------------

const CLASS_BARRA_SUPERIOR ="buttonbar buttonbar-top";

/*############################################################################################################################

DECLARACION DE VARIABLES

##############################################################################################################################*/


var UL_WIDGET_TB_001= FCC_GET_ELEMENTO_BYID(ID_WIDGET_TB_001);
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

var UL_BOTON_LISTA_TOP = document.getElementsByClassName("input-submit btn btn_primary btn_add")[0];
var UL_BOTON_LISTA_BUTTON = document.getElementsByClassName("input-submit btn btn_primary btn_add")[1];

var UL_BOTON_AGREGAR = FCC_GET_ELEMENTO_BYID(ID_BOTON_AGREGAR);
var UL_BOTON_QUITAR = FCC_GET_ELEMENTO_BYID(ID_BOTON_QUITAR);


var UL_FCC_CONTACTOS = FCC_GET_ELEMENTO_BYID(ID_FCC_CONTACTOS);

var UL_CHECK_MUESTRA_ALUMNOS_SI = document.getElementsByName("dnf_class_values[contact][FCC_MUESTRA_ALUMNOS]")[0];
var UL_CHECK_MUESTRA_ALUMNOS_NO = document.getElementsByName("dnf_class_values[contact][FCC_MUESTRA_ALUMNOS]")[1];

var UL_BARRA_SUPERIOR = document.getElementsByClassName(CLASS_BARRA_SUPERIOR)[0];


var UL_WIDGET_OCULTAR_INFORMACION = FCC_GET_ELEMENTO_BYID(ID_WIDGET_OCULTAR_INFORMACION);;



/*############################################################################################################################

LISTENERS UL_BOTON_LISTA

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

//MOSTRAR INFO A LOS ALUMNOS
try{
	UL_CHECK_MUESTRA_ALUMNOS_NO.addEventListener("click", UL_MUESTRA_ALUMNOS);
	UL_CHECK_MUESTRA_ALUMNOS_SI.addEventListener("click", UL_MUESTRA_ALUMNOS);
}catch(err){}

//AGREGA A LISTA
try{
	
	UL_FCC_CONTACTOS.addEventListener("click", UL_ACTUALIZA_BOTONES);
	//UL_BOTON_LISTA_TOP.addEventListener("mouseover", FCC_PUBLICAR_LISTA);
	//UL_BOTON_LISTA_BUTTON.addEventListener("mouseover", FCC_PUBLICAR_LISTA);
}catch(err){}

try{
//	UL_BOTON_AGREGAR.addEventListener("click", UL_VISIBLE_CONTACTOS());
//	UL_BOTON_QUITAR.addEventListener("click", UL_VISIBLE_CONTACTOS());
}catch(err){}

/*############################################################################################################################*/

// FUNCION		:	ONLOAD
// DETALLE		:	Función principal que analiza el detalle de los formularios y acciones.
//     				Se ejecuta una vez acasarados todos los componentes de la pagina

/*##############################################################################################################################*/

window.onload=function() {

// VALIDACION DE EJECUCION DE JS
//---------------------------------------------------------------------------------------------------------
	
	if (FCC_HABILITA_JS){	
		
		UL_WIDGET_TB_001.style.display = 'none';
		UL_WIDGET_OCULTAR_INFORMACION.style.display = 'none';
		UL_FCC_CONTACTOS.readOnly = true;
		
		if (UL_FCC_CONTACTOS.value=="" ){UL_FCC_CONTACTOS.value="No";}
		
		
		UL_COMPONE_DIRECCION1();
		
		//ACTUALIZA ESTADO DEL BOTON NATIVO DE OCULTAR INFORMACION
		UL_MUESTRA_ALUMNOS();
		
		UL_ACTUALIZA_BOTONES();
		
	}
	
}





/*###################################################################################################################

FUNCIONES	:	un si quees no

#####################################################################################################################*/	


function UL_VISIBLE_CONTACTOS(PERMISO){
	
	
	var xxx = document.getElementById("FCC_ACCION");
	
	if (PERMISO){
		UL_FCC_CONTACTOS.value="Si";
		xxx.value="Agregar a Vista de estudiante";
		
	}else {
		UL_FCC_CONTACTOS.value="No";
		xxx.value="Quitar de la Vista de estudiante";
	}
	
	
	UL_ACTUALIZA_BOTONES();
	console.log("accion " + xxx.value);
	
	
	xxx.click();
}


function UL_ACTUALIZA_BOTONES(){
	
	console.log("UL_FCC_CONTACTOS: " +UL_FCC_CONTACTOS.value );
	
	if (UL_FCC_CONTACTOS.value=="No"){
		FCC_GET_ELEMENTO_BYID("FCC_DEL").style.display="none";
		FCC_GET_ELEMENTO_BYID("FCC_ADD").style.display="block";
		}
	else if (UL_FCC_CONTACTOS.value=="Si"){
		FCC_GET_ELEMENTO_BYID("FCC_DEL").style.display="block";
		FCC_GET_ELEMENTO_BYID("FCC_ADD").style.display="none";
		}
	else {
		FCC_GET_ELEMENTO_BYID("FCC_DEL").style.display="none";
		FCC_GET_ELEMENTO_BYID("FCC_ADD").style.display="none";
	}
}




function UL_MUESTRA_ALUMNOS(){
	document.getElementsByName("dnf_class_values[contact][hide_info]")[0].checked=UL_CHECK_MUESTRA_ALUMNOS_NO.checked;
	document.getElementsByName("dnf_class_values[contact][hide_info]")[1].checked=UL_CHECK_MUESTRA_ALUMNOS_SI.checked;
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






	