// Import Firebase modules (use module script in HTML or direct import)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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
const auth = getAuth(app);

// Sign-up function
window.Sign_up = async function () {
  const username = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    alert(`✅ Account created for ${username}`);
    console.log(user);
    // Optionally, redirect to login or dashboard page
    // window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Error:", error.message);
    alert(`❌ ${error.message}`);
  }
};