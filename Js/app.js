const Efecto = new Animacion();

// Crea elementos por cada numero del array
function dibujarNumeros() {
    let contenedor = document.getElementById("container");
    let numeros = [3, 7, 1, 4, 2, 6, 5];
    
    for(let j = 0; j < numeros.length; j++) {
        contenedor.innerHTML += `<div class="item"><h1>${numeros[j]}</h1></div>`;
    };
};

// Por cada elemento se creara un objeto
function crearObjetos() {
    let elementos = document.getElementsByClassName("item");
    
    for(let h = 0; h < elementos.length; h++) {
        let elemento = new Elemento(elementos[h]);
        objetos.push(elemento);
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

let objetos = [];

dibujarNumeros();
crearObjetos();
algoritmo(objetos);
