import "firebase/auth";
import 'firebase/database';
import "firebase/firestore";

import firebase from "firebase";

// Firebaseの接続情報をconfigオブジェクトに保持
const config = {
    apiKey: "AIzaSyB9et4xw5OaVBhEKcbULVBG9OFsTunoIW8",
    authDomain: "my-project-dd99a.firebaseapp.com",
    databaseURL: "https://my-project-dd99a.firebaseio.com",
    projectId: "my-project-dd99a",
    storageBucket: "my-project-dd99a.appspot.com",
    messagingSenderId: "1007069274632",
    appId: "1:1007069274632:web:3a75937fda3356c262a7bd",
    measurementId: "G-8KXK6H8CS2"
};
firebase.initializeApp(config);

// Authサービスを作ってエクスポート。各画面でこれを利用する
const auth = firebase.auth();
const database = firebase.firestore();

export {auth, database};