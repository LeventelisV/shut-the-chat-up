import { getAuth } from 'firebase/auth';

export default function ChatMessage({ message, user }) {
    const auth = getAuth();

    const messageClass = 'uid' === auth.currentUser.uid ? 'sent' : 'received';
// console.log(message)
 let date = new Date(message.created_at.seconds * 1000)

    return (
        <div className="chat-message">
            <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{message.text}</span></div>
                </div>
                <img src={user.photoURL} alt="My profile" className="w-6 h-6 rounded-full order-1" />
            </div>
            {/* <div>{}</div> */}
        </div>
    )
}