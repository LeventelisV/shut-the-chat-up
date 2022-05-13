import moment from "moment"
export default function ChatMessage({ message, user, isMessageSent }) {
    
    const showTime = () => { 
        let date = new Date(message?.createdAt?.seconds * 1000) 
        let messageSent = moment(date).format('llll')
        return messageSent
    }

    return (
        <>
            {isMessageSent && <div className={"chat-message"}>
                <div className="flex items-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{message.text}</span></div>
                    </div>
                    <img src={message.photoURL} alt="sender's profile photo" className="w-6 h-6 rounded-full order-1" />
                </div>
                
                <div className="text-xs text-left ml-8 mt-1">{showTime()}</div>
            </div>}


            {!isMessageSent && <div className="chat-message">
                <div className="flex items-end justify-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{message.text}</span></div>
                    </div>
                    <img src={message.photoURL} alt="sender's profile photo" className="w-6 h-6 rounded-full order-2" />
                </div>
                <div className=" text-xs text-right mr-8 mt-1">{showTime()}</div>

            </div>}
        </>
    )
}