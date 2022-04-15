import React from "react";
import './Default.css';
import './HomePage.css';
import { NavLink } from 'react-router-dom';
import MainNav from "./MainNav";
import Wallet from "./Wallet";
import { toHaveFocus } from "@testing-library/jest-dom/dist/matchers";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HamburgerNav from "./HamburgerNav";




class HomePage extends React.Component {
    constructor() {
        super();
        this.navType = '';

    }

    changeNav = () => {
        if (window.innerWidth <= 768) {
            return this.navType = <HamburgerNav/>
        }
        else {
            return this.navType = <MainNav/>
        }
    }

    render() {
        return(
            <div className="home-page">
                <div className="full-nav"> 
                    {this.changeNav()}
                    <Wallet/>
                </div>
                <NavLink to="/home"><img src={require('./assets/ck-logo.png')} alt="ck-logo"/></NavLink>
            </div>
        );
    }
}

export default HomePage;