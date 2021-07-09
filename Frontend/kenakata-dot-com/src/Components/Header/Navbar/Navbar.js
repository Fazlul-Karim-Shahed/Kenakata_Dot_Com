import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {

    const menu = () => {
        if (document.getElementById("overlay").style.height == "100%") {
            document.getElementById("overlay").style.height = "0%"
        } else {
            document.getElementById("overlay").style.height = "100%"
        }
    }

    return (
        <div>
            <div className="navbar">
                <div className="navbar_left">
                    <div><Link className="logo" style={{ color: "white", fontSize: "4vh" }} to="/">Logo</Link></div>
                    <div onClick={menu} className="menu_icon">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
                <div id="overlay" className="navbar_right">
                    <div className="navbar_right_links">
                        <Link onClick={menu} className="link" style={{ color: "white" }} to="/">Home</Link>
                        <Link onClick={menu} className="link" style={{ color: "white" }} to="/dashboard">Dashboard</Link>
                        <Link onClick={menu} className="link" style={{ color: "white" }} to="/about">About</Link>
                        <Link onClick={menu} className="link" style={{ color: "white" }} to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar