class Elemento {
    constructor(elemento) {
        this.propiedad = elemento;
        this.valor = parseInt(this.propiedad.children[0].textContent);
        this.style = window.getComputedStyle(this.propiedad);
        this.x = this.propiedad.getBoundingClientRect().x;
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
};