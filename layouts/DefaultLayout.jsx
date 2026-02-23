import { Outlet } from "react-router-dom";

import MainHeader from "../src/components/MainHeader";

function DefaultLayout() {
    return (
        <>
            <MainHeader />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout