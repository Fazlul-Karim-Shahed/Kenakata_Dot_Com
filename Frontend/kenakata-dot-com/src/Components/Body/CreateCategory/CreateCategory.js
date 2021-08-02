import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import './CreateCategory.css'
import { createCategoryApi } from '../../../Api/CategoryApi'

const mapStateToProps = state => {

    return {

    }
}

function CreateCategory() {

    let [alertMessage, setAlertMessage] = useState('');

    const closeBtn = () => {
        document.getElementById("CreateCategory_alert").style.display = "none"
    }

    return (
        <div className="CreateCategory_container">
            <Formik

                initialValues={{
                    category: ''
                }}

                validate={(value) => {
                    let error = {}

                    if(value.category === '') {
                        error.category = "Empty value not accepted";
                        setAlertMessage("Empty value not accepted")
                        document.getElementById("CreateCategory_alert").style.display = "block";
                        document.getElementById("CreateCategory_alert").style.backgroundColor =  "rgb(255, 63, 15)"
                    }

                    return error
                }}

                onSubmit={value => {
                    createCategoryApi(value.category.toLowerCase())
                        .then(data => {
                            setAlertMessage(data.message)
                            document.getElementById("CreateCategory_alert").style.display = "block"
                            document.getElementById("CreateCategory_alert").style.backgroundColor = data.type === false ? "rgb(255, 63, 15)" : "rgb(63, 211, 27)"
                            
                        })
                }}

            >

                {({ values, handleSubmit, handleChange, errors }) => <div className="CreateCategory_form">
                    
                    <div id="CreateCategory_alert">
                        <div>
                            <div >{alertMessage}</div>
                            <div style={{cursor:"pointer", color:"white"}} onClick={closeBtn}>&times;</div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} action="">
                        <input
                            type="text"
                            name="category"
                            value={values.category}
                            onChange={handleChange}
                            className="CreateCategory_input"
                            placeholder="Name of category"
                        />
                        {/* <div>{errors.category}</div> */}

                        <button className="CreateCategory_btn" type="submit">Create</button>
                    </form>
                </div>}
            </Formik>
        </div>
    )
}

export default connect(mapStateToProps)(CreateCategory)