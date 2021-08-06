import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAfXN0PEgC7KTfjUoGTOaPE_5JW2JcSlWs",
    authDomain: "auth-horses.firebaseapp.com",
    projectId: "auth-horses",
    storageBucket: "auth-horses.appspot.com",
    messagingSenderId: "245555019253",
    appId: "1:245555019253:web:b929009420fe803e08b4bc",
};

firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export {
    googleAuthProvider,
    githubAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider,
    firebase,
}