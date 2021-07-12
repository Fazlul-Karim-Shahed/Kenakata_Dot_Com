import React from 'react'
import { connect } from 'react-redux'
import './AdminDashboard.css'
import { Link } from 'react-router-dom'


const mapStateToProps = state => {
    return {
        userInfo : state.userInfo
    }
}

function AdminDashboard(props) {
    return (
        <div>
            <div className="adminDashboard_container">
                <div className="adminDashboard_left">
                    <div className="adminDashboard_usefulLinks">
                        <h3>Useful Links</h3>
                        <Link className="adminDashboard_links" to="/create-category">Create Category</Link>
                        <Link className="adminDashboard_links" to="/create-product">Create Product</Link>
                    </div>
                </div>
                <div className="adminDashboard_right">
                    <div className="adminDashboard_profile">
                        <div className="adminDashboard_profile_left">Name</div>
                        <div className="adminDashboard_profile_right">{props.userInfo.firstName} {props.userInfo.lastName}</div>
                    </div>
                    <div className="adminDashboard_profile">
                        <div className="adminDashboard_profile_left">Mobile</div>
                        <div className="adminDashboard_profile_right">{props.userInfo.mobile}</div>
                    </div>
                    <div className="adminDashboard_profile">
                        <div className="adminDashboard_profile_left">Email</div>
                        <div className="adminDashboard_profile_right">{props.userInfo.email}</div>
                    </div>
                    <div className="adminDashboard_profile">
                        <div className="adminDashboard_profile_left">Role</div>
                        <div className="adminDashboard_profile_right">{props.userInfo.role}</div>
                    </div>
                </div>
           </div>
        </div>
    )
}
export default connect(mapStateToProps)(AdminDashboard) 