import react from 'react';
import '../Navbar/Navbar.css';

function Navbar() {
  return (
    <div className="btnWrapper btnPositioning">
      <button className="navBtn">ABOUT ME</button>
      <button className="navBtn">SKILLS</button>
      <button className="navBtn">CONTACT</button>
    </div>
  );
}

export default Navbar;
