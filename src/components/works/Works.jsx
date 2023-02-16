import { useState } from "react";
import "./works.scss";
// import {ChevronLeft, ChevronRight} from "@mui/icons-material"

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    {
      id: '1',
      icon: "./assets/mobile.png",
      title: "Freelancer",
      desc: "Web Develop, React, Javascript, Node, Express, Database, Git, Basic AWS, Docker",
      img: "assets/f.jpg",
      exp: "more than 5 years",
    },
    {
      id: '2',
      icon: "./assets/globe.png",
      title: "On Job Trainee at Ministry of Micro Small Medium Enterprise Govt. of India",
      desc: "Web Develop, Server install & Manage, Switch & Router configuration, Software installation",
      img: "./assets/m.jpeg",
      exp: "approx 1 year",
    },
    {
      id: '3',
      icon: "./assets/writing.png",
      title: "Assistant Project Engineer at IIT Guwahati",
      desc: "Web Develop, React, Node, Express, Nginx, Git, Docker, Server Installation etc.",
      img: "./assets/iitg.png",
      exp: "Nov 2022 - present",
    },
  ];

  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide <  data.length -1 ? currentSlide+1 : 0)
  }

  return (
    <div className="works" id="works">
      <span className="employment">Employment History</span>
        <div className="slider" style={{transform: `translatex(-${currentSlide *100}vw)`}}>
          {data.map((d)=>(
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt=""/>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Experience {d.exp}</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt=""/>
              </div>
            </div>
            
          </div>
          ))}
        </div>
        <img src="assets/arrow.png" alt="" className="arrow left" onClick={()=>handleClick("left")}/>
        <img src="assets/arrow.png" alt="" className="arrow right" onClick={()=>handleClick()}/>

        {/* <ChevronLeft className="arrow left"/>
        <ChevronRight className="arrow right"/> */}
    </div>
  );
}
