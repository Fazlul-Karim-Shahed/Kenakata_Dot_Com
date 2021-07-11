import { getDefaultNormalizer } from '@testing-library/react'
import jwtDecode from 'jwt-decode'
import React from 'react'
import { connect } from 'react-redux'
import { FAST_AUTH } from '../Redux/ActionType'
import Body from './Body/Body'
import Header from './Header/Header'

const mapStateToProps = state => {
    // console.log(state)
    return {

    }
}

function MainComponent(props) {

    let token = localStorage.getItem("kenakata-token")
    if(token){
        const userInfo = jwtDecode(token)
        // console.log(new Date(userInfo.exp * 1000))
        props.dispatch({
            type: FAST_AUTH,
            value: new Date > new Date(userInfo.exp * 1000) ? false : true,
            userInfo: userInfo
        })
    }

    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

export default connect(mapStateToProps)(MainComponent) 