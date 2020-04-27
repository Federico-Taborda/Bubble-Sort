class Elemento {
    constructor(elemento) {
        this.propiedad = elemento;
        this.valor = parseInt(this.propiedad.children[0].textContent);
        this.style = window.getComputedStyle(this.propiedad);
        this.x = this.propiedad.getBoundingClientRect().x;
        this.transicion = "0.4s";
        this.segundos = 400;
    };

    // Obtiene la x del elemento
    obtenerX() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.x = this.propiedad.getBoundingClientRect().x);
            }, this.segundos + 100);
        });
    };
    
    // Cambia los colores del elemento
    cambiarEstilos(text) {
        this.propiedad.style.borderColor = text;
        this.propiedad.style.color = text;
    };
    
    // Mueve un elemento hacia la izquierda
    async animacionIzquierda(elemento) {
        this.propiedad.style.transition = this.transicion;
        this.cambiarEstilos("#ff4d4d");

        let moverX = elemento.x - this.x;
        
        await this.animacion(this.segundos, moverX, 0);
        await this.obtenerX();
        
        this.cambiarEstilos("#2ecc71");
    };
    
    // Mueve un elemento hacia la derecha
    async animacionDerecha(object) {
        this.propiedad.style.transition = this.transicion;
        this.cambiarEstilos("#ff4d4d");
        let moverX = object.x - this.x;
        
        await this.animacion(this.segundos, moverX, 0);
        await this.obtenerX();

        this.cambiarEstilos("#2ecc71");
    };
    
    // Tiempo que tomara la animacion
    animacion(time, x, y) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.propiedad.style.transform = `translate(${x}px, ${y}px)`);
            }, time);
        });
    };
};