import "./post.css"
import {Users} from "../../dummyData"
import User from "../user/User"
import {Favorite, FavoriteBorderOutlined, MoreHorizOutlined} from "@material-ui/icons"
import React, {useState, useEffect} from "react"

const Post = ({post}) => {
    const user = Users.filter((u)=>u.id===post.userId)[0]; // to get the user who posted.
    const [likes, setlikes] = useState(post.like)
    const [liked, setliked] = useState(false);
    const [animate, setanimate] = useState(false);

    const updateLike = () => {
        if(liked){
            setlikes(likes-1);
        } else{
            setlikes(likes+1);
        }
        setliked(!liked);
    }

    useEffect(() => {
      return () => {
        if(!liked){
            setanimate(true);
            setTimeout(()=>{setanimate(false);},500)
        }
      }
    }, [liked])
    
    
  return (
    <div className="postContainer">
        <div className="postUser">
            <User user={user}/>
            <MoreHorizOutlined className="moreButton"/>
        </div>
        <div className="post">
            <div className="postDescribe">{post.desc}</div>
            <div className="postImageContainer">
                <img src={post.photo} alt="PostImage" onDoubleClick={updateLike} className="postImage" />
                {(animate)?<Favorite className="likeEffect"/>:""}
            </div>
        </div>
        <div className="postData">
            <div className="postButton">
                {/* <img src="assets/heart.png" alt="Like" className="likeButton" /> */}
                {(liked)?<Favorite className="likeButton" onClick={updateLike}/>:<FavoriteBorderOutlined className="likeButton" onClick={updateLike}/>}
                <p className="likes">{likes}<span className="LikeWord">Likes</span> </p>
            </div>
            <div className="postComment">
                <p className="comments">{`${post.comment} Comments`}</p>
                <p className="timestamp">{post.date}</p>
            </div>
        </div>
    </div>
  )
}

export default Post