import react from 'react';
import '../Footer/Footer.css';

function Footer() {
  return (
    <div className="footerWrapper">
  
        <div className="contactBtnWrapper">
          <button className="contactBtn">Linkedin</button>
          <button className="contactBtn">Github</button>
          <button className="contactBtn">Contact</button>
        </div>
        <p className="copyRight">Copyright © 2023 John Brian Capate</p>
   
    </div>
  );
}

export default Footer;
