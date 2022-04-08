import React from "react";
import OpeningText from "./OpeningText";
import './Default.css';
import TypewriterComponent from "typewriter-effect";

class OpeningScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            lineOne : 'Wake up ChainKid...',
            lineTwo : 'Web3 has you...',
            lineThree : 'Are you awake?',
            lineFour : 'Would you like to connect your wallet?'
        }

     

    }

    

    render() {
        return(
            <div>
                <div>
                    <TypewriterComponent 
                        onInit={(sentence) => {
                            sentence.typeString(this.state.lineOne).changeDelay(100).start();                                    
                        }}
                    /> 
                    <TypewriterComponent
                        onInit={(sentence) => {
                            sentence.pauseFor(2500).typeString(this.state.lineTwo).changeDelay(100).start();
                        }}
                    />
                     <TypewriterComponent
                        onInit={(sentence) => {                        
                            sentence.pauseFor(5000).typeString(this.state.lineThree).changeDelay(100).start();
                            
                        }}
                    />
                     <TypewriterComponent
                        onInit={(sentence) => {                  
                            sentence.pauseFor(7500).typeString(this.state.lineFour).changeDelay(100).start(); 
                        }}
                    />
                    
                </div>           
            </div>
        );
    }
}

export default OpeningScreen;