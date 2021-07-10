import React from 'react'
import { connect } from 'react-redux'
import { FAST_AUTH } from '../../../Redux/ActionType'

const mapStateToProps = state => {
    return {

    }
}

function Logout(props) {

    localStorage.removeItem("kenakata-token")

    props.dispatch({
        type : FAST_AUTH,
        value : false
    })

    props.history.push("/signin")
    return (
        <div>
            
        </div>
    )
}
export default connect(mapStateToProps)(Logout) 