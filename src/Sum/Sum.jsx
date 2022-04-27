import React from "react";
import './Sum.css';

class Sum extends React.Component {
    constructor() {
        super();
        this.state = {
            sum: 0,
        }
    }

    adder = () => {
        const addends = document.getElementsByClassName('addends');
        let total = 0;

        for (const elm of addends) {
            total += parseFloat(elm.value);
        }

        this.setState({ sum: total });
    }

    digit = (event) => {
        const maxLength = 1;
        if (event.target.value.length > maxLength) {
            event.target.value = event.target.value.slice(0, maxLength);
        }
    }

    render() {

        return(
            <div className="sum">
                <input className="addends" name="one" onBlur={this.adder} type="number" id="box-one" onInput={this.digit}/>
                <span>+</span>

                <input className="addends" name="two" onBlur={this.adder} type="number" id="box-two" onInput={this.digit}/>
                <span>+</span>

                <input className="addends" name="three" onBlur={this.adder} type="number" id="box-three" onInput={this.digit}/>
                <span>+</span>

                <input  className="addends" name="four" onBlur={this.adder} type="number" id="box-four" onInput={this.digit}/>
                <span>=</span>

                <span>{this.state.sum}</span>
            </div>
        );
    }
}

export default Sum;