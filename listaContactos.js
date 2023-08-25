let listaContactos = [ 
    {
        id: 1,
        nombres: "Camilo",
        apellidos: "Monsalve",
        teléfono: 3178283742,
        ubicaciones: { ciudad: "San Pedro de Urabá", dirección: "calle 50 #46-10",}
},

    {
        id: 2, 
        nombres: "Alanna",
        apellidos: "Delgado",
        teléfono: 3178283245,
        ubicaciones: { ciudad: "San Pedro de Urabá", dirección: "calle 50 #47-15",}
},

{
        id: 3, 
        nombres: "Sofia",
        apellidos: "Valeta",
        teléfono: 3125243245,
        ubicaciones: { ciudad: "San Pedro de Urabá", dirección: "calle 25 #36-18",}
},
];

function agregarContacto(nuevoContacto){
listaContactos.push(nuevoContacto);
// return listaContactos;
}

function borrarContacto (borrarContacto){
let nuevalista = listaContactos.filter((contacto) => contacto.id !== borrarContacto);
listaContactos = nuevalista;
}

function imprimirContacto () {
    console.log(listaContactos);
}

let nuevoContacto = {
id: 4, 
    nombres: "Jose",
    apellidos: "Madera",
    teléfono: 3172103245,
    ubicaciones: { ciudad: "San Pedro de Urabá", dirección: "calle 14 #48-29",}
}

// agregarContacto(nuevoContacto);
borrarContacto(3)
imprimirContacto();

