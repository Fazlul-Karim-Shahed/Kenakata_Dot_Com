import React, { useState, useEffect } from 'react'
import { getCartApi } from '../../../Api/CartApi'

export default function Cart(props) {

    const [items, setItem] = useState([])

    useEffect(() => {

        getCartApi().then(data => setItem([...data]))

    }, [])

    console.log(items)

    if (items.length === 0) return <div></div>;

    const cartItem = items.map(item => {

        let imgSrc
        if (item.product && item.product.photo) {
            const str = Buffer.from(item.product.photo.data.data).toString("base64")
            imgSrc = `data:${item.product.photo.contentType};base64,${str}`
        }
        else imgSrc = "";

        return (
            <div>
                <img src={imgSrc} height="50px" alt="" />
            </div>
        )
    })






    return (
        <div>
            {cartItem}
            {/* <div className="left">

            </div>
            <div className="right"></div> */}
        </div>
    )
}
