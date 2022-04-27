import React from "react";
import Sum from "../Sum/Sum";
import Legend from "../Legend/Legend";
import Carousel from "../Carousel/Carousel";
import './ChainGame.css';
import Wallet from "../Wallet";
import HamburgerNav from "../HamburgerNav";
import MainNav from "../MainNav";
import { NavLink } from 'react-router-dom';

class ChainGame extends React.Component {
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
            <div className="chain-game">
                <nav className="nav">
                    {this.changeNav()}
                    <Wallet/>
                </nav>
                <h3>The ChainGame</h3>
                <div className="game-body">
                    <Legend/>
                    <Sum/>
                    <Carousel/>
                </div>
                <NavLink className="home-btn" to="/home"><img src={require('../assets/ck-logo.png')} alt="ck-logo"/></NavLink>
            </div>
        );
    }
}

export default ChainGame;