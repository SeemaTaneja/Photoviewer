import React , {useState} from "react";
import "./PhotoViewer.css"
import ThumbnailList from "../ThumbnailList/ThumbnailList"

function PhotoViewer(){
    const[displayImageUrl , setdisplayImageUrl]=useState(`https://picsum.photos/id/600/1600/900.jpg`);
    return <div>
        <h1>Photo Viewer</h1>
        <img className = "Main-image" src={displayImageUrl} alt={"Main"}/>
        <ThumbnailList setdisplayImageUrl={setdisplayImageUrl}/>
    </div>
}
export{PhotoViewer};