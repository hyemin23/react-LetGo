import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY
    , authDomain: process.env.REACT_APP_AUTH_DOMAIN
    , projectId: process.env.REACT_APP_PROJECT_ID
    , storageBucket: process.env.REACT_APP_STORAGE_BUCKET
    , messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
    , appId: process.env.REACT_APP_APP_ID
    , measurementId: process.env.REACT_APP_MEASUREMENT_ID
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//파이어베이스 인스턴스 생성
export const firebaseInstance = firebase;

//파이어베이스 보안 재사용
export const authService = firebase.auth();

//파이어베이스 database 사용
export const dbService = firebase.firestore();