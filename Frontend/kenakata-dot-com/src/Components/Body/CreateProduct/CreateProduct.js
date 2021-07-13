import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import { getCategoryApi } from '../../../Api/CategoryApi'
import { ALL_PRODUCT, CATEGORY } from '../../../Redux/ActionType'
import './CreateProduct.css'
import { createProductApi, getProductApi } from '../../../Api/ProductApi'


const mapStateToProps = state => {
    return {
        categoryArray: state.categoryArray
    }
}

function CreateProduct(props) {

    useEffect(() => {
        getCategoryApi()
            .then(data => {
                props.dispatch({
                    type: CATEGORY,
                    value: data
                })
            })

    }, [])

    let createOption;
    if (props.categoryArray.length === 0) createOption = <div></div>;

    createOption = props.categoryArray.map(item => {
        return <option key={item._id} value={item._id}>{String(item.category).toUpperCase()}</option>
    })


    return (
        <div className="CreateProduct_container">
            <Formik

                initialValues={{
                    category: '',
                    price: '',
                    name: '',
                    description: '',
                    stock: '',

                }}

                onSubmit={value => {
                    // console.log(value)
                    const myForm = document.getElementById("myForm")
                    createProductApi(myForm)
                    .then(data => console.log(data))
                       
                }}
            >


                {({ values, handleChange, handleSubmit }) => <div className="CreateProduct_form">
                    <form onSubmit={handleSubmit} id="myForm" action="">
                        <select
                            value={values.category}
                            onChange={handleChange}
                            className="CreateProduct_input"
                            name="category"
                        >
                        <option value="">----select----</option>
                        {createOption}
                        </select>
                        <input
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="CreateProduct_input"
                        />

                        <textarea
                            name="description"
                            value={values.description}
                            onChange={handleChange}
                            placeholder="Description"
                            className="CreateProduct_input"
                        />

                        <input
                            type="text"
                            name="price"
                            value={values.price}
                            onChange={handleChange}
                            placeholder="Price"
                            className="CreateProduct_input"
                        />


                        <input
                            type="text"
                            name="stock"
                            value={values.stock}
                            onChange={handleChange}
                            placeholder="Stock"
                            className="CreateProduct_input"
                        />

                        <input
                            id="photo"
                            type="file"
                            name="photo"
                            onChange={handleChange}
                            className="CreateProduct_input"
                        />

                        <button className="CreateProduct_btn" type="submit">Submit</button>

                    </form>
                </div>}
            </Formik>
        </div>
    )
}

export default connect(mapStateToProps)(CreateProduct)