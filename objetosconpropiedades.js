/* objetos que contienen otros objetos como propiedades */
const estudiante = {
      nombre: "mauricio",
      edad: 28,
     direccion: {
      calle: "calle principal barrio zaragosa",
      ciudad: "chinameca"
     },
     materias: ["matematicas", "fisica", "ciencia"]
};

/* acceso a propiedades anidadas */
console.log(estudiante.direccion.ciudad);
console.log(estudiante.materias[2]);