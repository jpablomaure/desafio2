import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCe8Usq-weQfH7Ljr0ab2Yp0MHCI43WW4A",
    authDomain: "soybohemia-c645f.firebaseapp.com",
    projectId: "soybohemia-c645f",
    storageBucket: "soybohemia-c645f.appspot.com",
    messagingSenderId: "468023148132",
    appId: "1:468023148132:web:e17ccc3867bf27e791e971"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db; // lo exporto porque la voy a utilizar en otros archivos