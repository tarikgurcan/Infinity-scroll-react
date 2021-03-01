import React from "react";

const ImageContainer = ({ datas, onload }) => {




  return (
    <div className="image-container" id="image-container">
      {datas.map((data,index)=>{
        return(
          <a href={data.links.html} key={index}>
          <img
            src={data.urls.regular}
            alt={data.alt_description}
            onLoad={onload}
          />
        </a>
        )
      })}
    </div>
  );
};

export default ImageContainer;
