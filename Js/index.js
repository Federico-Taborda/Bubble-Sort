const Efecto = new Animacion();
let objetos = [];

// Crea una lista desordenada de numeros y dibujara una burbuja por cada numero
function dibujarNumeros() {
    let contenedor = document.getElementById("container");
    let numeros = [9, 3, 7, 1, 10, 4, 2, 6, 5, 8];
    
    numeros.forEach(elemento => contenedor.innerHTML += `<div class="item"><h1>${elemento}</h1></div>`)
};

// Por cada Burbuja se creara un objeto
function crearBurbujas() {
    let burbujas = document.getElementsByClassName("item");
    
    for(let h = 0; h < burbujas.length; h++) {
        let burbuja = new Burbuja(burbujas[h]);
        objetos.push(burbuja);
    };
};

// Algoritmo Burbuja
async function algoritmo(lista) {
    let inter = true;
    let i = 0;
    
    while((i < lista.length - 1) && inter) {
        inter = false;
        for(let j = lista.length - 1; j > i; j--) {
            if(lista[j].valor < lista[j - 1].valor) {
                let temp;
                temp = lista[j];
                lista[j] = lista[j - 1];
                lista[j - 1] = temp;
                inter = true;
                
                await Efecto.animar(lista[j - 1], lista[j]);
            };
        };
    };
};

dibujarNumeros();
crearBurbujas();
algoritmo(objetos);
