import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyARukPR6D94Pn2GbFPTVPIwAqEbYO3DBro",
  authDomain: "portfolio-fjmo.firebaseapp.com",
  projectId: "portfolio-fjmo",
  storageBucket: "portfolio-fjmo.firebasestorage.app",
  messagingSenderId: "650586181627",
  appId: "1:650586181627:web:d144f8da7a9a544263855e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
