import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './UserDashboard.css'
import { Formik } from 'formik'
import ProfileDetails from '../../Profile/ProfileDetails/ProfileDetails'


const mapStateToProps = state => {
    return {

    }
}

function Dashboard(props) {



    return (
        <div>
            <div className="userDashboard_dashboardContainer">
                <div className="userDashboard_usefulLinks">
                    <div>
                        <h3>Useful Links</h3>
                    </div>
                    <div>
                        <Link className="userDashboard_link" to="">Cart</Link>
                        <Link className="userDashboard_link" to="">History</Link>

                    </div>
                </div>
                <div className="userDashboard_profileContainer">
                    <ProfileDetails />
                </div>
            </div>
        </div>
    )
}


export default connect(mapStateToProps)(Dashboard)