import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import { useEffect, useRef, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage'
import useFetchFirebase from '../CustomHooks/UseFetchFirebase';

export default function ChatMessages({ user, messagesRef, auth }) {
    const endOfMessages = useRef(null)
    
    const query = messagesRef.orderBy('createdAt').limit(20)

    const {messages} = useFetchFirebase(query)
    console.log(messages)

    // const [messages] = useCollectionData(query)

    useEffect(() => {
        endOfMessages.current?.scrollIntoView({
            behavior: 'smooth', block: 'end',
            inline: 'nearest'
        });
    })

    return (
        <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">

            {/* {loading && <p>Loading</p>}
            {error && <p>error</p>} */}
            {messages && messages.map((message) => {
                const isMessageSent = message.uid === auth.currentUser.uid;

                return (
                    <ChatMessage message={message} user={user} key={message.messageId} isMessageSent={isMessageSent} />
                )
            })}
            <div ref={endOfMessages} />
        </div>
    )
}