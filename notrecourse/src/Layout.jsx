import { NavbarStandard } from "./component/Navbar";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <NavbarStandard/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}