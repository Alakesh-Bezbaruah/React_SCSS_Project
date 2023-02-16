import { useState } from "react";
import "./contact.scss";
import {AddLocationAlt} from "@mui/icons-material"


const PDF_FILE_URL = 'http://localhost:3000/Alakesh_Bezbaruah_CV.pdf'

export default function Contact() {

  const [message , setMessage] = useState(false)

  const handleSubmit = (e) => {
     e.preventDefault();
     setMessage(true)
  }

  const downloadFileAtURL = (url) =>{
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
  }

  return (
    <div className='contact' id="contact">
        <div className="left">
          <h2>My Address</h2>

          <div className="address">
            <AddLocationAlt className="addressIcon"/>
            <span>Guwahati - 781040, Assam, India</span>
          </div>

          <div className="pdf">
            <span>My CV</span>
            
            <div className="pdfButton">
                <button onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}>Download here</button>
            </div>
            
          </div>
        </div>

        {/* <div className="right">
          <h2>Contact me.</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Emai"/>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks , I'll reply ASAP :)</span>}
          </form>
        </div> */}

    </div>
  )
}
