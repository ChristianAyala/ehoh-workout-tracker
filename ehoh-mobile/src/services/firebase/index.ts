import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDiVCpggO_MgWAGQe_q-WtH4eP1XexaJvE',
  authDomain: 'ehoh-75e80.firebaseapp.com',
  databaseURL: 'https://ehoh-75e80.firebaseio.com',
  projectId: 'ehoh-75e80',
  storageBucket: 'ehoh-75e80.appspot.com',
  messagingSenderId: '938239100001',
  appId: '1:938239100001:web:1d97cbbcc21cad6de09620',
  measurementId: 'G-NE15CN39FE'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
