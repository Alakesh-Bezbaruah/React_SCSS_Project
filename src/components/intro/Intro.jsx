import "./intro.scss";
import {ArrowDownward} from "@mui/icons-material"
import {init} from 'ityped'; 
import { useEffect, useRef} from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
      init(textRef.current, {
        showCursor: true,
        backDelay:1500,
        backSpeed: 60,
        strings: ["React", "Javascript", "Node", "Express", "Git", "Docker", "AWS", "Database"],
      });
  },[]);

  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/ab.jpg" alt=""/>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hello , I'm</h2>
            <h1>Alakesh Bezbaruah</h1>
            <h3>B.Tech (Computer Science & Engineering)</h3>
            <br/>
            <h2>Web Developer</h2>
            <br/><br/>
            <h3>My skills are  <span ref={textRef}></span></h3>
          </div>
          <a href="#portfolio">
            <ArrowDownward className="img"/> 
          </a>
        </div>
    </div>
  )
}
