import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA11-4NZeq3RuVXA0E998Y18H77tH1ukb0",
  authDomain: "olx-clone-31c6d.firebaseapp.com",
  projectId: "olx-clone-31c6d",
  storageBucket: "olx-clone-31c6d.firebasestorage.app",
  messagingSenderId: "523613125354",
  appId: "1:523613125354:web:1322a21841d32768923593",
  measurementId: "G-7Q9MVPXMV4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);         // For login/register
export const db = getFirestore(app);      // For database
export const storage = getStorage(app);