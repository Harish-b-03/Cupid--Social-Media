import React from "react"
import "./rightbar.css"
import {Users} from "../../dummyData";
import User from "../user/User";
import Ad from "../ad/Ad";

function Rightbar() {
  return (
    <div className="rightBarContainer">
      <Ad/>
      <div className="followers">
        <ul className="followersList">

          {Users.map((user)=>(
            <li className="followerListItem">
              <User key={user.id} user={user}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar