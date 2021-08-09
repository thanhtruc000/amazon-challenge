import firebase  from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCC_H5sLkuNxiOAiwv-YiQ15ZY4WSBeF8",
    authDomain: "web-5fefa.firebaseapp.com",
    projectId: "web-5fefa",
    storageBucket: "web-5fefa.appspot.com",
    messagingSenderId: "102509639077",
    appId: "1:102509639077:web:18f3afe25b0415cb8be44c",
    measurementId: "G-302L6LTWLS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export{db, auth};