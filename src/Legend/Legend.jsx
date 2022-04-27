import React from "react";
import './Legend.css';

class Legend extends React.Component {
    constructor() {
        super();
        this.alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    }

    tableGen = () => {
        return this.alpha.map((letter) => ( <div onClick={this.wordGen.bind(this)} className="ascii" key={letter}><span>{letter}</span><span>{this.toBinary(letter)}</span></div> ));
    }

    toBinary = (letter) => {
        return '0' + letter.charCodeAt('0').toString(2);
    }

    wordGen = (event) => {
        const maxWordLength = 15;
        const word = document.getElementById('word');
        if (word.innerText.length < maxWordLength) {
            word.innerText += event.target.parentElement.firstChild.innerText;
        }
    }


     
    render(){

        return(
            <div className="legend">
                <h3>Legend</h3>
                <div className="codes">   
                    {this.tableGen()} 
                    <div id="word"></div>
                </div>
            </div>
        )
    }
}

export default Legend;