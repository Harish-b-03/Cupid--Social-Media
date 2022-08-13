import "./sidebar.css"
import {RssFeed, ChatOutlined, PlayCircleOutlineOutlined, Group, HelpOutline, WorkOutlined, School, Today, WorkOutlineOutlined, BookmarkBorderOutlined, PlayCircleFilledOutlined} from "@material-ui/icons"

function Sidebar() {
  return (
    <div className="SidebarContainer">
      <div className="sidebarLinks">
        <ul className="sidebarLinkItems">
          <li className="sidebarLinkItem">
            <div className="linkIcon"><RssFeed/></div>
            <div className="linkName">Feed</div>
          </li>
          <li className="sidebarLinkItem">
            <div className="linkIcon"><ChatOutlined/></div>
            <div className="linkName">Chats</div>
          </li>
          <li className="sidebarLinkItem">
            <div className="linkIcon"><PlayCircleOutlineOutlined/></div>
            <div className="linkName">Videos</div>
          </li>
          <li className="sidebarLinkItem">
            <div className="linkIcon"><Group/></div>
            <div className="linkName">Groups</div>
          </li>
          <li className="sidebarLinkItem">
            <div className="linkIcon"><BookmarkBorderOutlined/></div>
            <div className="linkName">Bookmarks</div>
          </li>
          <li className="sidebarLinkItem">
            <div className="linkIcon"><HelpOutline/></div>
            <div className="linkName">Questions</div>
          </li>
          <li className="sidebarLinkItem">
            <div className="linkIcon"><WorkOutlineOutlined/></div>
            <div className="linkName">Jobs</div>
          </li>
          <li className="sidebarLinkItem">
            <div className="linkIcon"><Today/></div>
            <div className="linkName">Events</div>
          </li>
          <li className="sidebarLinkItem">
            <div className="linkIcon"><School/></div>
            <div className="linkName">Courses</div>
          </li>
        </ul>
      </div>
      <div className="followers">

      </div>
    </div>
  )
}

export default Sidebar