import "./Topbar.css"

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">l</div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Services</li>
          <li className="topListItem">Contact</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="imgIcon" src="/asset/" alt="img" />
      </div>
    </div>
  )
}
