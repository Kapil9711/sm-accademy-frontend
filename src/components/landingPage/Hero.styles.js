import styled from "styled-components";

export const Navbar = styled.nav`
  background-color: #fff;
  height: 60px;
  width: 100%;
  display:flex;
  align-items: center;
  justify-Content:space-around;
  margin: auto;
  ${'' /* position: fixed; */}

{

}
 & h2{
   margin: 0;
   color: #FE5D37;
   cursor: pointer;
}
   & .header-list{
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 2em;
    cursor: pointer;
  }

  & .header-list a {
    text-decoration: none;
}
  & .student-btn{
    transition: .5s;
    height: 40px;
    padding: 2px;
    border-radius: 50px;
    color: #FFFFFF;
    background-color: #FE5D37;
    border: none;
    cursor: pointer;
}
& .header-list > li:hover{
  color: #FE5D37;
}
`
// export default Navbar;

export const Main = styled.main`
     margin: 0;
     display: flex;
     justify-content: center;
     align-itmes:center;
     margin:10px;
     height: 100vh;
     
     & .carousel-item {
      display: flex;
     flex-direction: row; 
      justify-content: center;
      align-items: center;
      width: 100%;
     }

  & .carousel-img {
    max-width: 100%;
    height: auto;
  }
`