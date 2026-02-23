import { Link } from "react-router-dom";

function CardMovie() {

    return (
        <div className="card-movie">
            <div className="content-card">
                <img src="" alt="" className="img-card" />
                <div className="card-body">
                    <h5>titolo film</h5>
                    <address><i>Director</i></address>
                    <p>abstract</p>
                    <Link to={`movies/1`} className="btn"></Link>
                </div>
            </div>
        </div>
    )
}

export default CardMovie 