import styled from "styled-components";


const Navbar = styled.nav`
  padding-block: 16px;
  min-height: 60px;

  width: 100%;
  display:flex;
  align-items: center;

  justify-content: space-between;
  margin: auto;
  user-select: none;
  transition: max-height 0.2s ease-in-out;
  max-height: 100px;

  & ul {

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    /* gap: 24px; */
  }

  & ul li {
    font-weight: 500;
    padding-inline: 20px;
    padding-block: 6px;
    border-radius: 4px;
    transition: all 0.5s linear;
  }

  & li:hover {
    background-color: hsl(11, 99%, 85%);
  }

  & li.active {
    color: hsl(11, 99%, 50%);

    font-weight: 600;
  }
  & .btn1 {
    display: none;
  }
  & .btn2 {
    display: initial;
  }

  @media (max-width: 880px) {
    & ul {
      display: none;
    }
    & ul.active {
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: start;
      padding-left: 16px;
    }

    & {
      display: ${(props) => (props.showsections ? "grid" : "flex")};
      max-height: ${(props) => (props.showsections ? "500px" : "100px")};
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    & button {
      justify-self: end;
    }

    & .btn2 {
      display: none;
    }
    & .btn1 {
      display: initial;
    }
  }
`

const TitleWrapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  & .hamburger-icon {
    font-size: 24px;
    display: none;
  }

  @media (max-width: 880px) {
    & .hamburger-icon {
      display: initial;
    }
  }
`;

export { Navbar, TitleWrapper };

