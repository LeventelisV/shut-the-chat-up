import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import './App.css';
import SignIn from './Components/SignIn'
import SignOut from './Components/SignOut'
import ChatMain from './Components/ChatMain'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyA9Bigk5Erf9GmxrqNGaRg00aWeE8nXglE",
  authDomain: "shutthechatup.firebaseapp.com",
  projectId: "shutthechatup",
  storageBucket: "shutthechatup.appspot.com",
  messagingSenderId: "150965025960",
  appId: "1:150965025960:web:5bb3c24ad37742b92f169d",
  measurementId: "G-4YSH27MT9M"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
console.log(user)
  return (
    <div className="App">
      {/* <header className="App-header">

      </header> */}
      <section>{user ? <ChatMain user={user}/> : <SignIn />}</section>
    </div>
  );
}

export default App;
