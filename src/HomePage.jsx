import React from "react";
import './Default.css';
import './HomePage.css';
import { NavLink } from 'react-router-dom';
import MainNav from "./MainNav";
import Wallet from "./Wallet";


class HomePage extends React.Component {
 

    render() {
        return(
            <div class="home-page">
                <div class="full-nav">
                    <MainNav/>
                    <Wallet/>
                </div>
                <NavLink to="/home"><img src={require('./assets/ck-logo.png')} alt="ck-logo"/></NavLink>
            </div>
        );
    }


}

export default HomePage;