import { Component } from "react";
import { useNavigate } from "react-router-dom";
import './Screen.css';


 const GoHome = () =>  {
   

    let navigate = useNavigate();

   

    return(
        <div class="yes-no">
            <span class="yes">Y</span>  
            <span class="or">/</span>  
            <span class="no" onClick={() => navigate('/home')}>N</span>  
        </div>  
    );
}

export default GoHome;