import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";


// Configuración de Firebase
const firebaseConfig = {

  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "nft-paradise.firebaseapp.com",
  projectId: "nft-paradise",
  storageBucket: "nft-paradise.appspot.com",
  messagingSenderId: "727417868472",
  appId: "1:727417868472:web:514100722f5f3fa3fa644d"

};


// Inicializar Firebase
const app = initializeApp(firebaseConfig);

//Selección de la base de datos

export const db = getFirestore(app);