


export default function SignOut({auth}){
    
    const signOut = () => {
        auth.signOut()
    }
    return (
        auth.currentUser && 
        <button onClick={signOut} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        SignOut</button>
    )
}