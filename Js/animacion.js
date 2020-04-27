class Animacion {
    constructor() {
        this.tiempo = 400;
    };

    async animar(elemento1, elemento2) {
        // Color de elementos Rojo
        elemento1.cambiarEstilos("#ff4d4d");
        elemento2.cambiarEstilos("#ff4d4d");

        console.log(elemento1.valor, elemento1.x)
        console.log(elemento2.valor, elemento2.x)

        // Anima los dos elementos
        this.animacion(elemento1, elemento2.x - elemento1.x);
        await this.animacion(elemento2, elemento1.x - elemento2.x);
        
        // Obtiene la x de los elementos
        await Promise.all([elemento1.obtenerX(this.tiempo), elemento2.obtenerX(this.tiempo)]);
        
        console.log(elemento1.valor, elemento1.x)
        console.log(elemento2.valor, elemento2.x)
        console.log("===============")

        // Color de elementos Verde
        elemento1.cambiarEstilos("#2ecc71");
        elemento2.cambiarEstilos("#2ecc71");
    };

    // Tiempo que tomara la animacion
    animacion(element, x) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(element.propiedad.style.transform = `translateX(${x}px)`);
            }, this.tiempo);
        });
    };
};