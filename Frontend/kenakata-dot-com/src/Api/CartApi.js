

export const addCartApi = obj => {
    return fetch(process.env.REACT_APP_LOCAL_PORT + '/cart/add', {
        method : "POST",
        body : JSON.stringify(obj),
        headers : {
            "Authorization" : localStorage.getItem("kenakata-token")
        }
    }).then(res => res.json())
}


export const getCartApi = () => {
    return fetch(process.env.REACT_APP_LOCAL_PORT + '/cart/get', {
        method: "GET",
        headers: {
            "Authorization": localStorage.getItem("kenakata-token")
        }
    }).then(res => res.json())
}

export const updateCartApi = (obj) => {
    return fetch(process.env.REACT_APP_LOCAL_PORT + '/cart/update', {
        method: "POST",
        headers: {
            "Authorization": localStorage.getItem("kenakata-token")
        },
        body : JSON.stringify({
            product : obj.product._id,
            price : obj.price,
            quantity : obj.quantity
        })
    }).then(res => res.json())
}

export const deleteCartApi = (obj) => {
    return fetch(process.env.REACT_APP_LOCAL_PORT + '/cart/remove', {
        method: "DELETE",
        headers: {
            "Authorization": localStorage.getItem("kenakata-token")
        },
        body: JSON.stringify({product: obj.product._id})
    }).then(res => res.json())
}
