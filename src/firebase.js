// Firebase core
import { initializeApp } from "firebase/app";

// 🔥 Firestore
import { getFirestore } from "firebase/firestore";

// Optional: Analytics (can remove if unused)
import { getAnalytics } from "firebase/analytics";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDrU5Y1rj2BzQDZFO4ZMF2nDt02GuIVrD8",
  authDomain: "portfoliobyrgn.firebaseapp.com",
  projectId: "portfoliobyrgn",
  storageBucket: "portfoliobyrgn.firebasestorage.app",
  messagingSenderId: "554682321",
  appId: "1:554682321:web:f46d91b90b037efcc2c2f0",
  measurementId: "G-QFPXD9DBGN"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: initialize analytics
getAnalytics(app);

// ✅ Export Firestore
export const db = getFirestore(app);
