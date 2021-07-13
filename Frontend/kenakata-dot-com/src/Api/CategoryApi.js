

export const createCategoryApi = value => {
    return fetch(process.env.REACT_APP_LOCAL_PORT + '/category/create', {
        method : "POST",
        body : JSON.stringify({
            category : value
        }),
        headers : {
            "Authorization" : localStorage.getItem("kenakata-token")
        }

    }).then(res => res.json())
}

export const getCategoryApi = () => {
    return fetch(process.env.REACT_APP_LOCAL_PORT + '/category/get')
    .then(res => res.json())
}