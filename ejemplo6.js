/* ejemplo */
var factura = {
    numero: 202,
    cliente: 'almacenes bomba',
    divisa: 'dolares',
    total: 600,
    iva:  78
}

var numeroFactura = factura.numero;
var monedaFactura = factura.divisa;
var totalFactura = factura.total;
console.log('la factura,' + numeroFactura + 'es de,' + totalFactura + '' + monedaFactura);