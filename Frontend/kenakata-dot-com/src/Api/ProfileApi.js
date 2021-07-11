

export const getProfileApi = () => {
    return fetch(process.env.REACT_APP_LOCAL_PORT + '/profile/', {
        method: "GET",
        headers: {
            "Authorization": localStorage.getItem("kenakata-token")
        }
    }).then(res => res.json())
}



export const updateProfileApi = (myForm) => {
    return fetch(process.env.REACT_APP_LOCAL_PORT + '/profile', {
        method: "POST",
        body: new FormData(myForm),
        headers: {
            "Authorization": localStorage.getItem("kenakata-token")
        }
    }).then(res => res.json())
}



