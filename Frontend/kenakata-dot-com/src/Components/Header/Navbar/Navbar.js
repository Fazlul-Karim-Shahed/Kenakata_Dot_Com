import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const mapStateToProps = state => {
    return{
        authenticated : state.authenticated,
        userInfo : state.userInfo
    }

}

function Navbar(props) {

    const open = () => {
        document.getElementById("overlay").style.height = "100%"
    }

    const close = () => {
        document.getElementById("overlay").style.height = "0%"
    }

    return (
        <div className="cont">
            <div className="navbar">
                <div className="navbar_left">
                    <div><Link className="logo" style={{ color: "white", fontSize: "4vh" }} to="/">Logo</Link></div>
                    <div onClick={open} className="menu_icon">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
                <div id="overlay" className="navbar_right">
                    <h1 onClick={close} className="closeBtn">x</h1>
                    <div className="navbar_right_links">
                        <Link onClick={close} className="link" style={{ color: "white" }} to="/">Home</Link>
                        <Link onClick={close} className="link" style={{ color: "white" }} to="/shop">Shop</Link>
                        <Link onClick={close} className="link" style={{ color: "white" }} to={props.authenticated ? `/${props.userInfo.role}/${props.userInfo._id}/dashboard` : `/signin`}>Dashboard</Link>
                        <Link onClick={close} className="link" style={{ color: "white" }} to="/contact">Contact</Link>
                        {props.authenticated ? <Link onClick={close} className="link" style={{ color: "white" }} to="/logout">Logout</Link> : <Link onClick={close} className="link" style={{ color: "white" }} to="/signin">Login</Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Navbar)