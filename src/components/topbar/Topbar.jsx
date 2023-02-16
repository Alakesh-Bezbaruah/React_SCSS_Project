import "./topbar.scss";
import {Call,  Mail, LinkedIn, GitHub } from '@mui/icons-material';

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">My CV</a>
            <div className="itemContainer">
              <Call className="icon link"/>
              <span className="link">+91 9957021385</span>
            </div>

            <a href="mailto: alakeshbezbaruahofficial@gmail.com" className="link">
            <div className="itemContainer">
              <Mail className="icon"/>
              <span>alakeshbezbaruahofficial@gmail.com</span>
            </div>
            </a>
            <a href="https://www.linkedin.com/in/alakesh-bezbaruah" className="link">
            <div className="itemContainer">
              <LinkedIn className="icon"/>
              <span>linkedin.com/in/alakesh-bezbaruah</span>
            </div>
            </a>

            <a href="https://github.com/Alakesh-Bezbaruah" className="link">
            <div className="itemContainer">
              <GitHub className="icon"/>
              <span>github.com/Alakesh-Bezbaruah</span>
            </div>
            </a>
          </div>
          
          <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
    </div>
  )
}
