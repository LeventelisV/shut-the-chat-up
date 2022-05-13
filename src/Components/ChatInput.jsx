import { useState } from "react"
import firebase from 'firebase/compat/app';
import { v4 as uuidv4 } from 'uuid';

export default function ChatInput({ auth, messagesRef }) {
    const [inputValue, setInputValue] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()

        if (inputValue.replace(/\s/g, "").length) {
            const { uid, photoURL } = auth.currentUser;
            let mid = uuidv4()
            await messagesRef.add({
                text: inputValue,
                uid,
                messageId: mid,
                photoURL,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            setInputValue('')
        }
    }

    return (<>
        <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
            <form className="relative flex" onSubmit={sendMessage}>
                <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} placeholder="Write Something" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3" />
                <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                    <button type="submit" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 transform rotate-90">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </button>
                </div>
            </form>
        </div></>)
}