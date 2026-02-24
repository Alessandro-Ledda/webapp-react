import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <p className="text">Sorry, but the page you are looking for does not exist.</p>
            <Link className="btn" to="/">Back to home</Link>
        </div>
    )
}

export default NotFoundPage