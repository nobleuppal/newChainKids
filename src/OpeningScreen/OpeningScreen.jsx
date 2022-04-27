import React from "react";
import './Screen.css';
import TypewriterComponent from "typewriter-effect";
import GoHome from "./GoHome";



class OpeningScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            lineOne : 'Wake up ChainKid...',
            lineTwo : 'Web3 has you...',
            lineThree : 'Would you like to connect your wallet?',
            page: 0
        }
    }

    render() {

        return(
                <div className="opening-screen" id="typewriter-text">
                    <TypewriterComponent 
                        onInit={(sentence) => {
                            sentence
                            .typeString(this.state.lineOne)
                            .changeDelay(100)
                            .typeString('<br>')
                            .pauseFor(500)
                            .typeString(this.state.lineTwo)
                            .changeDelay(100)
                            .typeString('<br>')
                            .pauseFor(500)
                            .typeString(this.state.lineThree)                                                            
                            .start()     
                        }}
                    />  
                    <GoHome/>  
                </div>
        );
    }
}

export default OpeningScreen;