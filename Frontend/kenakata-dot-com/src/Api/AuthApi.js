
export const signInApi = values => {
    return fetch(process.env.REACT_APP_LOCAL_PORT + '/signin', {
        method: "POST",
        body: JSON.stringify(values)
    }).then(res => res.json())

}

export const signUpApi = values => {
    return fetch(process.env.REACT_APP_LOCAL_PORT + '/signup', {
        method: "POST",
        body: JSON.stringify(values)
    }).then(res => res.json())

}