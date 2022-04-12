import React from "react";
import './Default.css';
import { Link } from 'react-router-dom';

class MainNav extends React.Component {
    render() {
        return(
            <div class="main-nav">
                <div class="press">
                    Press
                </div>
                <ul class="options">
                    <li><Link to="/story">A... our story</Link></li>
                    <li>B... mystery box</li>
                    <li>C... ens setup</li>
                    <li>D... the chain game</li>
                    <li>E... the void</li>
                    <li>F... whitepaper</li>
                    <li>G... faq</li>
                </ul>
            </div> 
        );
    }
}

export default MainNav;