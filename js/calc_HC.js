// ** Calculo de Huella de Carbono

// ! Declaración e Inicialización de variables, constantes y parametros
// ? Datos del usuario
let nombreUsuario;

// ? Definición de tipos de días utilizados
const diasLaborales = 230;
const diasInvierno = 95;
const diasVerano = 135;

// ? Factores de Emisión en función de la fuente de emisión
// por ahora simplemente declarativo deberian venir de una tabla
// *****************************************************************************************
// * Grupo                  **  Fuente de emisión   **	Factor Emisión (KgCO₂eq/UM) ** UM **
// *****************************************************************************************
// * Artefactos Eléctricos  **    PC Escritorio     **	 0,35                       ** h  **
// * Artefactos Eléctricos  **    PC Portátil	    **   0,010692                   ** h  **
// * Artefactos Eléctricos  **    Multifunción	    **   0,4374                     ** h  **
// * Artefactos Eléctricos  **    Fotocopiadora	    **   0,4374                     ** h  **
// * Artefactos Eléctricos  **    Impresora	        **   0,3645                     ** h  **
// * Artefactos Eléctricos  **    Freezer	        **   0,04374                    ** h  **
// * Artefactos Eléctricos  **    Heladera	        **   0,030618                   ** h  **
// * Artefactos Eléctricos  **    Microondas	    **   0,31104                    ** h  **
// * Artefactos Eléctricos  **    Dispenser 	    **   0,1215                     ** h  **
// * Artefactos Eléctricos  **    Pava eléctrica	**   1,1664                     ** h  **
// * Artefactos Eléctricos  **    Radio	            **   0,02916                    ** h  **
// *****************************************************************************************
const tablaArtefactosElectricos = []; // decalro un array vacio para luego cargar los objetos

tablaArtefactosElectricos.push(new ArtefactosElectricos("PC Escritorio",0.35))
tablaArtefactosElectricos.push(new ArtefactosElectricos("PC Portátil",0.010692))
tablaArtefactosElectricos.push(new ArtefactosElectricos("Multifunción",0.4374))
tablaArtefactosElectricos.push(new ArtefactosElectricos("Fotocopiadora",0.4374))
tablaArtefactosElectricos.push(new ArtefactosElectricos("Impresora",0.3645))
tablaArtefactosElectricos.push(new ArtefactosElectricos("Microondas",0.31104))
tablaArtefactosElectricos.push(new ArtefactosElectricos("Dispenser",0.1215))
tablaArtefactosElectricos.push(new ArtefactosElectricos("Pava eléctrica",1.1664))

console.log(tablaArtefactosElectricos)

// ? Totales
let totalEmisionArtefacto = 0;
let totalEmisionIluminacion = 0;
let totalEmisionApartado1 = 0;
let totalEmisionCalefaccion = 0;
let totalEmisionRefrigeracion = 0;
let totalEmisionApartado2 = 0;
let totalEmisionTrasladoCasa = 0;
let totalEmisionTrasladoLaboral = 0;
let totalEmisionApartado3 = 0;
let totalEmisiones = 0;
// ? Carga datos en Apartados
let cargaApartado1; // si ó no
let cargaApartado2; // si ó no
let cargaApartado3; // si ó no
// ? Continuar carga
let continuarApartado1; // si ó no
let continuarApartado2; // si ó no
let continuarApartado3; // si ó no


// ! Inicio

alert('Bienvenido al calculadora de su Hella de Carbono por las actividades que realizás en el ámbito laboral anualmente');
nombreUsuario = prompt("Ingrese su nombre");
alert('Buenos días ' + nombreUsuario + ' comencemos con la carga de datos');
cargaApartado1 = prompt('Quiere cargar los datos correspondientes a los consumo de Artefactos Eléctricos (si/no)');
if  (cargaApartado1 == 'si') {
    for (ArtefactosElectricos of tablaArtefactosElectricos){
        ArtefactosElectricos.horas_uso = Number(prompt(`¿Cantidad de horas que se usa el ${ArtefactosElectricos.artefacto} por día?`));
        ArtefactosElectricos.emisiones= ArtefactosElectricos.horas_uso * ArtefactosElectricos.factor_emision * diasLaborales;
        totalEmisionArtefacto = totalEmisionArtefacto + ArtefactosElectricos.emisiones
    }
    alert('El total de emisiones debido al uso de artefactos eléctricos es de ' + totalEmisionArtefacto + ' KgCO₂eq');
    cargaApartado2 = prompt('Quiere cargar los datos correspondientes a los consumo para la Climatización (si/no)');

} else if (cargaApartado2 == 'si') {
    
    ///alert('El total de emisiones debido al uso de artefactos eléctricos es de ' + totalEmisionArtefacto + ' KgCO₂eq');
    cargaApartado3 = prompt('Quiere cargar los datos correspondientes a los consumo por traslados (si/no)');


} else if (cargaApartado3 == 'si') {

}
