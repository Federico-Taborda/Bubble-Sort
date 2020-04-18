function dibujarNumeros() {
    let contenedor = document.getElementById("container");
    let numeros = [3, 7, 1, 4, 2, 6, 5];
    
    /* for(let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * 10);
        numeros.push(random);
    }; */

    for(let j = 0; j < numeros.length; j++) {
        contenedor.innerHTML += `<div class="item"><h1>${numeros[j]}</h1></div>`;
    };
};

function crearObjetos() {
    let elementos = document.getElementsByClassName("item");
    
    for(let h = 0; h < elementos.length; h++) {
        items.push(new Elemento(elementos[h]));
    };
};

/* Nota: este algoritmo es lento porque mueve elementos de uno en uno */
async function algoritmo(lista) {
    /* const lista = [3, 7, 1, 4, 2, 6, 5]; */
    let inter = true;
    let i = 0;
    
    while((i < lista.length - 1) && inter) {
        inter = false;
        for(let j = lista.length - 1; j > i; j--) {
            if(lista[j].valor < lista[j - 1].valor) {
                 lista[j].animacionArriba(lista[j - 1]);
                await lista[j - 1].animacionAbajo(lista[j]);
                let temp;
                temp = lista[j];
                lista[j] = lista[j - 1];
                lista[j - 1] = temp;
                inter = true;
            };
        };
    };
};

let items = [];

dibujarNumeros();
crearObjetos();
algoritmo(items);

/* async function prueba() {
    items[items.length - 1].animacionArriba(items[items.length - 2]);
    await items[items.length - 2].animacionAbajo(items[items.length - 1]);
    items[items.length - 2].animacionArriba(items[items.length - 3]);
    await items[items.length - 3].animacionAbajo(items[items.length - 2]);
}

prueba();
 */

