import { useState } from "react"
import api from "../api/client"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    async function handleSubmit(e) {
        e.preventDefault()
        const data = new URLSearchParams()
        data.append("username", username)
        data.append("password", password)
        const response = await api.post("/login", data)
        console.log(response.data)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button type="submit">Log in</button>
        </form>
    )
}



export default Login

