
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCz9E53a2OE6suA5_mS9yFfKfUyHZMI5mM",
  authDomain: "ocean-vision.firebaseapp.com",
  projectId: "ocean-vision",
  storageBucket: "ocean-vision.appspot.com",
  messagingSenderId: "556942179928",
  appId: "1:556942179928:web:7eeff855c390c4d822542d",
  measurementId: "G-PWKVH6QHEQ"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export default storage