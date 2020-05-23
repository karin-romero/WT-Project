const checkout = new Carrito();
const listaCompra = document.getElementById("listaProducto");
//const carrito = document.getElementById('carrito');
//const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = "Omar"//document.getElementById('cliente');
const correo = "omar_morejon@hotmail.com"//document.getElementById('correo');


cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', checkout.leerLocalStorageCheckout());

    //Eliminar productos del carrito
    //carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });

    checkout.calcularTotal();

    //cuando se selecciona procesar Compra
    //procesarCompraBtn.addEventListener('click', procesarCompra);

    //carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    //carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });


}