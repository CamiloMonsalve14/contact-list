let listaContactos = [ 
    {
        id: 1,
        nombres: "Camilo",
        apellidos: "Monsalve",
        teléfono: 31732322742,
        ubicaciones: { ciudad: "bogota", dirección: "calle 50 #46-10",}
},

    {
        id: 2, 
        nombres: "Alanna",
        apellidos: "Delgado",
        teléfono: 3178283245,
        ubicaciones: { ciudad: "medellin", dirección: "calle 50 #47-15",}
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
}

function borrarContacto (borrarContacto){
let nuevalista = listaContactos.filter((contacto) => contacto.ubicaciones.ciudad !== borrarContacto);
listaContactos = nuevalista;
}

function imprimirContacto () {
    console.log(listaContactos);
}


function actualizarContacto(id, nuevoContacto) {
    const index = listaContactos.findIndex(contacto => contacto.id === id);

    if (index !== -1) {
    listaContactos[index] = { ...listaContactos[index], ...nuevoContacto };
    console.log("Contacto actualizado:", listaContactos[index]);
    } else {
    console.log("Contacto no encontrado con el ID:", id);
    }
}

actualizarContacto(5, { apellidos: "Monsalve" });


let nuevoContacto = {
id: 4, 
    nombres: "Jose",
    apellidos: "Madera",
    teléfono: 3172103245,
    ubicaciones: { ciudad: "San Pedro de Urabá", dirección: "calle 14 #48-29",}
}

// agregarContacto (nuevoContacto);
// borrarContacto("bogota")
// imprimirContacto();

// console.log(listaContactos);

