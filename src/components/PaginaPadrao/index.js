import Banner from "components/Banner";
import { Outlet } from "react-router-dom";

function PaginaPadrao() {
    return (
        <main>
            <Banner />

            <Outlet />
        </main>
    )
}

export default PaginaPadrao;