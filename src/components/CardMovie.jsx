import { Link } from "react-router-dom";

function CardMovie(props) {
    // destrutturazione props
    const { id, title, director, abstract, image } = props.movieProp;

    return (
        <section className="container-card">
            <div className="card-movie">
                <div className="content-card">
                    <img src={image} alt={title} className="img-card" />
                    <div className="card-body">
                        <h5>{title}</h5>
                        <address><i>{director}</i></address>
                        <p>{abstract}</p>
                        <Link to={`movies/${id}`} className="btn">dettaglio film</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardMovie 