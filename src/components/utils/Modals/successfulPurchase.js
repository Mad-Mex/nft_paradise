import Swal from "sweetalert2";

function successfulPurchase(result){
    return(
        Swal.fire({
            icon: "success",
            title: "¡Compra exitosa!",
            html: `Número de referencia: <b> ${result.id} </b> `,
            confirmButtonText: "<a href='/'> <i class='fa fa-home'></i> Ir a inicio </a>  "
        })
    )
}

export default successfulPurchase;
