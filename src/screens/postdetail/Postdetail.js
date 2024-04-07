import React from "react";
import "./Postdetail.css";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hookss/useFetch";
import { useEffect } from "react";

import AppsubmitButton from "../../component/navbar/appsubmitbutton.js/AppsubmitButton";

const Postdetail = () => {
  const location = useLocation();

  const { state:post } = location;
  const { data, error,  optionsData} = useFetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`,'DELETE')
  const navigate = useNavigate()

  const handleEdit = ()=>{
       navigate(`/edit/${post.id}`,{state:post})
  }
  const handleDelete = ()=>{
    optionsData()
}
useEffect(()=>{
  if(data.length !== 0){
    const timer = setTimeout(() => navigate("/"),3000)
    return() => clearTimeout(timer)
  }
},[data,navigate])
   
  return (
    <div className="container outer">
    <div className="jumbotron">
      <h1 className="display-4">{post.title}</h1>
      <p className="lead">{post.body}</p>
      {
          data.length !== 0 && (<div className="alert alert-success" role="alert">
        Post Deleted successfully
        </div>)
        }
        {
          error && <div className="alert alert-danger" role="alert">
          {error}
        </div>
        }
      <div className="float-end">
        <AppsubmitButton onClick={handleDelete} title="Delete"/>
         <AppsubmitButton onClick={handleEdit} title="Edit"/>
      
      </div>
    </div>
    </div>
  );
};

export default Postdetail;
