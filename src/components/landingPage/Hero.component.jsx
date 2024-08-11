import { useState } from "react";
import { SmallButton } from "../../utlis/Buttons";
import { Navbar, TitleWrapper } from "./Hero.styles";
import { GiHamburgerMenu } from "react-icons/gi";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "../CustomArrow"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Main } from "./Hero.styles";
import carousel from "../../Images/assest/carousel.jpg";
import carousel2 from "../../Images/assest/carousel2.jpg";

const SectionsTitle = ["Home", "Contect", "Classes", "About Us", "Appoinment"];

const Hero = () => {
  const [showSections, setShowSections] = useState(false);
  console.log(showSections);

  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  
  return (
    <>
      <Navbar showsections={showSections}>
        <TitleWrapper>
          <GiHamburgerMenu
            onClick={() => setShowSections((prev) => !prev)}
            className="hamburger-icon"
          />
          <h2>SM.accademy</h2>
        </TitleWrapper>
        <SmallButton className="btn1">Student Login</SmallButton>
        <NavSectionList {...{ showSections }} />
        <SmallButton className="btn2">Student Login</SmallButton>
      </Navbar>

      <Main>
        <Slider {...settings}>
          <div className="carousel-item">
            <img className="carousel-img" src={carousel} alt="carousel-1" />
          </div>
          <div className="carousel-item">
            <img className="carousel-img" src={carousel2} alt="carousel2" />
          </div>
        </Slider>
      </Main>
    </>
  );
};

const NavSectionList = ({ showSections }) => {
  const [isActive, setIsActive] = useState("Home");

  return (
    <ul className={showSections && "active"}>
      {SectionsTitle.map((title) => {
        return (
          <li
            className={isActive === title && "active"}
            onClick={() => setIsActive(title)}
            key={title}
          >
            {title}
          </li>
        );
      })}
    </ul>
  );
};

export default Hero;
