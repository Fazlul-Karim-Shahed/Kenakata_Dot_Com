import React from 'react'
import { connect } from 'react-redux'
import { PROFILE_INFO, UPDATE_PROFILE_MODAL } from '../../../../Redux/ActionType'
import './UpdateProfile.css'
import { Formik } from 'formik'
import { getProfileApi, updateProfileApi } from '../../../../Api/ProfileApi'


const mapStateToProps = state => {
    return {
        updateModal: state.updateModal,
        profileInfo: state.profileInfo
    }
}

function UpdateProfile(props) {

    const modal = () => {
        props.dispatch({
            type: UPDATE_PROFILE_MODAL,
            value: false
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
            <div style={props.updateModal ? { display: "block" } : { display: "none" }} className="updateProfile_container">
                <div className="updateProfile_form">
                    <div>

                    </div>
                    <div>
                        <Formik
                            initialValues={{
                                address1: props.profileInfo === null ? '' : props.profileInfo.address1,
                                address2: props.profileInfo === null ? '' : props.profileInfo.address2,
                                postCode: props.profileInfo === null ? '' : props.profileInfo.postCode,
                                fax: props.profileInfo === null ? '' : props.profileInfo.fax,
                                city: props.profileInfo === null ? '' : props.profileInfo.city,

                            }}

                            onSubmit={values => {


                                let myForm = document.getElementById("myForm")

                                updateProfileApi(myForm).then(data => {
                                    getProfileApi().then(data => {
                                        props.dispatch({
                                            type: PROFILE_INFO,
                                            value: data
                                        })
                                        modal()
                                    })
                                })




                            }}

                        >

                            {({ values, errors, handleChange, handleSubmit }) => <div>

                                <form onSubmit={handleSubmit} id="myForm" action="">

                                    <label htmlFor="photo">
                                        <img src={imgSrc} height="150px" alt="" />
                                    </label>
                                    <input style={{ display: "none" }} type="file"
                                        id="photo"
                                        name="photo"
                                        onChange={handleChange}
                                        className="updateProfile_input"
                                    />
                                    <input type="text"
                                        name="address1"
                                        value={values.address1}
                                        onChange={handleChange}
                                        placeholder="address 1"
                                        className="updateProfile_input"
                                    />
                                    <input type="text"
                                        name="address2"
                                        value={values.address2}
                                        onChange={handleChange}
                                        placeholder="address 2"
                                        className="updateProfile_input"
                                    />
                                    <input type="text"
                                        name="city"
                                        value={values.city}
                                        onChange={handleChange}
                                        placeholder="city"
                                        className="updateProfile_input"
                                    />
                                    <input type="text"
                                        name="postCode"
                                        value={values.postCode}
                                        onChange={handleChange}
                                        placeholder="Post Code"
                                        className="updateProfile_input"
                                    />
                                    <input type="text"
                                        name="fax"
                                        value={values.fax}
                                        onChange={handleChange}
                                        placeholder="fax"
                                        className="updateProfile_input"
                                    />
                                    <button type="submit">Update</button>
                                </form>

                            </div>}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(UpdateProfile)