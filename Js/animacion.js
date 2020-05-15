class Animacion {
    constructor() {
        this.tiempo = 300;
    };

    async animar(burbuja1, burbuja2) {
        // Cambia el color de las burbujas a rojo
        burbuja1.cambiarEstilos("#ff4d4d");
        burbuja2.cambiarEstilos("#ff4d4d");

        // Anima ambas burbujas
        await Promise.all([
            this.animacion(burbuja1, await burbuja2.obtenerX() - burbuja1.xInicial),
            this.animacion(burbuja2, await burbuja1.obtenerX() - burbuja2.xInicial)
        ]);
        
        // Obtiene la x de las burbujas
        await Promise.all([burbuja1.obtenerX(this.tiempo), burbuja2.obtenerX(this.tiempo)]);
        
        // Cambia el color de las burbujas a verde
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