
import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="" alt="" />
        <div className="postInfo">
          <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
          </div>
          <span className="postTitle">Lorem ipsum dolor sit amet</span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique sed possimus amet nulla odio, tempora quod distinctio perspiciatis quibusdam tenetur. Numquam maxime veniam libero non fugit perferendis! Animi, quis.</p>
    </div>
  )
}
