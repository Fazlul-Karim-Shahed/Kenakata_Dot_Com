import React, {useState, useEffect} from 'react'
import { getCartApi } from '../../../Api/CartApi'

export default function Cart(props) {

    useEffect(() => {

        getCartApi().then(data => console.log(data))

    }, [])

    return (
        <div>
            cart
        </div>
    )
}
