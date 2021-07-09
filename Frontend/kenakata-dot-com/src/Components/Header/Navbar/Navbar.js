import React from 'react'
import './Navbar.css'

function Navbar() {

    const menu = () => {
        if (document.getElementById("overlay").style.width == "100%"){
            document.getElementById("overlay").style.width = "0%"
        }else{
            document.getElementById("overlay").style.width = "100%"
        }
    }

    return (
        <div>
            <div className="navbar">
                <div className="navbar_left">
                    <div>logo</div>
                    <div onClick={menu} className="menu_icon">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
                <div id="overlay" className="navbar_right">
                    <div className="navbar_right_links">
                        <a href="#">Home</a>
                        <a href="#">Home</a>
                        <a href="#">Home</a>
                        <a href="#">Home</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar