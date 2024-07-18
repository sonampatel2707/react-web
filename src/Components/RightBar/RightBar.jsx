import React from "react";
import "./RightBar.css"

const RightBar = ({data2, bgColor,color}) => {
  return (
    <>
      <div className="right-container" style={{ backgroundColor: `${bgColor}`,
       color: `${color}`, }}>
        <div className="post-img">
          <img id= "_img"
            src={data2.img}
            alt=""/>

          <div className="inside-img">
            <div className="img">
              <img
                src={data2.authorImg}
                alt=""/>
            </div>
            <div className="text">
              <h3>{data2.authorName}</h3>
              <p>{data2.authorText}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightBar;
