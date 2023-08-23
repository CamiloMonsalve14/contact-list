let listaContactos = ["FelipeCalvache","CarlosPerez", "AbnerJimenez"];

function agregarContacto (nuevoContacto){
    listaContactos.push(nuevoContacto)
}

function borrarContacto (borrarContacto){
let nuevalista = listaContactos.filter((contacto) => contacto !== borrarContacto);
listaContactos = nuevalista
}

borrarContacto("JhonFlorez");
console.log(listaContactos)

function imprimirContacto () {
    console.log(listaContactos);
}
agregarContacto("CamiloMonsalve")
imprimirContacto();
borrarContacto("CarlosPerez")
imprimirContacto();

// hola
// hola mundo 
