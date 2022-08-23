import React from "react"
import "./topbar.css"
import {Search, Notifications, Chat, Person, Menu} from "@material-ui/icons"

function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="topbarLogo">
              <a href="/" className="topbarLogoLink">
                Cupid
              </a>
            </span>
        </div>

        <div className="topbarCenter">
          <div className="searchBar">
            <Search className="searchBarIcon"/>
            <input placeholder="search" className="searchBarInput" />
          </div>
        </div>
        
        <div className="topbarRight">
          <div className="topbarRightContainer">
            <Notifications className="topbarIcons"/>
            <Chat className="topbarIcons"/>
            <Person className="topbarIcons profile"/>
          </div>
          <div className="mobileMenu">
            <Menu className="menuButton"/>
          </div>
        </div>
    </div>
  )
}

export default Topbar