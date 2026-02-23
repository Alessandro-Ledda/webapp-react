import { Link } from "react-router-dom"

function MainHeader() {
    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    <Link className="logo">Bool Movies</Link>
                </div>
            </nav>
        </header>
    )
}

export default MainHeader