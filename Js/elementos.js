class Burbuja {
    constructor(burbuja) {
        this.propiedad = burbuja;
        this.valor = parseInt(this.propiedad.children[0].textContent);
        this.style = window.getComputedStyle(this.propiedad);
        this.xInicial = this.propiedad.getBoundingClientRect().x;
    };

    // Obtiene la x de la burbuja
    obtenerX(tiempo) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.propiedad.getBoundingClientRect().x);
            }, tiempo + 100);
        });
    };
    
    // Cambia los colores de la burbuja
    cambiarEstilos(texto) {
        this.propiedad.style.borderColor = texto;
        this.propiedad.style.color = texto;
    };
};