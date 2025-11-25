// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4M50I28SnTdVwG4wQ6vGg6MilwvDj8JQ",
  authDomain: "goreneller-8b95c.firebaseapp.com",
  projectId: "goreneller-8b95c",
  storageBucket: "goreneller-8b95c.firebasestorage.app",
  messagingSenderId: "767564800982",
  appId: "1:767564800982:web:f8c082481a622397357a77",
  measurementId: "G-348N8NNX7F"
};

// Initialize Firebase
console.log('🔥 Firebase başlatılıyor...');

const app = initializeApp(firebaseConfig);
console.log('✅ Firebase app başlatıldı');

// Initialize Firebase services
const auth = getAuth(app);
console.log('✅ Firebase Auth başlatıldı');

const db = getFirestore(app);
console.log('✅ Firestore başlatıldı');

const storage = getStorage(app);
console.log('✅ Storage başlatıldı');

// Initialize Analytics with error handling
let analytics;
try {

  // Analytics - sadece production'da
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    analytics = getAnalytics(app);
    console.log('✅ Analytics başlatıldı');
  } else {
    console.log('⚠️ Analytics localhost\'ta devre dışı');
    analytics = undefined;
  }
} catch (analyticsError) {
  console.warn('⚠️ Analytics başlatılamadı:', analyticsError);
  analytics = undefined;
}

console.log('🎉 Tüm Firebase servisleri başarıyla başlatıldı!');

export { auth, db, storage, analytics };
export default app;
