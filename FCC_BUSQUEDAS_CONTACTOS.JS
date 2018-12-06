


/*##############################################################################################################################*/

// MODELO PARA MODIFICAR INTERFACE DE:
// REGISTRO DE PUBLICACIONES DE EMPLEO - VISTA CONTACTO
//
// NAME		: FCC_PUBLICACIONES_CONTACTO.JS
	
	const FCC_BUSQEUDA_PUBLICACIONES_VERSION_LOCAL = "1.1";
	const FCC_BUSQEUDA_PUBLICACIONES_FECHA_LOCAL= "08/11/18";

/*############################################################################################################################*/

/*############################################################################################################################*/
//CONSTANTES DE VERSION
/*############################################################################################################################*/

console.log("# CONTROL FCC_PUBLICACIONES_CONTACTO V:"+FCC_BUSQEUDA_PUBLICACIONES_VERSION_LOCAL + " al "+FCC_BUSQEUDA_PUBLICACIONES_FECHA_LOCAL);

/*############################################################################################################################*/
//DECLARACION DE CONSTANTES
/*############################################################################################################################*/

const FCC_BLOCK = "block";
const FCC_NONE = "none";
const FCC_VIEW = "";


/*############################################################################################################################*/
// DECLARACION GENERAL DE VARIABLES DE ELEMENTOS
/*##############################################################################################################################*/


//VARIABLES GENERALES DE FORMULARIO
//------------------------------------------------------------------------------------------------------------------

var UL_SECCION_LIMITAR_SOL = document.getElementById("so_formfield_dnf_class_values_job__screen_flag_");

//VARIABLES DE CONTROL DE CARGO A PUBLICAR
//------------------------------------------------------------------------------------------------------------------

var UL_LISTA_AREA = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__rea2_"); 
var UL_TXT_AREA = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__especifique_el_rea_"); 
var UL_LISTA_CARGO = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__cargo_"); 
var UL_TXT_CARGO = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__especifique_el_cargo_"); 
var UL_TXT_POSICION = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_title_"); 


//VARIABLES DE CONTROL DE IDIOMAS
//------------------------------------------------------------------------------------------------------------------

var UL_CBX_001 = FCC_GET_ELEMENTO_BYID("UL_CBX_001");
var UL_TXT_006 = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__UL_TXT_061_"); 
var UL_TXT_OTRO_IDIOMA = FCC_GET_ELEMENTO_BYID("UL_TXT_OTRO_IDIOMA"); 

var UL_SECCION_TXT_006 = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__UL_TXT_061_"); 
var UL_SECCION_SLC_006 = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__UL_PROP_061_"); 

//VARIABLES DE CONTROL DE FECHAS DE POSTULACION
//------------------------------------------------------------------------------------------------------------------




var UL_BTN_PUBLICAR = FCC_GET_ELEMENTO_BYID("jscal_button_0");
var UL_BTN_BORRAR = FCC_GET_ELEMENTO_BYID("jscal_clearbutton_0"); 

var UL_BTN_PUBLICAR1 = FCC_GET_ELEMENTO_BYID("jscal_button_1"); 
var UL_BTN_BORRAR1 = FCC_GET_ELEMENTO_BYID("jscal_clearbutton_1"); 
	








FCC_AGREGA_BOTONES();



/*############################################################################################################################*/

//FUNCION		:	ONLOAD
//DETALLE		:	Función principal que analiza el detalle de los formularios y acciones.
//					Se ejecuta una vez acasarados todos los componentes de la pagina

/*############################################################################################################################*/


window.onload=function() {
	
	try{
		var UL_GPA = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__screen_gpa_"); 
		UL_GPA.value="100";
		
		var UL_SECCION_GPA = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__screen_gpa_"); 
		
		UL_SECCION_GPA.style.display="none";
	}catch(err){}
	
	
	
 UL_LISTA_AREA = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__rea2_"); 
 UL_TXT_AREA = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__especifique_el_rea_"); 
 UL_LISTA_CARGO = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__cargo_"); 
 UL_TXT_CARGO = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__especifique_el_cargo_"); 
 UL_TXT_POSICION = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_title_"); 
	
	
	
/*############################################################################################################################*/
// LISTENERS
/*##############################################################################################################################*/


try{UL_CBX_001.addEventListener("change", UL_HABILITA_IDIOMA);}catch(err){}

// POSICION A PUBLICAR

try{UL_LISTA_AREA.addEventListener("change", UL_CALCULA_POSICION);}catch(err){}
try{UL_LISTA_CARGO.addEventListener("change", UL_CALCULA_POSICION);}catch(err){}

try{UL_TXT_AREA.addEventListener("change",  function(){UL_TXT_AREA.value = UL_TXT_AREA.value.toUpperCase();  UL_CALCULA_POSICION(); }  );}catch(err){}

try{UL_TXT_CARGO.addEventListener("change", function(){UL_TXT_CARGO.value = UL_TXT_CARGO.value.toUpperCase();  UL_CALCULA_POSICION();} );}catch(err){}

try{UL_TXT_POSICION.addEventListener("change", function(){UL_TXT_POSICION.value = UL_TXT_POSICION.value.toUpperCase();});}catch(err){}







	
UL_SECCION_LIMITAR_SOL.style.display=FCC_NONE;

var UL_SECCION_FECHA_FINALIZACION = FCC_GET_ELEMENTO_BYID("so_formfield_dnf_class_values_job__job_end_"); 
UL_SECCION_FECHA_FINALIZACION.style.display="none";

	
try{var UL_MSJ_USUARIO = FCC_GET_ELEMENTO_BYID("all_user_hints");
UL_MSJ_USUARIO.style.display="none";
}catch(err){}	
	
	
 UL_LISTA_AREA = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__rea2_"); 
 UL_TXT_AREA = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__especifique_el_rea_"); 
 UL_LISTA_CARGO = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__cargo_"); 
 UL_TXT_CARGO = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__especifique_el_cargo_"); 
 UL_TXT_POSICION = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_title_"); 
	
	
	
	
	try{UL_TXT_OTRO_IDIOMA.style.display=FCC_NONE;}catch(err){}
	try{UL_SECCION_TXT_006.style.display=FCC_NONE;}catch(err){}
	
	
	//CARTACRERISTIAS DE LA FECHA DE PUBLICACIONES
		
	 UL_BTN_PUBLICAR = FCC_GET_ELEMENTO_BYID("jscal_button_0");
	 UL_BTN_BORRAR = FCC_GET_ELEMENTO_BYID("jscal_clearbutton_0"); 
	 UL_BTN_PUBLICAR1 = FCC_GET_ELEMENTO_BYID("jscal_button_1"); 
	 UL_BTN_BORRAR1 = FCC_GET_ELEMENTO_BYID("jscal_clearbutton_1"); 
	
		UL_BTN_PUBLICAR.style.display=FCC_NONE;
		UL_BTN_BORRAR.style.display=FCC_NONE;
		UL_BTN_PUBLICAR1.style.display=FCC_NONE;
		UL_BTN_BORRAR1.style.display=FCC_NONE;
		
		
		FCC_INICIA_AFECHA();

	
}




function GUARDAYCARGA(){
	
var xxx = document.getElementsByName("dnf_opt_submit")[0];

var validacion = false;

//CARGO
var T1 = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__cargo_").value; 
//CARRERA
var T2 = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__bus_carrera___").value;
//AREA
var T3 = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__rea2_").value;
//REMUNERACION
var T4 = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__remuneracion_mensual_").value;
//POSICION
var T5 = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_title_").value;
//DIVISA
var T6 = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__divisa_").value;
//NIVEL
var T7 = "FCC";//FCC_GET_ELEMENTO_BYID("dnf_class_values_job__bus_condicion_academica___").value;
//MAESTRIA
var T7 = "FCC";//FCC_GET_ELEMENTO_BYID("dnf_class_values_job__bus_maestria___").value;


if (T1!="" && T2!="" && T3!="" && T4!="" && T5!="" && T6!="" && T7!=""){
	
	validacion = true;
}

console.log("validación : " + validacion);



if (validacion){
	//alert("validacion completa")
	console.log("ejecutando guarda y carga");
	xxx.onclick();
	window.open("index.php?mode=display&id=dfadf836bd26f9e1c2497337f91aa503&s=rezbook&ss=book", "_blank").focus();
} else{
	alert("Debe completar todos los campos obligatorios antes de continuar")
}





}

