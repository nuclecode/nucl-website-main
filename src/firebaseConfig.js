import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDbDJuwROs1bsorUffs1Up-SQxAgOKcGwM",
  authDomain: "nuclecode-newsletter.firebaseapp.com",
  projectId: "nuclecode-newsletter",
  storageBucket: "nuclecode-newsletter.appspot.com",
  messagingSenderId: "371670253021",
  appId: "1:371670253021:web:bf14d85b1388fb5d0c4a34"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };