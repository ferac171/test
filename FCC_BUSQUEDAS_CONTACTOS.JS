


/*##############################################################################################################################*/

// MODELO PARA MODIFICAR INTERFACE DE:
// REGISTRO DE PUBLICACIONES DE EMPLEO - VISTA CONTACTO
//
// NAME		: FCC_PUBLICACIONES_CONTACTO.JS
	
	const FCC_PUBLICACIONES_CONTACTO_VERSION_LOCAL = "1.0";
	const FCC_PUBLICACIONES_CONTACTO_FECHA_LOCAL= "23/10/18";

/*############################################################################################################################*/

//UL_BARRA_MENU[0].style.display="";


FCC_AGREGA_BOTONES();


function GUARDAYCARGA(){
	
var xxx = document.getElementsByName("dnf_opt_submit")[0];

console.log("ejecutando guarda y carga");
xxx.onclick();

window.open('index.php?s=rezbook&ss=book&_ksl=1&mode=list', '_blank').focus();


}


function FCC_AGREGA_BOTONES(){

	// DECALRACION DE VARIABLES*/
	var FCC_DOM= document.getElementById("job_form_fieldgroup__default");
	var FCC_ADD_DOM="";
	var FCC_TEMP_DOM="";

	// EJECUCION DEL PROCESO*/
	FCC_ADD_DOM += "<input type='submit' id='UL_BTN_CV_BOOK' onclick='GUARDAYCARGA()' class='input-submit btn btn_primary' value='Carga' />";		
	FCC_TEMP_DOM=FCC_DOM.innerHTML;			
	FCC_DOM.innerHTML=FCC_ADD_DOM+FCC_TEMP_DOM;
}

