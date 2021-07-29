import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src="" alt="" />
        <p>Lorem ipseum</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Category</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">ICT</li>
          <li className="sidebarListItem">ICT</li>
          <li className="sidebarListItem">ICT</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">fOLLOW</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">ICT</li>
          <li className="sidebarListItem">ICT</li>
          <li className="sidebarListItem">ICT</li>
        </ul>
      </div>
    </div>
  )
}
