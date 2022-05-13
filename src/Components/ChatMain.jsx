import ChatHeader from "./ChatHeader"
import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyA9Bigk5Erf9GmxrqNGaRg00aWeE8nXglE",
    authDomain: "shutthechatup.firebaseapp.com",
    projectId: "shutthechatup",
    storageBucket: "shutthechatup.appspot.com",
    messagingSenderId: "150965025960",
    appId: "1:150965025960:web:5bb3c24ad37742b92f169d",
    measurementId: "G-4YSH27MT9M"
})

const firestore = firebase.firestore();


export default function ChatMain({ user, auth }) {
    const messagesRef = firestore.collection('messages')

    return (
        <>
            <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
                <ChatHeader user={user} auth={auth} />

                <ChatMessages user={user} messagesRef={messagesRef} auth={auth} />

                <ChatInput auth={auth} messagesRef={messagesRef} />

            </div>
            <script>
                const el = document.getElementById('messages')
                el.scrollTop = el.scrollHeight
            </script>
        </>
    )
}