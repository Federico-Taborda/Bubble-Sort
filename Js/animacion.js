class Animacion {
    constructor() {
        this.tiempo = 400;
    };

    async animar(burbuja1, burbuja2) {
        // Color de las burbujas en rojo
        burbuja1.cambiarEstilos("#ff4d4d");
        burbuja2.cambiarEstilos("#ff4d4d");
        
        // Anima ambas burbujas
        await Promise.all([this.animacion(burbuja1, burbuja2.x - burbuja1.x), this.animacion(burbuja2, burbuja1.x - burbuja2.x)])
        
        // Obtiene la x de las burbujas
        await Promise.all([burbuja1.obtenerX(this.tiempo), burbuja2.obtenerX(this.tiempo)]);

        // Color de las burbujas en verde
        burbuja1.cambiarEstilos("#2ecc71");
        burbuja2.cambiarEstilos("#2ecc71");
    };

    // Tiempo que tomara la animacion
    animacion(burbuja, x) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(burbuja.propiedad.style.transform = `translateX(${x}px)`);
            }, this.tiempo);
        });
    };
};