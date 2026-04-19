import { useState } from "react"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <form>
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

