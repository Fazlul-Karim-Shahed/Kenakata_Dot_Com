import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import './CreateCategory.css'
import { createCategoryApi } from '../../../Api/CategoryApi'

const mapStateToProps = state => {
    return {

    }
}

function CreateCategory() {
    return (
        <div>
            <Formik
            
            initialValues={{
                category : ''
            }}

            onSubmit={value => {
                // console.log(value.category.toLowerCase())
                createCategoryApi(value.category.toLowerCase())
                .then(data => {
                    console.log(data)
                })
            }}
            
            >

                {({values, handleSubmit, handleChange}) => <div className="CreateCategory_container">
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