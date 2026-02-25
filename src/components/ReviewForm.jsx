// import axios per chiamata al db per la nuova recensione 
import axios from "axios";

// import usestate (use effect non ci serve perche' la chimata viene eseguita al click di user)
import { useState } from "react";

// funzione per gestione form
function ReviewForm(props) {

    // riceviamo in prop id del libro
    const { movie_id, reloadReviews } = props

    // creiamo la stringa di ref all'endpoint del be
    const endPoint = "`http://localhost:3000/api/movies/${movie_id}/reviews`";

    // creao oggetto per valori di default form
    const initialFormData = {
        name: "",
        text: "",
        vote: 0
    };

    // var di stato per gestione oggetto dei valoru di input form
    const { formData, setFormData } = useState(initialFormData)

    // funzione di gestione dei dati del form 
    function setFieldValue(event) {
        setFormData(formData => ({
            ...formData,
            [event.target.name]: event.target.value,
        }));
    }

    // funzione per gestione chiamata al submit del form
    const handleSubmit = event => {

        // blocchiamo il comportamento di default
        event.preventDefault();

        // gestione chiamata in post all'endpoint di ref
        axios.post(endPoint, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(() => {
                // pulizia campi form dopo l'invio della nuova recensione
                setFormData(initialFormData);
                // ri- esecuzione funzione di chiamata su page padre
                reloadReviews();
            })
            .catch((err) => {
                console.log(err);
            })

    }

    return (
        <div className="card">
            <header className="card-header">
                <h5>Add your review</h5>
            </header>
            <div className="card-body">
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text"
                            name="name" className="form-control"
                            value={formData.name}
                            onChange={setFieldValue} />
                    </div>

                    <div className="form-group">
                        <label>Review</label>
                        <textarea className="form-control"
                            name="text"
                            value={formData.text}
                            onChange={setFieldValue}></textarea>
                    </div>

                    <div className="form-group">
                        <label>Voto</label>
                        <input type="number"
                            name="vote" min="1" max="5" className="form-control"
                            value={formData.vote}
                            onChange={setFieldValue} />
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>

                </form>
            </div>
        </div>
    )
}


export default ReviewForm