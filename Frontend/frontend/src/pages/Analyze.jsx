import { useState } from "react"
import api from "../api/client"



function Analyze() {
    const [text, setText] = useState("")
    const [results, setResults] = useState(null)
    async function handleSubmit(e) {
        e.preventDefault()
        const response = await api.post("/analyze", null, { params: { text } })
        setResults(response.data)
    }


    return (<> <form onSubmit={handleSubmit}>
        <textarea
            value={text}
            onChange={e => setText(e.target.value)}

        />
        <button type="submit">Analyze</button>
    </form>
        {results && (
            <div>
                <p>Score: {results.score}</p>
                <p>Verdict: {results.verdict}</p>
                <p>risks: {results.risks}</p>
                <p>pros: {results.pros}</p>
                <p>recommend: {results.recommend}</p>
            </div>
        )}
    </>)
}


export default Analyze