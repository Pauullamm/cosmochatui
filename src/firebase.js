import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAA34HNG466j63hfJrzya7gLT2mImq0QMo",
    authDomain: "cosmochatui-c9eab.firebaseapp.com",
    projectId: "cosmochatui-c9eab",
    storageBucket: "cosmochatui-c9eab.appspot.com",
    messagingSenderId: "705480422645",
    appId: "1:705480422645:web:190a30c592aa37758d01bc"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };