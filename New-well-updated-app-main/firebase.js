

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDHIw0tEXMXwHap3On_DLNxnpmXlnphR_k",
  authDomain: "qrypti.firebaseapp.com",
  projectId: "qrypti",
  storageBucket: "qrypti.firebasestorage.app",
  messagingSenderId: "42425410922",
  appId: "1:42425410922:web:0ae9f83f072db639ae3113"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Test writing to Firestore
async function testFirebase() {
  try {
    await addDoc(collection(db, "testCollection"), {
      message: "Firebase is working!",
      time: new Date()
    });
    console.log("✅ Success: Data added");
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

testFirebase();
