import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import './App.css';
import SignIn from './Components/SignIn'
import SignOut from './Components/SignOut'
import ChatMain from './Components/ChatMain'
import { useAuthState } from 'react-firebase-hooks/auth';



const auth = firebase.auth();

function App() {
  
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {/* <header className="App-header">

      </header> */}
      <section>{user ? <ChatMain user={user} auth={auth}/> : <SignIn />}</section>
    </div>
  );
}

export default App;
