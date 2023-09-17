import Main from "../Main"
import Navbar from "./Navbar"
import { lazy } from 'react'
import "./Layout.css"
const Player = lazy(() => import('./Player'))

const Layout = () => {
    return (
        <div className="layout-wraper">
            <Navbar />
            <Main />
            <Player />
        </div>
    )
}

export default Layout