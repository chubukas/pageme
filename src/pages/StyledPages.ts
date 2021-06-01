import style from "styled-components"
import {
  NonMobileNav, MobileNav, darkMain, white, mainColor, MainFont
} from "../components/StyledComponents";


export const MainBody = style.div`
  width: 90%;
  overflow-y: auto;
  background-color: ${white};
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  padding: 40px 80px;
  margin: 8% auto 40px;
  border-radius: 10px;
  height: 450px;
  font-family: ${MainFont};

  .links{
  color: ${darkMain};
  }

  .inpageNavbar{
    bottom: -50px;
  }

  @media (max-width: 768px){
    margin-top: 18%;
    padding: 15px 5px;
  }

`;

export const InpageNonMobileNav = style(NonMobileNav)`
top: -500px;
left: 420px;

.active {
  color: ${mainColor};
  border-bottom: 4px ${mainColor} solid;
  } 

li {
  &:hover { 
    color: ${mainColor};
    border-bottom: 4px ${mainColor} solid;
  }
}
  

@media (min-width: 768px){
  top: -670px;
  left: 120px;
}

@media (min-width: 1024px){
  top: -480px;
  left: 200px;
}

@media (min-width: 1280px){
  top: -500px;
  left: 300px;
}

@media (min-width: 1440px){
  top: -530px;
  left: 400px;
}
`;

export const InpageMobileNav = style(MobileNav)`

top: -70px;
left: 5px;

.active {
  color: ${mainColor};
  } 

@media (min-width: 700px){
  top: -100px;
  left: 0px;
}

@media (max-width: 320px){
  top: -60px;
}
`;
