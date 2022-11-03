import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCfj6EkiJksBFoJLvcdcQsmIZRdJk7yQuw',
  authDomain: 'fir-crud-1c1d6.firebaseapp.com',
  projectId: 'fir-crud-1c1d6',
  storageBucket: 'fir-crud-1c1d6.appspot.com',
  messagingSenderId: '201071998039',
  appId: '1:201071998039:web:83f1d51cb7909469d29f12',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
