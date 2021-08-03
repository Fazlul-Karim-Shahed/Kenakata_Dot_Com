import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteCartApi, getCartApi, updateCartApi } from '../../../Api/CartApi'
import { CART, CART_QUANTITY_UPDATE, DELETE_CART } from '../../../Redux/ActionType'
import './Cart.css'


const mapStateToProps = state => {
    console.log(state.cartArray)
    return {
        cartArray: state.cartArray
    }
}

function Cart(props) {

    // const [items, setItem] = useState([])
    // const [quantity, setQuantity] = useState(Number(1))

    useEffect(() => {

        getCartApi().then(data => {
            props.dispatch({
                type: CART,
                value: [...data]
            })
        })

    }, [])

    // console.log(props.cartArray)

    if (props.cartArray.length === 0) return <div></div>;

    const cartItem = props.cartArray.map((item, index) => {

        let imgSrc
        if (item.product && item.product.photo) {
            const str = Buffer.from(item.product.photo.data.data).toString("base64")
            imgSrc = `data:${item.product.photo.contentType};base64,${str}`
        }
        else imgSrc = "";

        var quantity = item.quantity

        const increase = (index) => {
            // console.log(index)

            ++quantity
            props.dispatch({
                type: CART_QUANTITY_UPDATE,
                value: quantity,
                index: index
            })

        }

        const decrease = () => {
            --quantity
            props.dispatch({
                type: CART_QUANTITY_UPDATE,
                value: quantity,
                index: index
            })
        }
        // console.log(quantity)

        const update = index => {
            updateCartApi(props.cartArray[index]).then(data => console.log(data))
        }
        const remove = index => {
            deleteCartApi(props.cartArray[index]).then(data => {
                if(data.type){
                    props.dispatch({
                        type: DELETE_CART,
                        value: index
                    })
                }
            })
        }


        return (
            <div key={index} className="cart_row">
                <div className="cart_row_img">
                    <img src={imgSrc} height="50px" alt="" />

                </div>
                <div className="cart_row_desc">
                    {item.product.name}
                </div>
                <div className="cart_row_quantity">
                    <strong>Quantity</strong>
                    <button disabled={quantity <= 1} onClick={() => decrease(index)} style={{ padding: "5px 10px", margin: "0px 10px 0px 0px" }}>-</button>
                    <strong className="productDetails_quantity">{quantity}</strong>
                    <button disabled={quantity >= 5} onClick={() => increase(index)} style={{ padding: "5px 10px", margin: "0px 10px" }}>+</button>
                    <span>{item.price} tk</span>
                </div>
                <div className="cart_row_updateBtn">
                    <button className="cart_updateBtn" onClick={()=>update(index)}>Update</button>
                </div>
                <div className="cart_row_removeBtn">
                    <button className="cart_removeBtn" onClick={()=>remove(index)}>Remove</button>
                </div>

            </div>
        )
    })






    return (
        <div>
            {cartItem}
        </div>
    )
}

export default connect(mapStateToProps)(Cart)
