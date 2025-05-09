// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuración de Firebase para tu aplicación
const firebaseConfig = {
  apiKey: "AIzaSyBPxq90rvnK6WN56UzOrvbbouGRFldsKIA",
  authDomain: "estadolimpiousers-3d289.firebaseapp.com",
  databaseURL: "https://estadolimpiousers-3d289-default-rtdb.firebaseio.com",
  projectId: "estadolimpiousers-3d289",
  storageBucket: "estadolimpiousers-3d289.firebasestorage.app",
  messagingSenderId: "619668010842",
  appId: "1:619668010842:web:cb64b450f0a4c69b50a563",
  measurementId: "G-9GLV205BBW",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, firestore, auth };