function CANCEL(){
	
location.href ="https://ulima-cde.symplicity.com/employers/index.php?mode=list&";


}



//FUNCIONES

function FCC_AGREGA_BOTONES(){

	// DECALRACION DE VARIABLES*/
	
	var UL_BARRA_MENU = FCC_GET_ELEMENTO_BYCLASSNAME("buttonbar buttonbar-top")[0];
	var UL_BARRA_MENU_INFERIOR = FCC_GET_ELEMENTO_BYCLASSNAME("buttonbar buttonbar-bottom")[0];
	
	UL_BARRA_MENU.style.display=FCC_NONE;
	UL_BARRA_MENU_INFERIOR.style.display=FCC_NONE;
	
	var FCC_DOM= document.getElementById("job_form_fieldgroup__default");
	var FCC_ADD_DOM="";
	var FCC_TEMP_DOM="";

	
	// EJECUCION DEL PROCESO*/
	FCC_ADD_DOM += "<div> <input type='submit' id='UL_BTN_CV_BOOK' onclick='GUARDAYCARGA()' class='input-submit btn btn_generic' style='text-transform: initial;' value='Guardar y empezar búsqueda' /> <input value=' Cancelar' type='button' onclick='CANCEL()'  class='input-button btn btn_generic'></div></br>";		
	FCC_TEMP_DOM=FCC_DOM.innerHTML;			
	FCC_DOM.innerHTML=FCC_ADD_DOM+FCC_TEMP_DOM;
	
	
	//<input value=" Cancelar" type="button" onclick="self.location.href='?mode=list&amp;'" class="input-button btn btn_generic">
	

	
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



function FCC_INICIA_AFECHA(){


	try{
			
	var UL_TXT_FECHAPUBLICACION = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_start_"); 
	var UL_TXT_FECHAPUBLICACION_HIDE = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_start__real"); 
	
	UL_TXT_FECHAPUBLICACION.readOnly  = true;
	
	var UL_TXT_FECHAFINALIZACION = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_end_"); 	
	var UL_TXT_FECHAPUBLICACION_HIDE = FCC_GET_ELEMENTO_BYID("dnf_class_values_job__job_end__real"); 		
			
		var numero ="0";
		var numerof ="1";
		
		  //la fecha
		  var TuFecha = new Date();
		  var TuFechaf = new Date();
		  var dias;
		  var diasf;
		  
		  //dias a sumar
		  var dias = parseInt(numero);
		  var diasf = parseInt(numerof);
		  
		  //nueva fecha sumada
		  TuFecha.setDate(TuFecha.getDate() + dias);
		  TuFechaf.setDate(TuFechaf.getDate() + diasf);
		  //formato de salida para la fecha
		  
		  	  
		  if(TuFecha.getDate() <10){
			  dias ="0"+TuFecha.getDate()
			}else{
				dias =TuFecha.getDate()
			}
			
			if(TuFechaf.getDate() <10){
			  diasf ="0"+TuFechaf.getDate()
			}else{
				diasf =TuFechaf.getDate()
			}
		  
		 UL_TXT_FECHAPUBLICACION.value= TuFecha.getFullYear() + '-' + (TuFecha.getMonth() + 1)  + '-' + dias;
		 UL_TXT_FECHAPUBLICACION_HIDE.value = UL_TXT_FECHAPUBLICACION.value;
			
		UL_TXT_FECHAFINALIZACION.value = TuFechaf.getFullYear() + '-' + (TuFechaf.getMonth() + 1)  + '-' + diasf;
		UL_TXT_FECHAPUBLICACION_HIDE.value = UL_TXT_FECHAFINALIZACION.value;
			
	}catch(err){}


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

