import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import SignIn from './Components/SignIn'
import ChatMain from './Components/ChatMain'
import { useAuthState } from 'react-firebase-hooks/auth';



const auth = firebase.auth();

function App() {

const [user] = useAuthState(auth);

  return (
    <section>
      {user ? <ChatMain user={user} auth={auth} /> : <SignIn />}
    </section>
  );
}

export default App;
