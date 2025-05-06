// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASWw8TBpojHfj1MF6rsItNLjCi_a9srls", // Replace with your actual API key
  authDomain: "sharp-startup-html.firebaseapp.com",
  projectId: "sharp-startup-html",
  storageBucket: "sharp-startup-html.appspot.com", // Corrected: .appspot.com
  messagingSenderId: "256813347084",
  appId: "1:256813347084:web:6224ad785141d69ab0d929",
  measurementId: "G-08E7485VY0"
};

// Initialize Firebase
try {
    const app = initializeApp(firebaseConfig);
    // Initialize Analytics and get a reference to the service
    const analytics = getAnalytics(app);
    console.log("Firebase initialized and Analytics enabled.");
} catch (e) {
    console.error("Error initializing Firebase:", e);
}
