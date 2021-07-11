import React, { useEffect } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import './ProfileDetails.css'
import { PROFILE_INFO, UPDATE_PROFILE_MODAL } from '../../../../Redux/ActionType'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import UpdateProfile from '../UpdateProfile/UpdateProfile'
import { getProfileApi } from '../../../../Api/ProfileApi'


const mapStateToProps = state => {
    return {
        userInfo: state.userInfo,
        profileInfo: state.profileInfo,
        updateModal: state.updateModal
    }
}

function ProfileDetails(props) {

    useEffect(() => {

        getProfileApi().then(data => {
            // console.log(data)
            props.dispatch({
                type: PROFILE_INFO,
                value: data
            })
        })

    }, [])

    const updateModal = () => {
        props.dispatch({
            type: UPDATE_PROFILE_MODAL,
            value: true
        })
    }

    let imgSrc;
    if (props.profileInfo && props.profileInfo.photo) {
        let str = new Buffer.from(props.profileInfo.photo.data).toString("base64")
        imgSrc = `data:${props.profileInfo.photo.contentType};base64,${str}`
    } else {
        imgSrc = "/unknown.jpg"
    }


    return (
        <div>
            <UpdateProfile />
            <div className="profileDetails_upperImage">
                <FontAwesomeIcon onClick={updateModal} style={{ color: "white", fontSize: "25px", cursor: "pointer" }} icon={faUserEdit} />
                <img src={imgSrc} height="150px" alt="" />

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