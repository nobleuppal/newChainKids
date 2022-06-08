import React from "react";
import  './Claimed.css';

class Claimed extends React.Component {
    render() {
        return(
            <div className="claimed">
                <div></div>
                <p>You claimed your username!</p>
                <div><span></span></div>
                <button className="add-details">Add profile details</button>
            </div>
        );
    }
}

export default Claimed;