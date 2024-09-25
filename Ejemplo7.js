var factura ={
    numero: 650,
    cliente: 'mario hernandez',
    vencimientos: {
        1: new Date(2023,9,12),
        2: new Date(2023,8,15),
        3: new Date(2023,5,20)
    }
}

var numeroFactura = factura.numero;
var primerVencimiento = factura.vencimientos[1];
console.log('el segundo vencimiento de la segunda factura' + numeroFactura + 'sera el' + primerVencimiento.getDate());