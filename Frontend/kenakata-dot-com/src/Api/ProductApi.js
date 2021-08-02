
export const createProductApi = form => {
    return fetch(process.env.REACT_APP_LOCAL_PORT + '/product/create', {
        method: "POST",
        body: new FormData(form),
        headers: {
            "Authorization": localStorage.getItem("kenakata-token")
        }
    })
        .then(res => res.json())
}


export const getProductApi = () => {
    return fetch(process.env.REACT_APP_LOCAL_PORT + '/product/get')
        .then(res => res.json())
}

export const getSkipProductApi = (n) => {
    return fetch(process.env.REACT_APP_LOCAL_PORT + '/product/get', {
        method : "GET",
        headers: {
            "skip": n
        }
    })
        .then(res => res.json())
}

export const productDetailsApi = (id) => {
    return fetch(process.env.REACT_APP_LOCAL_PORT + "/product/details", {
        method : "POST",
        body : JSON.stringify({productId : id})
    }).then(res => res.json())
}