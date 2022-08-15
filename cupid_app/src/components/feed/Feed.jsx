import React from "react"
import "./feed.css"
import {Posts} from "../../dummyData"
import Post from "../post/Post"

function Feed() {
  return (
    <div className="feedContainer">
      <div className="uploadPost">
        
      </div>

      <div className="feedPosts">
        {Posts.map((post) => (<Post key={post.id} post={post}/>))}
      </div>
    </div>
  )
}

export default Feed