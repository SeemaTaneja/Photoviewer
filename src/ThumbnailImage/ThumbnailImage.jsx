import React from "react";
import "./ThumbnailImage.css"


function ThumbnailImage(props){
    function onClick(){
        props.setdisplayImageUrl(props.imageUrl)
    }
    return <div>
        <img src={props.imageUrl} alt ="Thumbnail" className = "Thumbnail-image" onClick={onClick}/> 
        </div>  
}
export default ThumbnailImage