import "./NavBar.css"
import { useNavigate } from "react-router-dom"


function NavBar() {
    const navigate = useNavigate()
    function handleLogout() {
        localStorage.removeItem('token')
        navigate("/login")
    }

    return (<> <nav> <button onClick={handleLogout}>Log out</button></nav>
        <div className="navbar">
            <h1>Trust the machine</h1>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About</li>
                <li>Analyze</li>
            </ul>
        </div>
    </>
    )
}

export default NavBar