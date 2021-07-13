
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