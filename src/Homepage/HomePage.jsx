import React from "react";
import '../Default.css';
import './HomePage.css';
import { NavLink } from 'react-router-dom';
import MainNav from "../MainNav";
import Wallet from "../Wallet";
import HamburgerNav from "../HamburgerNav";
import Partners from "../Partners/Partners";




class HomePage extends React.Component {
    constructor() {
        super();
        this.navType = '';
        this.state = {
            sponsors: null,
        }
    }

    changeNav = () => {
        if (window.innerWidth <= 768) {
            return this.navType = <HamburgerNav/>
        }
        else {
            return this.navType = <MainNav/>
        }
    }

  
    openSponsors = () => {
        this.setState({sponsors: <Partners closeSponsors={this.closeSponsors}/>});
    }

    closeSponsors = () => {
        this.setState({sponsors: null});
    }


    render() {
        return(
                <div className="home-page">
                    <div className="full-nav"> 
                        {this.changeNav()}
                        <Wallet/>
                    </div>
                    <NavLink to="/home"><img src={require('../assets/Chainkeylogo1.png')} alt="ck-logo"/></NavLink>
                    <div onClick={() => this.openSponsors()} className="partnerships">
                        <img src={require('../assets/8bitfolder-Icon.png')} alt="folder"/>
                        <div>Partnerships</div>
                    </div>
                    {this.state.sponsors}
                </div>
        );
    }
}

export default HomePage;