
//#############################################################################################################################
//#
//#	MODELO PARA MODIFICAR INTERFACE DE REGISTRO DE EMPRESA Y CONTACTO ( EXTENCION VISTA MANAGER)
//# AMBITO: EMPRESA Y CONTACTO
//#
//# FORMULARIO		: Employeer_registration
//# CAMPO			: UL_TIT_08_POL_SEGURIDAD
//# DESARROLLADO	: FERNANDO CALDERON 
//# VERSION			: 1.0
//# FECHA			: 06.06.18
//#
//# NAME			: FCC_EMPRESAS_EXT.JS
//#
//# INVOCACION LOCALHOST
//#	=> <script type="text/javascript"src="http://localhost/usb/FCC_EMPRESAS_EXT.js"></script>
//#
//# INVOCACION BIBLIOTECA
//# => <script src="https://ulima-cde.symplicity.com/utils/view.php?id=09820fd1aadb5d944a947d3a14b63c05"></script>
//#  
//#############################################################################################################################

/*  COPIAR PRUEBAS LOCALHOST	

<div class="estilo-menu">DECLARACIÓN DE POLÍTICA</div> 
<script type="text/javascript"src="http://localhost/usb/FCC_EMPRESAS_EXT.js"></script>
<link rel="stylesheet" type="text/css" href="http://localhost/usb/FCC_EMPRESAS.css">	

*/

/*  COPIAR PRODUCCION
	
<div class="estilo-menu">DECLARACIÓN DE POLÍTICA</div> 
<link rel="stylesheet" type="text/css" href="https://rawcdn.githack.com/ferac171/test/master/FCC_EMPRESAS.CSS">


*/

/*############################################################################################################################

DECLARACION DE CONSTANTES

##############################################################################################################################*/

const FCC_VERSION_FCC_EMPRESAS_EXT = 1;

/*############################################################################################################################

OCULATA CAMPOS MANAGER

##############################################################################################################################*/

console.log("VERSION DE CONTROL EMPRESAS EXT: "+FCC_VERSION_FCC_EMPRESAS_EXT);

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

