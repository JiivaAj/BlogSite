import React from "react";
import "./Post.css";
import { useNavigate } from "react-router-dom";
import useThemeContext from "../../../hookss/useThemeContext";


const Post = ({post}) => {
    const navigate = useNavigate()
     const {theme} = useThemeContext()

    const handleClick = () =>{
          navigate(`/postss/${post.id}`,{state:post})
         }
  return (
    <div className={`card ${theme}card`}onClick={handleClick}>
      <h5 className="card-header">{post.title}</h5>
      <div className="card-body">
        <p className="card-text">
          {post.body}
        </p>
       
      </div>
    </div>
  );
};

export default Post;
