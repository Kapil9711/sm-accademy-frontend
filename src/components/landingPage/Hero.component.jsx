import { Navbar } from "./Hero.styles";
import { Main } from "./Hero.styles";

// import Bottom from "../../Images/assest/Bottom.png";
import carousel from "../../Images/assest/carousel.jpg";
import carousel2 from "../../Images/assest/carousel2.jpg";

const Hero = () => {
  return (
    <>
      <Navbar>
        <h2>SM.academy</h2>
        <ul className="header-list">
          <li>Home</li>
          <li>Contact</li>
          <li>Classes</li>
          <li>About Us</li>
          <li>Appointment</li>
        </ul>
        <button className="student-btn">Student Login</button>
      </Navbar>

      <Main>
          <div className="carousel-item">
            <img className="carousel-img" src={carousel} alt="carousel-1" />
  </div><div className="carousel-item">

            <img className="carousel-img" src={carousel2} alt="carousel2" />
          </div>
      </Main>
    </>
  );
};

export default Hero;
