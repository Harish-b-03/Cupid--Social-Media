import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

import "./home.css"

function Home() {
  return (
    <>
    <Topbar/>
    <main className="main">
      <div className="Sidebar">
        <Sidebar/>
      </div>
      <div className="Feed">
        <Feed/>
      </div>
      <div className="Rightbar">
        <Rightbar/>
      </div>
    </main>
    </>
  )
}

export default Home