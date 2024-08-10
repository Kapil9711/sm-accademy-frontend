// import { Link } from "react-router-dom";
import { useState } from "react";
import { SmallButton } from "../../utlis/Buttons";
import { Navbar, TitleWrapper } from "./Hero.styles";
import { GiHamburgerMenu } from "react-icons/gi";

const SectionsTitle = ["Home", "Contect", "Classes", "About Us", "Appoinment"];

const Hero = () => {
  const [showSections, setShowSections] = useState(false);
  console.log(showSections);
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
