import React from "react";
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import './Default.css';
import Wallet from "./Wallet";
import MainNav from "./MainNav";


class Navbar extends React.Component {
    render() {
        return(
            <div class="nav-bar">
                <MainNav/>
                <Wallet/> 
            </div>
        );
    }
}

export default Navbar;