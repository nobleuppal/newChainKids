import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Carousel.css';

class Carousel extends React.Component {
    constructor() {
        super();  
        this.kidStats = require('./kidStats.json');   
        this.firstNFT = 0;
        this.lastNFT = this.kidStats.length - 1;
        this.state = {
            index: 0,
            chainKid: this.kidStats[this.firstNFT]
        }
    }

    
    nextNFT = () => {
       this.setState({ index: this.state.index + 1 }, () => {
            if (this.state.index < this.kidStats.length) {
                this.setState({ chainKid: this.kidStats[this.state.index]});
            }
            else {
                this.setState({index: 0, chainKid: this.kidStats[this.firstNFT] });
            }
       })
    }

    prevNFT = () => {
        this.setState({ index: this.state.index - 1 }, () => {
            if (this.state.index >= this.firstNFT) {
                this.setState({ chainKid: this.kidStats[this.state.index]});
            }
            else {
                this.setState({index: this.lastNFT, chainKid: this.kidStats[this.lastNFT]});
            }
       })
    }

    render() {

        const { chainKid } = this.state;

        return(
            <div className="carousel">
                <h3><span>No.</span>{chainKid.Number}</h3>
                <div className="slider-container">
                    <FontAwesomeIcon onClick={() => (this.prevNFT())} icon={faChevronLeft} />
                    <img src={chainKid.Picture} alt="NFT"/>
                    <FontAwesomeIcon onClick={() => (this.nextNFT())} icon={faChevronRight} />
                </div>
            </div>
        );
    }
}

export default Carousel;