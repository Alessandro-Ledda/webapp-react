import CardMovie from "../components/CardMovie";

function HomePage() {
    return (
        <>
            <h1>BOOL MOVIES</h1>
            <h2>Movies List</h2>

            <div className="home-container">
                <div className="content-home">
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                </div>
            </div>
        </>
    )
}

export default HomePage