import 'firebase/app'
import { initializeApp } from 'firebase/app'

import 'firebase/storage'
import { getStorage } from 'firebase/storage'

const firbaseConfig = initializeApp({
        apiKey: "AIzaSyDxIPGiZ2AMvhkr_wtBP6uPmj8WfIC7AZI",
        authDomain: "test-23c29.firebaseapp.com",
        projectId: "test-23c29",
        storageBucket: "test-23c29.appspot.com",
        messagingSenderId: "240342296530",
        appId: "1:240342296530:web:eba143d2694b05a54c4a0b",
        measurementId: "G-KY6L3H70PR"
})

const storage = getStorage(firbaseConfig);

export default storage