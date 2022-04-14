import React from "react";
import StoryBody from "./StoryBody";
import './Default.css';
import './Ourstory.css';
import {NavLink} from 'react-router-dom';
import Wallet from "./Wallet";
import MainNav from "./MainNav";



class OurStory extends React.Component {
    constructor() {
        super();
    }
    

    render() {
        return(
            <div class="story">     
                <div class="story-container">
                    <div class="nav-links">
                        <MainNav/>
                        <NavLink to="/home"><img src={require('./assets/ck-logo.png')} alt="ck-logo"/></NavLink>
                    </div>

                    <div class="wallet-body">
                        <Wallet/>
                        <StoryBody 
                        class="story-body"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default OurStory;

