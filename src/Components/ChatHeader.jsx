import SignOut from './SignOut.tsx'

export default function ChatHeader({ user, auth }) {
    return (
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
            <div className="flex items-center space-x-4">
                <img src={user.photoURL} alt="me" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full" />
                <div className="flex flex-col leading-tight">
                    <div className="text-2xl mt-1 flex items-center">
                        <span className="text-gray-700 mr-3">{user.displayName}</span>
                        <span className="text-green-500">
                            <svg width={10} height={10}>
                                <circle cx={5} cy={5} r={5} fill="currentColor" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <SignOut auth={auth} />
            </div>
        </div>
    )
}