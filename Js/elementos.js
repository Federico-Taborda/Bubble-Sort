class Elemento {
    constructor(objeto) {
        this.objeto = objeto;
        this.valor = parseInt(this.objeto.children[0].textContent);
        this.style = window.getComputedStyle(this.objeto);
        this.x = this.objeto.getBoundingClientRect().x; 
        this.y = this.objeto.getBoundingClientRect().y; 
        this.margin = this.obtenerMargen();
        this.height = this.obtenerAlto();
    };

    // Obtiene el margen total del elemento actual
    obtenerMargen() {
        let margen = this.style.getPropertyValue("margin");
        let arrMargin = margen.split("p");
        
        return parseInt(arrMargin[0]);
    };
    
    // Obtiene el alto total del elemento actual
    obtenerAlto() {
        let alto = this.style.getPropertyValue("height");
        let arrHeight = alto.split("p");
        
        return parseInt(arrHeight[0]);
    };

    async animacionArriba(object) {
        this.objeto.style.transition = "0.5s";
        let subir = this.margin - this.height - 20;
        let moverX = object.x - this.x
        let segundos = 1000;
    
        // Sube el elemento
        /* await this.animacion(segundos, moverX, 0) */
        await this.animacion(segundos, 0, subir);
        // Lo mueve hasta x dada
        await this.animacion(segundos, moverX, subir);
        // Vuelve a su y original
        await this.animacion(segundos, moverX, 0);
        
    };
    
    async animacionAbajo(object) {
        this.objeto.style.transition = "0.5s";
        let bajar = this.margin + this.height + 20;
        let moverX = object.x - this.x;
        let segundos = 1000;

        // Baja el elemento
        await this.animacion(segundos, 0, bajar);
        // Lo mueve hasta x dada
        await this.animacion(segundos, moverX, bajar);
        // Vuelve a su y original
        await this.animacion(segundos, moverX, 0);
        
    };
    
    animacion(time, x, y) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.objeto.style.transform = `translate(${x}px, ${y}px)`);
            }, time);
        });
    };
};