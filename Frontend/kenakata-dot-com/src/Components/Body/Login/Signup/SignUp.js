import React from 'react'
import {Formik} from 'formik'
import { connect } from 'react-redux'
import { FAST_AUTH } from '../../../../Redux/ActionType'
import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { signUpApi } from '../../../../Api/AuthApi'

const mapStateToProps = state => {
    return{

    }
}

function SignUp(props) {
    return (
        <div>
            <Formik

                initialValues={{
                    email: '',
                    password: '',
                    firstName: '',
                    lastName : '',
                    mobile : '' 
                }}

                validate={(values) => {

                }}

                onSubmit={(values) => {
                    signUpApi(values)
                        .then(data => {
                            if (data.type == false) throw data.message

                            localStorage.setItem("kenakata-token", data.token)
                            const userInfo = jwtDecode(localStorage.getItem("kenakata-token"))

                            props.dispatch({
                                type: FAST_AUTH,
                                value: true,
                                userInfo: userInfo
                            })
                            props.history.push("/")
                        })
                        .catch(err => console.log(err))
                }}


            >


                {({ values, handleSubmit, handleChange, errors }) => <div>

                    <form onSubmit={handleSubmit} action="">
                        <input
                            name="firstName"
                            type="firstName"
                            onChange={handleChange}
                            value={values.firstName}
                            placeholder="FirstName"
                        /> <br />

                        <input
                            name="lastName"
                            type="lastName"
                            onChange={handleChange}
                            value={values.lastName}
                            placeholder="LastName"
                        />
                        <br />
                        <input
                            name="email"
                            type="email"
                            onChange={handleChange}
                            value={values.email}
                            placeholder="email"
                        /> <br />
                        <input
                            name="mobile"
                            type="text"
                            onChange={handleChange}
                            value={values.mobile}
                            placeholder="mobile"
                        /> <br />
                        <input
                            name="password"
                            type="text"
                            onChange={handleChange}
                            value={values.password}
                            placeholder="Password"
                        /> <br />
                        <Link to="/signin">Already have an account? sign in now</Link> <br />
                        <button type="submit">Sign up</button>
                    </form>

                </div>}
            </Formik>
        </div>
    )
}

export default connect()(SignUp)
