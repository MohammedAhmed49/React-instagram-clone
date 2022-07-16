import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Seed file should be imported here
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyDS6wuMhnFLvWu_RFrgDYgiYn-py7e-v-c",
    authDomain: "instagram-a41ff.firebaseapp.com",
    projectId: "instagram-a41ff",
    storageBucket: "instagram-a41ff.appspot.com",
    messagingSenderId: "905716270698",
    appId: "1:905716270698:web:8ea26ee90f2acee11fac13"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// Seed file should be called here (ONLY ONCE)
// seedDatabase(firebase);


export { firebase, FieldValue };