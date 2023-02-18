import Swal from "sweetalert2";

function increaseImageSizeModal(nft){
    
    Swal.fire({
        imageUrl: `${nft.img}`,
        imageWidth: 400,
        imageHeight: 500,
        imageAlt: "nft expandido"
    })
}

export default increaseImageSizeModal