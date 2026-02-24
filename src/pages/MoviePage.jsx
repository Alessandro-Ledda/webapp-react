import { Link } from "react-router-dom";

import CardReview from "../components/CardReview";

function MoviePages() {
    return (
        <>
            <header id="movie">
                <div className="page-container">
                    <img src="/imgs/matrix.jpg" alt="" />
                </div>
                <h1>titolo film</h1>
                <h3>autore</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum provident eos dignissimos odit doloribus autem sit nostrum magni hic ipsam? Reprehenderit blanditiis officiis similique nihil rem quasi consectetur doloremque corporis!</p>
            </header>
            <section id="review">
                <header className="review-container">
                    <h4>recensioni della community</h4>
                </header>
                <CardReview />
                <CardReview />
                <CardReview />
                <CardReview />
                <CardReview />
            </section>
            <footer className="review-footer">
                <Link className="btn" to="/">Ritorna alla Home</Link>
            </footer>
        </>
    )
}

export default MoviePages