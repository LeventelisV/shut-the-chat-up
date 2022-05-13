import { useState } from "react"
import ChatHeader from "./ChatHeader"
import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCx0Y5gGLV_h0fey_7tAnvVjRRJbT2r47E",
    authDomain: "chat-application-9f3de.firebaseapp.com",
    projectId: "chat-application-9f3de",
    storageBucket: "chat-application-9f3de.appspot.com",
    messagingSenderId: "804049357357",
    appId: "1:804049357357:web:a74a9d11a49c8cfd0246a4",
    measurementId: "G-J80SZXXWBW"
})


const firestore = firebase.firestore();


export default function ChatMain({ user, auth }) {

    const messagesRef = firestore.collection('messages')

    return (
        <>
            <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
                <ChatHeader user={user} auth={auth} />

                <ChatMessages user={user} messagesRef={messagesRef} auth={auth}/>

                <ChatInput auth={auth} messagesRef={messagesRef} />

            </div>

            <style>
                {`.scrollbar-w-2::-webkit-scrollbar {
width: 0.25rem;
height: 0.25rem;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
--bg-opacity: 1;
background-color: #f7fafc;
background-color: rgba(247, 250, 252, var(--bg-opacity));
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
--bg-opacity: 1;
background-color: #edf2f7;
background-color: rgba(237, 242, 247, var(--bg-opacity));
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
border-radius: 0.25rem;
}`}
            </style>

            <script>
                const el = document.getElementById('messages')
                el.scrollTop = el.scrollHeight
            </script>
        </>
    )
}