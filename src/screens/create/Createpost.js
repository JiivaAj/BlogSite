import React, { useEffect } from 'react'
import './Createpost.css'
import { useState } from 'react'
import useFetch from '../../hookss/useFetch'
import { useNavigate } from 'react-router-dom'
import AppsubmitButton from '../../component/navbar/appsubmitbutton.js/AppsubmitButton'
const Createpost = () => {

  const navigate = useNavigate()
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [validationError, setvalidationError]= useState('')
  const {data,error,optionsData} = useFetch("https://jsonplaceholder.typicode.com/posts",'POST')

  

  const handleSubmit = (e)=>{
    e.preventDefault()
   
    if(!title){
      setvalidationError('Title should not be empty')
       return
    }
    if(!content){
      setvalidationError('Content should not be empty')
      return
    }
    setvalidationError('')
    console.log({title,body:content,userId:1})
    optionsData({title,body:content,userId:1})
  }
  useEffect(()=>{
    if(data.length !== 0){
      const timer = setTimeout(() => navigate("/"),3000)
      return() => clearTimeout(timer)
    }
  },[data,navigate])

  
  return (
    <div className='outercontainer'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label><h6>Title</h6></label>
          <input type="text" className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label><h4>Content</h4></label>
         <textarea className='form-control' value={content} onChange={(e)=>setContent(e.target.value)}/>
        </div>
        {
          validationError && <div className="alert alert-danger" role="alert">
          {validationError}
        </div>
        
        }
        {
          data.length !== 0 && <div className="alert alert-success" role="alert">
        Post created successfully
        </div>
        }
        {
          error && <div className="alert alert-danger" role="alert">
          {error}
        </div>
        }
        <div className="float-end">
      
         <AppsubmitButton title="Create"/>
      </div>
      </form>
    </div>
  )
}

export default Createpost