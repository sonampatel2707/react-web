import React from "react";
import "./Post.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

const Post = ({data,bgColor,color }) => {
  return (
    <>
    <div className="post-container" style={{ backgroundColor: `${bgColor}`, color: `${color}`, }}>
      <div className="person">
        <div className="author">
          <div className="img">
            <img src={data.pImag} alt="" />
          </div>
          <div className="text">
            <h3>{data.title}</h3>
            <p>{data.userName}</p>
          </div>
        </div>
        <div className="dot"><BsThreeDotsVertical /></div>
      </div>
      <p>{data.description}</p>
      <div className="post-img">
        <img src={data.mImag} alt= ""/>
      </div>
      <div className="like-comment">
        <div className="like"><FaHeart className="items" /> {data.like}{""}K</div>
        <div className="comment"><FaComment className="items" /> {data.comment}{""}K </div>
        <div className="share"><FaShare className="items" />{data.share}{""}K</div>
      </div>
    </div>
    </>
  );
};

export default Post;
