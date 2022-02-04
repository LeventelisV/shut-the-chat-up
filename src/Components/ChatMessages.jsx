import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage'



export default function ChatMessages({user,messagesRef}) {

    
    const query = messagesRef.orderBy('createdAt').limit(20)
    const [messages] = useCollectionData(query )
    console.log(messages)
    return (
        <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">

            {/* {loading && <p>Loading</p>}
            {error && <p>error</p>} */}
            {messages && messages.map((message) => {
                console.log(message)
                return (
                    <div>lala</div>
                    // <ChatMessage message={message} user={user} key={message.id} />
            )})}


            <div className="chat-message">
                <div className="flex items-end justify-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks</span></div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144" alt="My profile" className="w-6 h-6 rounded-full order-2" />
                </div>
            </div>
            <div className="chat-message">
                <div className="flex items-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Thanks for your message David. I thought I'm alone with this issue. Please, 👍 the issue to support it :)</span></div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144" alt="My profile" className="w-6 h-6 rounded-full order-1" />
                </div>
            </div>
        </div>
    )
}