 import Firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 
 const config={ 
   apiKey: "AIzaSyAjOCl7Nz8wFQ6mbEhrnwH6f6s8FN4Cou8",
   authDomain: "excel-5d0f5.firebaseapp.com",
   projectId: "excel-5d0f5",
   storageBucket: "excel-5d0f5.appspot.com",
   messagingSenderId: "824985658914",
   appId: "1:824985658914:web:f4413e28369b20789d8c7b",
   measurementId: "G-S44TXC9DVF"
 };


 const firebase = Firebase.initializeApp(config);



 export {firebase};