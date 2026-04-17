// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcsIT15M1O_ZyWXt5umKqbbUuuRRuyV2I",
  authDomain: "rozenkrans-marathon-website.firebaseapp.com",
  projectId: "rozenkrans-marathon-website",
  storageBucket: "rozenkrans-marathon-website.firebasestorage.app",
  messagingSenderId: "844561638126",
  appId: "1:844561638126:web:7bf98c0385062f6a3589ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addToMaillist(email: string) {
  await setDoc(doc(db, "maillist", email), {
    created_at: new Date(),
  });
}

export async function addToEventSignup(email: string, name: string) {
  await setDoc(doc(db, "eventsignup", email), {
    created_at: new Date(),
    name,
  });
}
