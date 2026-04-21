import { useState, useEffect } from "react"
import api from "../api/client"


function History() {
    const [history, setHistory] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    useEffect(() => {
        async function loadHistory() {
            const response = await api.get("/history")
            setHistory(response.data)

        }
        loadHistory()
    }, [])
    return (<> <h1>History</h1>
        {history.map(item => <p key={item.id}>{item.claim}</p>)}
    </>
    )


}

export default History