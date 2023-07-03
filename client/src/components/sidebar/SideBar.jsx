import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function SideBar() {

   const [cats,setCats] = useState([]);

   useEffect(()=>{
   const getCats = async ()=>{
      const res = await axios.get("http://localhost:4000/api/categories");
      console.log(res);
      setCats(res.data);
   };
    getCats();
   },[])
  return (
    <div className="sidebar">
     <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis possimus vel in quidem impedit id minus sit. Veritatis sunt similique quo iste, no!</p>
     </div>
     <div className="sidebarItem">
     <span className="sidebarTitle">Categories</span>
     <ul className="sidebarList">
       {cats.map((c)=>(
         <Link to = {`/?cat=${c.name}`} className="link">
         <li className="sidebarListItem">{c.name}</li>
         </Link>
          ))}
      </ul>
     </div>
     <div className="sidebarItem">
     <span className="sidebarTitle">Follow Us</span>
     <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
     </div>
     </div>
    </div>
  )
}
