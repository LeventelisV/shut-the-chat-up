


export default function SignOut({auth}){
    
    const signOut = () => {
        auth.signOut()
    }
    return (
        auth.currentUser && <button onClick={signOut}>SignOut</button>
    )
}