import { useEffect, useState } from "react";
import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function useFetchFirebase(query) {

    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    
        
            // setLoading(true)
            // try {
               const [messages] = useCollectionData(query)
            //     // setData(messages)
            //     // setError(null)
            // }
            // catch (err) {
            //     setError(err.message)
            // }
            // finally {
            //     setLoading(false)
            // }
       
   
    return { messages }
    // return { error, loading, data }
}