import { useState } from "react"
import api from "../api/client"



function Analyze() {
    const [text, setText] = useState("")
    const [results, setResults] = useState(null)
    async function handleSubmit(e) {
        e.preventDefault()
    }


    return <form onSubmit={handleSubmit}>
        <textarea
            value={text}
            onChange={e => setText(e.target.value)}

        />
        <button type="submit">Analyze</button>
    </form>
}


export default Analyze