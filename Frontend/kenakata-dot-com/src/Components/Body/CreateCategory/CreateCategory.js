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

                onSubmit={value => {
                    createCategoryApi(value.category.toLowerCase())
                        .then(data => {
                            setAlertMessage(data.message)
                            document.getElementById("CreateCategory_alert").style.display = "block"
                            document.getElementById("CreateCategory_alert").style.backgroundColor = data.type === false ? "rgb(255, 63, 15)" : "rgb(63, 211, 27)"
                            
                        })
                }}

            >

                {({ values, handleSubmit, handleChange }) => <div className="CreateCategory_form">
                    
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

                        <button className="CreateCategory_btn" type="submit">Create</button>
                    </form>
                </div>}
            </Formik>
        </div>
    )
}

export default connect(mapStateToProps)(CreateCategory)