import { useState } from "react"
import "../styles/navbar.css"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <button className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <i class="fa fa-bars"/>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/Details">Details</a>
          </li>
          <li>
            <a href="/Rsvp">RSVP</a>
          </li>
          {/* <li>
            <a href="/photoUpload">Photo Upload</a>
          </li>
          <li>
            <a href="/photoGallery">Photo Gallery</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
