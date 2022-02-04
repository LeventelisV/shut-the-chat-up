import firebase from 'firebase/compat/app';
import { getAuth, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
export default function SignIn(){
    const auth = getAuth();
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
      }

    return (
    <button onClick={signInWithGoogle}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    SignIn
  </button>)
} 
//   <style>
//     .btn {
//       @apply font-bold py-2 px-4 rounded;
//     }
//     .btn-blue {
//       @apply bg-blue-500 text-white;
//     }
//     .btn-blue:hover {
//       @apply bg-blue-700;
//     }
//   </style>
