import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "",
  authDomain: "test-23c29.firebaseapp.com",
  projectId: "test-23c29",
  storageBucket: "test-23c29.appspot.com",
  messagingSenderId: "240342296530",
  appId: "1:240342296530:web:eba143d2694b05a54c4a0b",
  measurementId: "G-KY6L3H70PR",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
