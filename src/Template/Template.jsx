import { Outlet } from "react-router-dom"
import Header from '../Partials/Header/Header'
import Footer from '../Partials/Footer/Footer'


export default function Template() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}