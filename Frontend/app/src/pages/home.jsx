import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import "./home.css"

function Home() {


    return (<>
        <div className="hero">
            <a className="hero-badge" href="/" >AI-powered truth detection</a>
            <h1>Verify what's <em className="hero-true">true</em>.<br />
                In text. In code.</h1>
            <p> App uses advanced AI to fact-check claims, audit code, <br />
                and surface the signals you need to trust what you read</p>
            <div className="hero-actions">
                <Link to="/signup" className="hero-verify" >Start verifying free <ArrowRight /> </Link>
                <Link to="/" className="hero-work">See how it works</Link>
            </div>




        </div>

    </>
    )
}

export default Home