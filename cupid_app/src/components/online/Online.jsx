import "./online.css"

function Online({user}) {
  return (
    <li className="followerListItem">
        <div className="followerContainer">
            <div className="followerProfile">
                <img src={user.profilePicture} alt="profilePhoto" className="followerImage" />
                <div className="onlineBadge"></div>
            </div>
            <div className="followerName">{user.username}</div>
        </div>
    </li>
  )
}

export default Online