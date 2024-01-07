import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3loxoX_HuCB3dLodickXqweUpooWfRws",
  authDomain: "foodify-login.firebaseapp.com",
  projectId: "foodify-login",
  storageBucket: "foodify-login.appspot.com",
  messagingSenderId: "667203784186",
  appId: "1:667203784186:web:5a48e35675d1a697da2843",
  measurementId: "G-W6KR6XVLP9"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')
