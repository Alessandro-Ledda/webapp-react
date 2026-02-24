import { Link, useParams, useNavigate } from "react-router-dom";

// importo axios per chiamata al BE
import axios from "axios";

// importo state e effect
import { useState, useEffect } from "react";

// import card delle recensioni
import CardReview from "../components/CardReview";

// salvo la nostra api in var
const endPoint = "http://localhost:3000/api/movies/";

function MoviePages() {

    // recuperiamo l'id del film di ref dall'url
    const { id } = useParams();

    // creamo l'istanza del navigate per poterlo utilizzare(nel caso in cui una rotta di un film non esiste )
    const redirect = useNavigate();

    // settiamo var di stato per gestione film(stato iniziale oggetto vuoto)
    const [movie, setMovie] = useState({});

    // funzione per gestione chiamata alla rotta di show di BE
    function fetchMovie() {
        axios.get(endPoint + id)
            .then(res => { setMovie(res.data); })
            .catch(err => {
                console.log(err);
                // controllo per rotte inesistenti
                if (err.status === 404) redirect('/404')
            })
            .finally()
    }

    // richiamo useEffect per controllo su effetti colaterali
    useEffect(fetchMovie, []);

    // funzione di rendering per listato film
    function renderReviews() {
        return movie.reviews?.map(review => {
            return (
                <CardReview reviewProp={review} key={review.id} />
            )
        })
    }
    return (
        <>
            <header id="movie">
                <div className="page-container">
                    <img src={movie.image} alt={movie.title} />
                </div>
                <h1>{movie.title}</h1>
                <h3>{movie.director}</h3>
                <p>{movie.abstract}</p>
            </header>
            <section id="review">
                <header className="review-container">
                    <h4>recensioni della community</h4>
                </header>
                {/* richaimo funzione di rendering */}
                {renderReviews()}
            </section>
            <footer className="review-footer">
                <Link className="btn" to="/">Ritorna alla Home</Link>
            </footer>
        </>
    )
}

export default MoviePages