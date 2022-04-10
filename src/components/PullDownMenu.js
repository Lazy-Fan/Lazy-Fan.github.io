import React, { Fragment, useState, useEffect } from "react";
import "./CSS/PullDownMenu.css";



export default function PullDownMenu({
    currContentId, 
    currTitleId, 
    downTriangleString, 
    upTriangleString, 
    content1,
    link1,
    content2,
    link2,
    content3,
  }) {


    

    // const currDivId = props.currDivId;
    // const currTitleId = this.props.currTitleId
    // const downTriangleString = this .props.downTriangleString;
    // const upTriangleString = this.props.upTriangleString;
    // const content = this.props.content;

    function showInsidePullDown(){
        var currDiv = document.getElementById(currContentId);
        var currTitle = document.getElementById(currTitleId);

        if(currDiv.style.display === "block"){
            currDiv.style.display = "none";
            currTitle.innerHTML = downTriangleString;
        }else{
            currDiv.style.display = 'block';
            currTitle.innerHTML = upTriangleString;
        }
    };

    return(
        <Fragment>
            <div className = "inside-pull-down">
                <div className = "inside-pull-down-title" onClick = {showInsidePullDown}>
                    <h3 id= {currTitleId}>
                        {downTriangleString}
                    </h3>
                </div>

                <div id = {currContentId} className = "inside-pull-down-content">
                    <p>
                        {content1}
                        <a href = {link1}>{link1}</a>
                        {content2}
                        <a href = {link2}>{link2}</a>
                        {content3}
                    </p>

                </div>

            </div>
        </Fragment>
    )
}

// export default PullDownMenu;



