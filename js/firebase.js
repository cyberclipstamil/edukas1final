const firebaseConfig = {
    apiKey: "AIzaSyAYLwzpgJpip0ielFxkv1qqVDaItvApP_o",
    authDomain: "edukas1tutor.firebaseapp.com",
    databaseURL: "https://edukas1tutor-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "edukas1tutor",
    storageBucket: "edukas1tutor.appspot.com",
    messagingSenderId: "805920549337",
    appId: "1:805920549337:web:3bc3dacc6136536956d1c8",
    measurementId: "G-Y8B5CQYEWN"
  };


firebase.initializeApp(firebaseConfig); 
const auth = firebase.auth(); 
const database = firebase.database(); 
var database_ref = database.ref(); 