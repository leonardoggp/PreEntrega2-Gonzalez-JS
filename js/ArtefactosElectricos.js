class ArtefactosElectricos{
    // ! Atributos
    artefacto;
    factor_emision; // * KgCO₂eq/UM -- para todos los casos UM (unidad de tiempo) es hs	
    horas_uso; // ? queda como undefined en el contructor ya que es un parametro de entrada del usuario
    emisiones; // ? queda como undefined en el contructor ya que lo calcularemos por un metodo
    // ! Constructor
    constructor(artefacto, factor_emision){
        this.artefacto=artefacto;
        this.factor_emision=factor_emision;
    };
    
    // ! Metodos
    emisiones_artefactos = function (){
        
        emisiones= this.horas_uso * this.factor_emision;
    }
}