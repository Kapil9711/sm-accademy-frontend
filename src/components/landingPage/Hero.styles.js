import styled from "styled-components";

const Navbar = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: auto & h2 {
    margin: 0;
  }
  & .header-list {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 2em;
  }

  & .header-list a {
    text-decoration: none;
  }
  & .student-btn {
    transition: 0.5s;
    height: 40px;
    padding: 2px;
    border-radius: 50px;
    cursor: pointer;
  }
`;

export default Navbar;
