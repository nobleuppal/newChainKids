import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Partners.css';

class Partners extends React.Component {
    


    render() {
        return(
            <div className="partners">
                <img src={require('../assets/funnydwarfs-logo.png')} alt="funny-dwarfs"/>
                <FontAwesomeIcon onClick={() => this.props.closeSponsors()} icon={faTimes}/>
            </div>
        );
    }
}

export default Partners;