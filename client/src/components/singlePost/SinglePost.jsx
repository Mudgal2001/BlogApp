import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation ,Link} from "react-router-dom"

import "./singlePost.css"

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post,setPost] = useState({})
  useEffect(()=>{
   const getPost = async ()=>{
       const res = await axios.get("/posts/"+path);
       setPost(res.data)
   };
   getPost()
  },[path])
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo &&( <img src={post.photo} alt="" className="singlePostImg" />)}
        <h1 className="singlePostTitle">
        {post.title}
        <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${post.username}`} className="link">
            <b className="singlePostAuthor">
                {post.username}
            </b>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  )
}
