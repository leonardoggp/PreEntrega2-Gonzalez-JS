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
// *************************************************************
// * Fuente de emisión  **	Factor Emisión (KgCO₂eq/UM) ** UM **
// *************************************************************
// * PC Escritorio      **	 0,35                       ** h  **
// * PC Portátil	    **   0,010692                   ** h  **
// * Multifunción	    **   0,4374                     ** h  **
// * Fotocopiadora	    **   0,4374                     ** h  **
// * Impresora	        **   0,3645                     ** h  **
// * Freezer	        **   0,04374                    ** h  **
// * Heladera	        **   0,030618                   ** h  **
// * Microondas	        **   0,31104                    ** h  **
// * Dispenser 	        **   0,1215                     ** h  **
// * Pava eléctrica	    **   1,1664                     ** h  **
// * Radio	            **   0,02916                    ** h  **
// *************************************************************
let nombreFuente;
let factorEmision;
let horasUso; // horas de uso por día [hs/día]

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
    do {
        nombreFuente = prompt('Ingrese el nombre del Artefactos Eléctricos');
        factorEmision = Number(prompt('Ingrese el valor de Factor Emisión [KgCO₂eq/UM]'));
        horasUso = Number(prompt('¿Cantidad de horas que se usa el artefacto por día?'))
        totalEmisionArtefacto = totalEmisionArtefacto + factorEmision * horasUso * diasLaborales
        continuarApartado1 = prompt("¿Desea ingresar otro Artefactos Eléctrico? (si/no)");
    } while (continuarApartado1 == 'si');

    alert('El total de emisiones debido al uso de artefactos eléctricos es de ' + totalEmisionArtefacto + ' KgCO₂eq');
    cargaApartado2 = prompt('Quiere cargar los datos correspondientes a los consumo para la Climatización (si/no)');

} else if (cargaApartado2 == 'si') {
    
    ///alert('El total de emisiones debido al uso de artefactos eléctricos es de ' + totalEmisionArtefacto + ' KgCO₂eq');
    cargaApartado3 = prompt('Quiere cargar los datos correspondientes a los consumo por traslados (si/no)');


} else if (cargaApartado3 == 'si') {

}




