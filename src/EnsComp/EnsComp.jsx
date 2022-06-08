import React from "react";
import { NavLink } from "react-router-dom";
import HamburgerNav from "../HamburgerNav";
import MainNav from "../MainNav";
import './EnsComp.css';
import UserName from "../UserName/UserName";
import Claimed from "../Claimed/Claimed";

class EnsComp extends React.Component {
    constructor() {
        super();
        this.navType = '';
        this.state = {
            ensClaim: <UserName allowWebId={this.allowWebId}/>,
        }
    }

    allowWebId = () => {
        this.setState({ensClaim: <Claimed/>});
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
            <div className="ens-comp">
                <div className="nav-links-ens">
                    {this.changeNav()}
                    <NavLink to="/home"><img src={require('../assets/ck-logo.png')} alt="ck-logo"/></NavLink>
                </div>
                {this.state.ensClaim}
            </div>
        );
    }
}

export default EnsComp;