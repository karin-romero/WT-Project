const checkout = new Carrito();
const listaCompra = document.getElementById("listaProducto");
//const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = "Omar";//document.getElementById('cliente');
const correo = "omar_morejon@hotmail.com";//document.getElementById('correo');
const numOrden = "245";

cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', checkout.leerLocalStorageCheckout());

    //Eliminar productos del carrito
    //carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });

    checkout.calcularTotal();

    //cuando se selecciona procesar Compra
    procesarCompraBtn.addEventListener('click', procesarCompra);

    //carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    //carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });
}

function procesarCompra() {
    // e.preventDefault();
    if (checkout.obtenerProductosLocalStorage().length === 0) {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'No hay productos, selecciona alguno',
            showConfirmButton: false,
            timer: 2000
        }).then(function () {
            window.location = "index.html";
        })
    }
    else if (document.getElementById("paypal").checked==false) {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Seleccione la forma de pago',
            showConfirmButton: false,
            timer: 2000
        })
    }
    else {
        swal("Transacción exitosa", "Su número de orden es el "+numOrden+". Dentro de 15 minutos se le enviará una notificación para que se acerque a retirar su pedido.", "success")
        setTimeout(executarWorkers, 3000);
        //location.href = "index.html";
    }

    function executarWorkers(params) {        
        checkout.vaciarLocalStorage();
        window.location = "index.html?numOrden="+numOrden;
    }
}