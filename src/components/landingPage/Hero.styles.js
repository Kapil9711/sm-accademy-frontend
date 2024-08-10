import styled from "styled-components";

const Navbar = styled.nav`
  background-color: red;
  height: 60px;
  width: 100%;
  display:flex;
  alignItems: center;
  justifyContent:center;
  margin: auto

& h2{
   margin: 0;
   border: 2px solid black;
}
   & .header-list{
    display: flex;
    list-style: none;
    alignItems: center;
    justifycontent: center;
    gap: 2em;
    border: 2px solid black
  }

  & .header-list a {
    text-decoration: none;
}
& .student-btn{
    font-weight: ;
    transition: .5s;
    height: 40px;
    padding: 2px;
    border-radius: 50px;
}

`

export default Navbar;

