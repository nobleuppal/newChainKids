import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import './Default.css';

class Navbar extends React.Component {
    render() {
        return(
            <div class="nav-bar">
                <div class="press">
                    Press
                </div>
                <ul class="options">
                    <li>A... our story</li>
                    <li>B... mystery box</li>
                    <li>C... ens setup</li>
                    <li>D... the chain game</li>
                    <li>E... the void</li>
                    <li>F... whitepaper</li>
                    <li>G... faq</li>
                    <li><Link to="/home">H... home</Link></li>
                </ul>
                <div class="connect">
                    <button>Connect Wallet</button>
                </div>
            </div>
        );
    }
}

export default Navbar;