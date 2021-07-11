import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FAST_AUTH } from '../../../../Redux/ActionType'
import jwtDecode from 'jwt-decode'
import {signInApi } from '../../../../Api/AuthApi'


const mapStateToProps = state => {
    return {

    }
}

function signIn(props) {

    return (
        <div>
            <Formik

                initialValues={{
                    email: '',
                    password: ''
                }}

                validate={(values) => {

                }}



                onSubmit={(values) => {
                    // console.log(values)
                    signInApi(values)
                    
                        .then(data => {
                            if(data.type==false) throw data.message

                            localStorage.setItem("kenakata-token", data.token)

                            const userInfo = jwtDecode(localStorage.getItem("kenakata-token"))

                            props.dispatch({
                                type : FAST_AUTH,
                                value : true,
                                userInfo : userInfo
                            })
                            props.history.push("/")
                        })
                        .catch(err => console.log(err))
                }}


            >


                {({ values, handleSubmit, handleChange, errors }) => <div>

                    <form onSubmit={handleSubmit} action="">
                        <input
                            name="email"
                            type="email"
                            onChange={handleChange}
                            value={values.email}
                            placeholder="Email"
                        /> <br />

                        <input
                            name="password"
                            type="text"
                            onChange={handleChange}
                            value={values.password}
                            placeholder="Password"
                        />
                        <br />
                        <Link to="/signup">Not account? register now</Link> <br />
                        <button type="submit">Sign in</button>
                    </form>

                </div>}
            </Formik>
        </div>
    )
}


export default connect(mapStateToProps)(signIn)
