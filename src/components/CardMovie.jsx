import { Link } from "react-router-dom";

function CardMovie() {

    return (
        <div className="card-movie">
            <div className="content-card">
                <img src="matrix.jpg" alt="" className="img-card" />
                <div className="card-body">
                    <h5>titolo film</h5>
                    <address><i>Director</i></address>
                    <p>abstract</p>
                    <Link to={`movies/1`} className="btn">torna ai film</Link>
                </div>
            </div>
        </div>
    )
}

export default CardMovie 