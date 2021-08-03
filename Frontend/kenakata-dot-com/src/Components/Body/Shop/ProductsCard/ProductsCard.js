import React from 'react'
import { connect } from 'react-redux'
import Spinner from '../../Spinner/Spinner'
import './ProductsCard.css'
import { Link } from 'react-router-dom'
import { addCartApi } from '../../../../Api/CartApi'

const mapStateToProps = state => {
    return {
        authenticated : state.authenticated,
        userInfo : state.userInfo
    }
}

function ProductsCard(props) {
    // console.log(props.item)
    const item = props.item

    let imgSrc;
    if (item && item.photo) {
        let str = new Buffer.from(item.photo.data).toString("base64")
        imgSrc = `data:${item.photo.contentType};base64,${str}`
    } else {
        imgSrc = ""
    }

    let quantity = 1
    const addCart = item => {

        if (props.authenticated) {
            let obj = {
                quantity: quantity,
                price: item.price * quantity,
                product: item._id,
                user: props.userInfo._id
            }
            // console.log(obj)
            addCartApi(obj).then(data => {
                if(data.message) throw data.message
            })
            .catch(err => alert(err))
        }
        else {
            alert("Authentication failed")
        }

    }

    return (
        <div className="ProductsCard_container">
            <div>
                <Link to={`/product-details/${item._id}`} ><img src={imgSrc} height="200px" width="100%" alt="" /></Link>
            </div>
            <div>
                <strong>{item.name}</strong> <br />
                <strong style={{ marginTop: "20px" }} >{item.price}৳</strong>  <br />
                <div className="ProductsCard_pill">in stack | {item.stock} quantity</div> <br />
                <button onClick={()=>addCart(item)} className="ProductsCard_btn">Add to cart</button>
                
                
            </div>
        </div>
    )
}
export default connect(mapStateToProps)(ProductsCard)