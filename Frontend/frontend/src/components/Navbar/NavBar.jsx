
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import api from "../../api/client"
import "./NavBar.css"

function NavBar() {
    const [user, setUser] = useState(null)
    const [Loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        async function loadUser() {
            setLoading(true)
            try {
                setError("")
                const response = await api.get("/your")
                setUser(response.data)
            }
            catch (err) {
                setError("Could not load user.")
            }
            finally {
                setLoading(false)
            }
        }
        loadUser()
    }, [])
    function handleLogout() {
        localStorage.removeItem('token')
        navigate("/login")
    }



    return (<>
        <nav>  {user &&
            <span>How can I help you, {user.username}</span>}<button onClick={handleLogout}>Log out</button></nav>
        <div className="navbar">
            <h1>Geome</h1>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Get started</li>
                <li>Analyze</li>
            </ul>
        </div>
    </>
    )
}

export default NavBar