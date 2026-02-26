import { Outlet } from "react-router-dom";

import MainHeader from "../components/MainHeader"

// import hook costum del contesto globale
import { useGlobal } from "../GlobalContext";

// import del loader
import Loader from "../components/Loader";

function DefaultLayout() {

    // attivo l'utilizzo del/dei valore/i messi a disposizione del contesto globale
    const { isLoading } = useGlobal();

    return (
        <>
            <MainHeader />
            <main className="container">
                <Outlet />
            </main>
            {isLoading && <Loader />}
        </>
    )
}

export default DefaultLayout