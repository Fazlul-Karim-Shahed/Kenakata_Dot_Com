import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProductApi } from '../../../Api/ProductApi'
import { ALL_PRODUCT } from '../../../Redux/ActionType'
import ProductsCard from './ProductsCard/ProductsCard'
import './Shop.css'
import Spinner from '../Spinner/Spinner'


const mapStateToProps = state => {
    return {
        allProducts: state.allProducts
    }
}

function Shop(props) {

    useEffect(() => {
        getProductApi().then(data => {
            props.dispatch({
                type: ALL_PRODUCT,
                value: data
            })
        })
    }, [])


    let cards;
    if (props.allProducts.length === 0) cards = <div></div>;

    cards = props.allProducts.map(item => {
        console.log(item)
        return (
            <div className="Shop_cards_container">
                <ProductsCard item={item} />
            </div>
        )
    })


    return (
        <div className="Shop_container">
            <div className="Shop_filter_box">
                filter
            </div>
            <div className="Shop_productsCard">
                {cards.length === 0 ? <Spinner /> : cards}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Shop)