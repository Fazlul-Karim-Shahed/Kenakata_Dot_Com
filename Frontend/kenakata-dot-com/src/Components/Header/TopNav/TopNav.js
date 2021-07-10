import React from 'react'
import './TopNab.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhoneAlt, social} from '@fortawesome/free-solid-svg-icons'

function TopNav() {
    return (
        <div>
            <div className="topNav">
                <div><FontAwesomeIcon style={{ fontSize: "2.5vh" }} icon={faPhoneAlt} /> <a href="tel:+880 01300100111">+880 01300100111</a> </div>
                <div><FontAwesomeIcon style={{ fontSize: "2.5vh" }} icon={faEnvelope} /> <a href="mailto:fazlul.shahed2000@gmail.com?subject = Feedback&body = Message">abcd@gmail.com</a> </div>
                <div className="social">
                    <a href="#">facebook</a>
                </div>
            </div>
        </div>
    )
}

export default TopNav

