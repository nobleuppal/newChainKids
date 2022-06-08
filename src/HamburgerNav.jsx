import React from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainNav from "./MainNav";


class HamburgerNav extends React.Component {
    constructor() {
        super();
        this.state = {
            symbol: faBars
        }
    }

    toggleMenu = () => {
        if (this.state.symbol === faBars) {
            this.addMenu();
        }
        else {
            this.removeMenu();
        }
    }

    addMenu = () => {
        const main = document.querySelectorAll('.main-nav');
    
        for (const elm of main) {
            elm.classList.add('is-visible');
        }
        this.setState({symbol: faTimes});
    }

    removeMenu = () => {
        const main = document.querySelectorAll('.main-nav');

        for (const elm of main) {
            elm.classList.remove('is-visible');
        }
        this.setState({symbol: faBars});
    }

    render() {

        return(
            <div className="nav-container">
                <button className="pop-up" onClick={this.toggleMenu}>
                    <FontAwesomeIcon icon={this.state.symbol}/>
                </button>  
                <div>
                    <MainNav/> 
                </div> 
            </div>
        );
    }
}

export default HamburgerNav;