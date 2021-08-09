import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addCartApi } from '../../../Api/CartApi'
import { addCommentApi, getCommentApi } from '../../../Api/CommentApi'
import { productDetailsApi } from '../../../Api/ProductApi'
import './ProductDetails.css'

const mapStateToProps = state => {
    return {
        authenticated: state.authenticated,
        userInfo : state.userInfo
    }
}

function ProductDetails(props) {


    const [item, setItem] = useState(null)
    const [comment, setComment] = useState([])
    const [quantity, setQuantity] = useState(Number(1))

    useEffect(() => {

        productDetailsApi(props.match.params.id)
            .then(data => setItem(data))
        getCommentApi(props.match.params.id).then(data => setComment([...data]))

    }, [])

    // console.log(item)
    if (item === null) return <div></div>;

    let imgSrc
    if (item && item.photo) {
        const str = Buffer.from(item.photo.data.data).toString("base64")
        imgSrc = `data:${item.photo.contentType};base64,${str}`
    }
    else imgSrc = ""


    // var quantity = 1

    const increase = () => {
        let q = quantity + 1
        setQuantity(q)



    }

    const decrease = () => {
        let q = quantity - 1
        setQuantity(q)
    }

    const addCart = () => {

        if (props.authenticated) {
            let obj = {
                quantity: quantity,
                price: item.price * quantity,
                product: item._id,
                user: props.userInfo._id
            }
            addCartApi(obj).then(data => console.log(data))
        }
        else{
            alert("Not authenticated")
        }


    }

    const commentBtn = () => {
        if(props.authenticated){
            let comment = document.getElementById("comment").value
            addCommentApi(comment, props.match.params.id).then(data => {
                getCommentApi(props.match.params.id).then(data => setComment([...data]))
            })
        }
        else alert("Authorization failed")
    }

    let reviews;
    if(comment.length===0) reviews = <div>No reviews</div>;

    reviews = comment.map(item => {
        return (
            <div className="productDetails_commentBox">
                <div className="productDetails_commentImg">{item.user.firstName[0]}</div>
                <div>
                    <div><strong>{item.user.firstName} {item.user.lastName}</strong></div>
                    <div>{item.comment}</div>
                </div>
            </div>
        )
    })



    return (
        <div>
            <div className="productDetails_upper">
                <div className="productDetails_mainImg">
                    <img src={imgSrc} height="300px" alt="" />
                </div>
                <div className="productDetails_others">
                    <h2>{item.name}</h2> <br />
                    <strong>{item.price} BDT</strong> <br /> <br />
                    <strong>Quantity</strong> <br />
                    <button disabled={quantity <= 1} onClick={decrease} style={{ padding: "5px 10px", margin: "0px 10px 0px 0px" }}>-</button>
                    <strong className="productDetails_quantity">{quantity}</strong>
                    <button disabled={quantity >= 5} onClick={increase} style={{ padding: "5px 10px", margin: "0px 10px" }}>+</button> <br />
                    <button onClick={addCart} className="productDetails_addCartBtn">Add to cart</button>
                </div>
            </div>

            <div className="productDetails_reviews">
                <h2>Reviews :</h2> <br />
                <div>
                    <input id="comment" type="textarea" />
                    <button className="productDetails_commentBtn" onClick={commentBtn}>Comment</button>
                    <div className="productDetails_comments">
                        {reviews}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default connect(mapStateToProps)(ProductDetails)
