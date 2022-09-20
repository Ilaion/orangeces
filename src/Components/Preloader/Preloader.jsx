import React from "react";
import spinner from "../../Images/spinner.svg";

let Preloader = (props) => {
    return(
        <div>
            <img src={ spinner } alt="Preloader"/>
        </div>
    )
}
export default Preloader;