import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDO6ADQRkmajvMrlgNeQd0LSNuVDj9Wubc",
  authDomain: "resume-builder-9ba7e.firebaseapp.com",
  projectId: "resume-builder-9ba7e",
  storageBucket: "resume-builder-9ba7e.appspot.com",
  messagingSenderId: "728483761685",
  appId: "1:728483761685:web:cbcdd0ee97498c25cc881c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
