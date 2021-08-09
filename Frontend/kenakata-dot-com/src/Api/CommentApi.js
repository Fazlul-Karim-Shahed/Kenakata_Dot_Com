
export const addCommentApi = (str, id) => {
    return fetch(process.env.REACT_APP_LOCAL_PORT + "/comment/add", {
        method : "POST",
        headers: {
            "Authorization": localStorage.getItem("kenakata-token")
        },
        body : JSON.stringify({
            comment : str,
            product: id
        })
    })
    .then(res => res.json())
}

export const getCommentApi = product => {
    return fetch(process.env.REACT_APP_LOCAL_PORT + "/comment/get", {
        method : "POST",
        body : JSON.stringify({product : product})
    })
        .then(res => res.json())
}