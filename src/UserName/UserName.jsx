import React from "react";
import './UserName.css';

class UserName extends React.Component {
    constructor(props) {
        super(props);
        this.maxCharLength = 15;
    }

    handleSubmit = () => {

        this.props.allowWebId()
    } 
    render() {
        return(
            <div className="user-name">
                <div className="name-info">
                    <h4>Pick your username</h4>
                    <p>This will be your web3 identity learn more about it here.</p>
                </div>

                <div className="identity-container">
                    <div><input maxLength={this.maxCharLength} id="web3-identity" type="text" name="web3-identity"></input><label htmlFor="web3-identity">.chainkids.eth</label></div>
                </div>

                <div className="allow-container">
                    <input id="allow" type="checkbox" name="allow"></input><label htmlFor="allow">Allow entry into KeyChain</label>
                </div>

                <button onClick={() => this.handleSubmit()} className="claim">Claim Username</button>
            </div>
        );
    }
}

export default UserName;