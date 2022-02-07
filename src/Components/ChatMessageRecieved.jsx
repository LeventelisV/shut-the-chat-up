export default function ChatMessageRevieved({ message, user }) {
    const showDate = () => {
        let date = new Date(message?.createdAt?.seconds * 1000)
        let hours = date.getHours()
        let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

        let messageSent = hours + ' : ' + minutes
        return messageSent
    }
    return (
        <div className="chat-message">
            <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{message.text}</span></div>
                </div>
                <img src={user.photoURL} alt="sender's profile photo" className="w-6 h-6 rounded-full order-2" />
            </div>
            <div className=" text-xs flex  mr-8 mt-1">{showDate()}</div>

        </div>
    )
}