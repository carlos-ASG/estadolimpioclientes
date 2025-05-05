// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

// Inicializa Analytics (opcional)
const analytics = getAnalytics(app);

// Verifica si Firebase se inicializó correctamente
console.log("Firebase app initialized:", app.name || "[DEFAULT]");

export { app, analytics };