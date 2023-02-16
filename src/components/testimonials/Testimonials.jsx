import "./testimonials.scss";

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Retail Management",
      title:"Diploma in Retail Management",
      desc: "North Eastern Council Govt. of India, Shilong, Third Eye",
      year: "2012",
      featured: true,
    },
    {
      id: 2,
      name: "B.Tech",
      title:"Computer Science & Engineering",
      desc: "Gauhati University",
      year: "2012 - 2-16",
      featured: true,
    },
    {
      id: 3,
      name: "Java",
      title:"Summer Training Course on JAVA",
      desc: "Robotics Club Assam Engineering College",
      year: "2014",
      featured: true,
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Education & Courses</h1>
      <div className="container">

        {data.map(d=>(

        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <span>{d.year}</span>
          </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
