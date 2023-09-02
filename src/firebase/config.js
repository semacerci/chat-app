import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz_YRGmpar_YXauAkygdS3gUM8ClM2er8",
  authDomain: "blog-vue3-2e622.firebaseapp.com",
  projectId: "blog-vue3-2e622",
  storageBucket: "blog-vue3-2e622.appspot.com",
  messagingSenderId: "2402307523",
  appId: "1:2402307523:web:648f2f1f1a286c1889c176",
  measurementId: "G-RK719ETRG0"
};


firebase.initializeApp(firebaseConfig);

  const projectAuth=firebase.auth();
  const projectFirestore=firebase.firestore()
  const timestamp =firebase.firestore.FieldValue.serverTimestamp;

  export {projectAuth,projectFirestore,timestamp};

  

  