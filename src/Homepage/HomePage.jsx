import React from "react";
import '../Default.css';
import './HomePage.css';
import { NavLink } from 'react-router-dom';
import MainNav from "../MainNav";
import Wallet from "../Wallet";
import HamburgerNav from "../HamburgerNav";
import Protect from 'react-app-protect';
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
            <Protect 
                sha512='320b0b335d9ce00011ff11cb68e218b1685ba8b926a98c310a1415f245d1756ab39794c684e6496fbbf3aaf5fc3f5d93cdd6391f7f4385b3247b12aa5dfd82a1'
            >
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
            </Protect>
        );
    }
}

export default HomePage;