import React from "react";
import './Text.css';


class OpeningText extends React.Component {
    constructor() {
        super();
        this.speed = 1000;
        this.i = 0;       
    }

    
  

    render() {

        const { one } = this.props;

        //const oneArray = one.split('');

        return(
            <div>
                <div id="line-one">
                   {one}               
                </div>
            </div>
        );
    }
}

export default OpeningText;