import React from "react";
import './Default.css';
import './HamburgerNav';
import { Link } from 'react-router-dom';

class MainNav extends React.Component {
   
    render() {
        return(
            <div className="main-nav">
                <div className="press">
                    Press
                </div>
                <ul className="options">
                    <li><Link to="/home">A... Home</Link></li>
                    <li><Link to="/ens">B... ens setup</Link></li>
                    <li><Link to="/home">C... the chain game</Link></li> 
                    <li>D... mystery orbs</li>
                    <li>E... the void</li>
                    <li>F... whitepaper</li>
                    <li><Link to="/story">G... our story</Link></li>
                    <li><Link to="/faq">H... faq</Link></li>
                </ul>
            </div> 
        );
    }
}

export default MainNav;