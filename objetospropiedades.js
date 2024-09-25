/* objetos con varias propiedades */
const producto = {
    nombre: "moto",
    precio: 1000,
    disponible: true

};

/* uso de n bucle */
for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
};
