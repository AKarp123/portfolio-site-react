const { initializeApp } = require("firebase/app");
const { getFunctions } = require("firebase/functions");

const firebaseConfig = {
    apiKey: "AIzaSyD_g98BDjR17LFzhguJMWhJ16HNd4dPZf8",

    authDomain: "ashtonportfolio123.firebaseapp.com",

    projectId: "ashtonportfolio123",

    storageBucket: "ashtonportfolio123.appspot.com",

    messagingSenderId: "559117298698",

    appId: "1:559117298698:web:cd1c787ce25e604662c3f3",
};

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);
export { app, functions };
