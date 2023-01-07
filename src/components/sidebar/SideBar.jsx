import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
     <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis possimus vel in quidem impedit id minus sit. Veritatis sunt similique quo iste, no!</p>
     </div>
     <div className="sidebarItem">
     <span className="sidebarTitle">Categories</span>
     <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
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
