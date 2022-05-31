const products = [
    {
        id: 1,
        titulo: "Aromatizador",
        precio: 1300,
        stock: 10,
        imagen: "../public/img/tienda1.jpg",
        descripcion: "Aromatizador con gatillo, etiqueta de 500 ml",
        categoriaId: 1,
        categoria: {
            nombre: "Esencias",
            id: 1
        }
    },
    {
        id: 2,
        titulo: "Sillón",
        precio: 69000,
        stock: 32,
        imagen: "../public/img/tienda2.jpg",
        descripcion: "Sillon Luis XII, madera brasilera, tachas importadas y pana de primera calidad",
        categoriaId: 2,
        categoria: {
            nombre: "Muebles",
            id: 2
        }
    },
    {
        id: 3,
        titulo: "Lámpara",
        precio: 11300,
        stock: 2,
        imagen: "../public/img/tienda3.jpg",
        descripcion: "Lámpara escocesa pequña ",
        categoriaId: 3,
        categoria: {
            nombre: "Accesorios",
            id: 3
        }
    },
    {
        id: 4,
        titulo: "Perchero",
        precio: 6500,
        stock: 56,
        imagen: "../public/img/tienda4.jpg",
        descripcion: "Perchero nórdico de pino de 60cm de diametro",
        categoriaId: 3,
        categoria: {
            nombre: "Accesorios",
            id: 3
        }
    },
    {
        id: 5,
        titulo: "Sillón",
        precio: 28500,
        stock: 15,
        imagen: "../public/img/tienda5.jpg",
        descripcion: "Sillón de pie de cama en varios colores",
        categoriaId: 2,
        categoria: {
            nombre: "Muebles",
            id: 2
        }
    },
    {
        id: 6,
        titulo: "Velas",
        precio: 1300,
        stock: 20,
        imagen: "../public/img/tienda6.jpg",
        descripcion: "velas aromáticas de aceite vegetal",
        categoriaId: 1,
        categoria: {
            nombre: "Esencias",
            id: 1
        }
    },
    {
        id: 7,
        titulo: "Macetero simple",
        precio: 2500,
        stock: 22,
        imagen: "../public/img/tienda7.jpg",
        descripcion: "Macetero simple de mimbre",
        categoriaId: 3,
        categoria: {
            nombre: "Accesorios",
            id: 3
        }
    },
    {
        id: 8,
        titulo: "Macetero Doble",
        precio: 4000,
        stock: 22,
        imagen: "../public/img/tienda8.jpg",
        descripcion: "Macetero dobre",
        categoriaId: 3,
        categoria: {
            nombre: "Accesorios",
            id: 3
        }
    },
    {
        id: 9,
        titulo: "Espejo",
        precio: 3250,
        stock: 70,
        imagen: "../public/img/tienda9.jpg",
        descripcion: "Espejo tipo sol hecho en algo",
        categoriaId: 3,
        categoria: {
            nombre: "Accesorios",
            id: 3
        }
    },
    {
        id: 10,
        titulo: "Almohadon",
        precio: 6800,
        stock: 33,
        imagen: "../public/img/tienda10.jpg",
        descripcion: "Almohadon de varias medidas realizados en tusor de lata calidad y bellon",
        categoriaId: 3,
        categoria: {
            nombre: "Accesorios",
            id: 3
        }
    },
    {
        id: 11,
        titulo: "Bordados",
        precio: 1000,
        stock: 22,
        imagen: "../public/img/tienda11.jpg",
        descripcion: "Bordados diversos en cualquier tipo de tela",
        categoriaId: 4,
        categoria: {
            nombre: "Manuales",
            id: 4
        }
    },
    {
        id: 12,
        titulo: "Almohadon especial",
        precio: 9800,
        stock: 26,
        imagen: "../public/img/tienda12.jpg",
        descripcion: "Almohadones especiales",
        categoriaId: 3,
        categoria: {
            nombre: "Accesorios",
            id: 3
        }
    }
];

module.exports = {
    products,
}