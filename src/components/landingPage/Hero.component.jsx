// import { Link } from "react-router-dom";
import Navbar from "./Hero.styles";
// import './header.css';
const Hero = () => {
  return (
    <>
      <Navbar>
        <h2>SM.accademy</h2>
      <ul className="header-list">
        
          <li>Home</li>
        
          <li>Contect</li>
       <li>Classes </li>
       <li>About Us</li>
       <li>Appointment</li>
        </ul>
        <button className="student-btn">Student Login</button>

      </Navbar>
    </>
  );
};

export default Hero;
