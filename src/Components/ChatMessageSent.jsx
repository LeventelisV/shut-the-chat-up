export default function ChatMessageSent({ message, user }) {
    const showDate = () => {
        let date = new Date(message?.createdAt?.seconds * 1000)
        let hours = date.getHours()
        let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

        let messageSent = hours + ' : ' + minutes
        return messageSent
    }
    return (
        <div className={"chat-message"}>
            <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{message.text}</span></div>
                </div>
                <img src={message.photoURL} alt="sender's profile photo" className="w-6 h-6 rounded-full order-1" />
            </div>
            <div className="text-xs flex items-start ml-8 mt-1">{showDate()}</div>
        </div>
    )
}