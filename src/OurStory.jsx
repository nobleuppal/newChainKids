import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import Navbar from "./Navbar";
import StoryBody from "./StoryBody";
import './Default.css';
import './Ourstory.css';
import { Route, Link, Routes, Router, NavLink} from 'react-router-dom';
import Wallet from "./Wallet";
import MainNav from "./MainNav";



class OurStory extends React.Component {

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

