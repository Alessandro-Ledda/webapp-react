// importazione libreria axios
import axios from "axios";

// importazione di state e effect
import { useState, useEffect } from "react";

import CardMovie from "../components/CardMovie";

// salviamo in una costante il nostri api
const endPoint = "http://localhost:3000/api/movies";

function HomePage() {

    // impostiamo la var di stato per gestione lista film
    const [movies, setMovies] = useState([]);

    // funzione che gestisce la chiamata axios alla rott aindex del BE
    function fetchMovie() {
        axios.get(endPoint)
            .then(res => { setMovies(res.data); })
            .catch(err => {
                console.log(err);
            })
            .finally()
    }

    // funzione di rendering della lista film
    function renderMovies() {
        return movies.map(movie => {
            return (
                <div className="wrap" key={movie.id}>
                    <CardMovie movieProp={movie} />
                </div>
            )
        })
    }

    // richiamo useEffect per gli eventuali effetti collaterali(protezione funzione)
    useEffect(fetchMovie, [])


    return (
        <>
            <h1>BOOL MOVIES</h1>
            <h2>Movies List</h2>

            <div className="home-container">
                <div className="content-home">
                    {renderMovies()}
                </div>
            </div>
        </>
    )
}

export default HomePage