import { useState, useEffect } from "react"
import api from "../api/client"


function History() {
    const [history, setHistory] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    useEffect(() => {
        async function loadHistory() {
            setLoading(true)
            try {
                setError("")
                const response = await api.get("/history")
                setHistory(response.data)
            } catch (err) {
                setError("History not found.")
            }
            finally {
                setLoading(false)
            }
        }
        loadHistory()
    }, [])
    return (<> <h1>History</h1>
        {history.map(item => <p key={item.id}>{item.claim}</p>)}
        {
            error &&
            <p style={{ color: "red" }}>{error}</p>
        }
        {loading &&
            <p disabled={loading}>{loading ? "Loading..." : "Loading"}</p>
        }
    </>
    )


}

export default History