import React from 'react'
import { connect } from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import Cart from './Cart/Cart'
import Contact from './Contact/Contact'
import CreateCategory from './CreateCategory/CreateCategory'
import CreateProduct from './CreateProduct/CreateProduct'
import AdminDashboard from './Dashboard/AdminDashboard/AdminDashboard'
import UserDashboard from './Dashboard/UserDashboard/UserDashboard'
import Home from './Home/Home'
import SignIn from './Login/Signin/SignIn'
import SignUp from './Login/Signup/SignUp'
import Logout from './Logout/Logout'
import ProductDetails from './ProductDetails/ProductDetails'
import UpdateProfile from './Profile/UpdateProfile/UpdateProfile'
import Shop from './Shop/Shop'


const mapStateToProps = state => {
    return {
        userInfo : state.userInfo,
        authenticated : state.authenticated
    }
}

function Body(props) {

    let routers

    if(props.authenticated){
        routers = <div>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path={`/${props.userInfo.role}/${props.userInfo._id}/dashboard`} component={props.userInfo.role === "user" ? UserDashboard : AdminDashboard} />
            <Route path="/contact" component={Contact} />
            <Route path="/logout" component={Logout} />
            <Route path="/update-profile" component={UpdateProfile} />
            <Route path={`/create-category`} component={props.userInfo.role === "admin" ? CreateCategory : Home} />
            <Route path={`/create-product`} component={props.userInfo.role === "admin" ? CreateProduct : Home} />
            <Route path={`/product-details/:id`} component={ProductDetails} />
            <Route path={`/cart/:id`} component={Cart} />

        </div>
    }

    else {
        routers = <div>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/contact" component={Contact} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path={`/product-details/:id`} component={ProductDetails} />
        </div>
    }


    return (
        <div>
            <Switch>
                {routers}
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default connect(mapStateToProps)(Body) 
