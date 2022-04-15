import React from "react";
import StoryBody from "./StoryBody";
import './Default.css';
import './Ourstory.css';
import {NavLink} from 'react-router-dom';
import Wallet from "./Wallet";
import MainNav from "./MainNav";
import HamburgerNav from "./HamburgerNav";





class OurStory extends React.Component {
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
                <div className="story">     
                    <div className="story-container">
                        <div className="nav-links">
                            {this.changeNav()}
                            <NavLink to="/home"><img src={require('./assets/ck-logo.png')} alt="ck-logo"/></NavLink>
                        </div>

                        <div className="wallet-body">
                            <Wallet/>
                            <StoryBody 
                            className="story-body"
                            />
                        </div>
                    </div>
                </div>
        );
    }
}
export default OurStory;

