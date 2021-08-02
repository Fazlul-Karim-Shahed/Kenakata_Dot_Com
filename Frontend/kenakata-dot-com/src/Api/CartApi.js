

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