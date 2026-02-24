function CardReview(props) {

    const { name, vote, text } = props.reviewProp;

    return (
        <div className="card-review">
            <div className="card-body">
                <p className="card-text">{text}</p>
                <strong>{vote}</strong>
                <address><i>{name}</i></address>
            </div>
        </div>
    )
}

export default CardReview