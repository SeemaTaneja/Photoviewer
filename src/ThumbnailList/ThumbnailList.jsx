import React from "react";
import  ThumbnailImage  from "../ThumbnailImage/ThumbnailImage";
import "./ThumbnailList.css"

const brokenImages = [
    1, 24, 32, 36, 44, 47
];

function getImageUrls() {
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
        }
    }

    return urls;
}

function ThumbnailList(props){ 
    const imageUrls = getImageUrls();
    return <div className = "Thumbnail-list">{imageUrls.map(image => <ThumbnailImage imageUrl={image} setdisplayImageUrl={props.setdisplayImageUrl}/>)}</div>
}
export default ThumbnailList

