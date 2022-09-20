import React from "react";
import default_prof_back from "../../Images/defaul_background.png"
import mod from "./defaultProfileBackground.module.css"

const defaultProfileBackground = (props) => {
    return(
        <div >
            <img className={mod.backSize} src={default_prof_back} alt=""/>
        </div>
    )
}

export default defaultProfileBackground;