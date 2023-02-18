import Swal from "sweetalert2";


function addToCartModal(nft, count){

    Swal.fire({
        title : "Carrito de compra",
        html : `Añadiste <b> ${count} </b> ${nft.title} al carrito `,
        confirmButtonText : "Ok"
})
}


export default addToCartModal;