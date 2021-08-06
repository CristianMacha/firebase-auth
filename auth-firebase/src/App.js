import React, { useState } from 'react'

import './App.css';
import { firebase, googleAuthProvider, githubAuthProvider, facebookAuthProvider, twitterAuthProvider } from './firebase/config'

export const App = () => {
  const [user, setUser] = useState('');

  const handleGoogleLogin = () => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(userCred => {
        console.log(userCred);
      })
  }

  const handleGithubLogin = () => {
    firebase.auth().signInWithPopup(githubAuthProvider)
      .then(userCred => {
        console.log(userCred);
      })

  }

  const handleFacebookLogin = () => {
    firebase.auth().signInWithPopup(facebookAuthProvider)
      .then(userCred => console.log(userCred))
  }

  const handleTwitterLogin = () => {
    firebase.auth().signInWithPopup(twitterAuthProvider)
      .then(userCred => {
        console.log(userCred);
      });
  }

  const token = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user.email || user.displayName)
        //setUser(user.displayName)
        firebase.auth().currentUser.getIdToken(true).then(idToken => console.log('token', idToken));
      } else {
        console.log('cerrado');
      }
    })
  }

  
  const signOut = () => {
    firebase.auth().signOut().then(() => console.log('ok')).catch(error => console.error(error));
  }
  
  token();

  return (
    <div>
      <button onClick={handleGoogleLogin}>Google</button>
      <button onClick={handleGithubLogin}>Github</button>
      <button onClick={handleFacebookLogin}>Facebook</button>
      <button onClick={handleTwitterLogin}>Twitter</button>
      <button onClick={token}>token</button>
      <button onClick={signOut}>Cerrar sesion</button>
      <br></br>
      <h1>{user}</h1>
    </div>
  )
}
