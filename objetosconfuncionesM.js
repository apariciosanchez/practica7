/* objetos que incluyen metodos para realizar acciones */
const coche = {
   marca: "toyota",
   modelo: "hilux",
   encender: function() {
    console.log("el coche esta encendido");
   },
   apagar: function () {
    console.log("el coche esta apagado");
   }
};

/* usu de los metodos del objeto */
coche.encender();
coche.apagar();