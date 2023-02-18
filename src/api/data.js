import { db } from "./firebase";
import { collection, doc, getDoc, getDocs, limit, orderBy, query, setDoc, where } from "firebase/firestore";


async function getData(idCategory) {
    let colRef;
    
    if(!idCategory){
        colRef = query(collection(db, "nftData"), orderBy("title"));
        
    }else{
        colRef = query(collection(db, "nftData"), where("category", "==", idCategory));
    }
    
    try {
        const snapshot = await getDocs(colRef)
        const allNft = snapshot.docs.map( rawDoc =>{
            return{
                id: rawDoc.id,
                ...rawDoc.data()     
            }
        });  
        return allNft  

    } catch (error) {
        console.log("Se produjo un error al cargar los docs" + error )
    }    
}



const getNftDetail = async (id) => {
    const docRef = doc(db, "nftData", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: id,
          ...docSnap.data()
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
}



async function getFeaturedNft(){
    const nftRef = query(collection(db, "nftData"), where("featured", "==", true), limit(4));

    try {
        const snapshot = await getDocs(nftRef)
        const featuredNft = snapshot.docs.map(rawDoc => {
            return{
                id : rawDoc.id,
                ...rawDoc.data()
            } 
        }); 
        return featuredNft;
        
    } catch (error) {
        console.log("No se pueden mostrar los nft destacados" + error)
    }

}


async function createOrderFirestore(order){
    const orderRef = doc(collection(db, "orders"))

    try {
        await setDoc(orderRef, order)
        return orderRef
    } catch (error) {
        alert(error)
    }
}



export  {getData, getNftDetail, getFeaturedNft, createOrderFirestore};

