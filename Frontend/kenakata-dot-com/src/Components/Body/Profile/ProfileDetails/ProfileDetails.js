import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import './ProfileDetails.css'
import { PROFILE_INFO } from '../../../../Redux/ActionType'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const mapStateToProps = state => {
    return {
        userInfo: state.userInfo,
        profileInfo: state.profileInfo
    }
}

function ProfileDetails(props) {


    fetch(process.env.REACT_APP_LOCAL_PORT + '/profile/', {
        method: "GET",
        headers: {
            "Authorization": localStorage.getItem("kenakata-token")
        }
    }).then(res => res.json())
        .then(data => {
            props.dispatch({
                type: PROFILE_INFO,
                value: data
            })
        })




    return (
        <div>
            <div className="profileDetails_upperImage">
                <Link to="/update-profile">
                    <FontAwesomeIcon style={{ color: "white", fontSize: "25px" }} icon={faUserEdit} />
                </Link>
                <img src="/unknown.jpg" height="150px" alt="" />

            </div>

            <div className="profileDetails_lowerDetails">
                <div className="profileDetails_left">
                    <>Name</>
                </div>
                <div className="profileDetails_right">{props.userInfo.firstName} {props.userInfo.lastName}</div>
            </div><hr />

            <div className="profileDetails_lowerDetails">
                <div className="profileDetails_left">
                    <>Email</>
                </div>
                <div className="profileDetails_right">{props.userInfo.email}</div>
            </div><hr />

            <div className="profileDetails_lowerDetails">
                <div className="profileDetails_left">
                    Mobile
                </div>
                <div className="profileDetails_right">{props.userInfo.mobile}</div>
            </div><hr />

            <div className="profileDetails_lowerDetails">
                <div className="profileDetails_left">
                    Address 1
                </div>
                <div className="profileDetails_right">{props.profileInfo != null && props.profileInfo.address1 ? props.profileInfo.address1 : ""}</div>
            </div><hr />

            <div className="profileDetails_lowerDetails">
                <div className="profileDetails_left">
                    Address 2
                </div>
                <div className="profileDetails_right">{props.profileInfo != null && props.profileInfo.address2 ? props.profileInfo.address2 : ""}</div>
            </div><hr />

            <div className="profileDetails_lowerDetails">
                <div className="profileDetails_left">
                    <>City</>
                </div>
                <div className="profileDetails_right">{props.profileInfo != null && props.profileInfo.city ? props.profileInfo.city : ""}</div>
            </div><hr />

            <div className="profileDetails_lowerDetails">
                <div className="profileDetails_left">
                    Post Code
                </div>
                <div className="profileDetails_right">{props.profileInfo != null && props.profileInfo.postCode ? props.profileInfo.postCode : ""}</div>
            </div><hr />

            <div className="profileDetails_lowerDetails">
                <div className="profileDetails_left">
                    <>Fax</>
                </div>
                <div className="profileDetails_right">{props.profileInfo != null && props.profileInfo.fax ? props.profileInfo.fax : ""}</div>
            </div>
        </div>
    )
}


export default connect(mapStateToProps)(ProfileDetails)