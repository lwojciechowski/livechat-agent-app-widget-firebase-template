import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import './App.css'
import { useLcLogin } from './useLcLogin';

const firebaseConfig = {
  // copy paste config from firebase console
}
const firebaseAuthFnUrl = 'http://localhost:5000/vips-test-lc/us-central1/vip/auth';

const livechatConfig = {
  dpsClientId: '',
  backendAddress: '',
}

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(function(user) {
  // You can use firebase user here
  console.log(user);
});


function App() {
  useLcLogin(livechatConfig.dpsClientId, firebaseAuthFnUrl)

  return (
    <div className="App">
      <header className="App-header">Demo App</header>
      <section>
        <div className="livechat-login-button" />
      </section>
    </div>
  )
}

export default App
