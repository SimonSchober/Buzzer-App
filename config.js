import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBP2dM0PPgQESHa8ZxwXN10OT2BwPFM2kc",
  authDomain: "buzzer-app-37bdf.firebaseapp.com",
  databaseURL: "https://buzzer-app-37bdf-default-rtdb.firebaseio.com",
  projectId: "buzzer-app-37bdf",
  storageBucket: "buzzer-app-37bdf.appspot.com",
  messagingSenderId: "366411084451",
  appId: "1:366411084451:web:4be5ef4ecc3218632ac516"
};

// Initialize Firebase
if (!firebase.apps.length) {
  // Initialize Firebase if not already initialized
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();