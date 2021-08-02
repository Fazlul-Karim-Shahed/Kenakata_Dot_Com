import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getProductApi, getSkipProductApi } from '../../../Api/ProductApi'
import { ALL_PRODUCT, SKIP_ALL_PRODUCT } from '../../../Redux/ActionType'
import ProductsCard from './ProductsCard/ProductsCard'
import './Shop.css'
import Spinner from '../Spinner/Spinner'


const mapStateToProps = state => {
    return {
        allProducts: state.allProducts
    }
}

function Shop(props) {

    const [skip, setSkip] = useState(4)

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
        // console.log(item)
        return (
            <div className="Shop_cards_container">
                <ProductsCard item={item} />
            </div>
        )
    })

    // let skip = 4;

    const loadMore = () => {


        getSkipProductApi(skip).then(data => {
            props.dispatch({
                type: SKIP_ALL_PRODUCT,
                value: data
            })

        })
        setSkip(skip + 4)
        

    }
// console.log(skip)

    return (
        <div>
            <div className="Shop_container">
                <div className="Shop_filter_box">
                    filter
                </div>
                <div className="Shop_productsCard">
                    {cards.length === 0 ? <Spinner /> : cards}
                </div>

            </div>
            <div style={{ textAlign: "center" }}><button onClick={loadMore} style={{ padding: "10px", margin: "10px" }}>Load more</button></div>
        </div>
    )
}

export default connect(mapStateToProps)(Shop)