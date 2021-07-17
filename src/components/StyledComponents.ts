import style from "styled-components"

export const mainColor = "#ffc900";
export const darkMain = "#866c0c";
export const white = "white";
export const MainFont = `"Poppins", sans-serif`;
export const HeaderFont = `"Courgette", cursive`

export const BackgroundHero = style.div`
  background: url(${(props: { image: string; }) => props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: ${mainColor};
  font-family: ${MainFont};
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;

  position: fixed
`;

export const Overlay = style.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 0px;
  overflow: hidden;
  background: linear-gradient(90deg,
    rgba(255,203,20,0.832) 38%,
    rgba(159,130,21,0.779) 65%,
    rgba(50,41,8,0.668) 93%
    )

`;

export const AllElements = style.div`
  position: relative;
  z-index: 999;
`;

export const HomeStyle = style.div`
display: flex;
justify-content: center;
align-items: center;
height: 600px;
flex-direction: column;

@media (min-width: 425px){
  height: 300px;
}

@media (min-width: 768px){
  height: 1000px;
}

@media (min-width: 1024px){
  height: 600px;
}

@media (max-width: 320px){
  height: 560px;
}

`;

export const HomeHeader = style.h1`
  font-family:${HeaderFont} ;
  color: ${white};
  font-size: 4rem;
  font-weight: bold;

  @media (max-width: 768px){
    font-size: 1.7rem;
  }

  @media (min-width: 768px){
    font-size: 3rem;
  }

  @media (min-width: 1024px){
    font-size: 4rem;
  }

  @media (max-width: 320px){
    font-size: 1.5rem;
  }
`;

export const HomeRole = style.div`
color: ${white};
font-size: 1.9rem;
margin: 0.5rem 0;
font-weight: bold;

@media (max-width: 768px){
  font-size: 1.5rem;
}

@media (min-width: 768px){
  font-size: 1.9rem;
}

@media (max-width: 380px){
  font-size: 1.2rem;
}
`;

export const BlinkingCursor = style.span`
  border-left: .1em solid ${mainColor};
  animation: blink .7s steps(1) infinite;

  @keyframes blink{
    50%{
      border-color: transparent;
    }
  }
`;

export const SocialIcons = style.div`
margin: 2rem 0 5rem 0;

  a {
    &:hover {
      color: ${darkMain} !important;
    }
  }

  @media (max-width: 320px){
    a {
    font-size: 1.3rem !important;
    }
  }
`;


export const NonMobileNav = style.div`
position: absolute;
top: 420px;
left: 420px;
font-weight: bold;
bottom: 200px;
 
.active {
  color: ${darkMain};
  border-bottom: 4px ${darkMain} solid;
  } 

ul {
  color: white;
  font-size: 1.1rem;
  display: flex;
  list-style-type: none;
}

a{
  text-decoration: none;
  color: white;
}

li {
  margin-right: 1rem;

  &:hover {
  color: ${darkMain};
    border-bottom: 4px ${darkMain} solid;
    cursor: pointer;
  }
}

@media (max-width: 768px){
  display: none;
}

@media (min-width: 768px){
  top: 620px;
  left: 180px;
}

@media (min-width: 1024px){
  top: 430px;
  left: 290px;
}

@media (min-width: 1280px){
  top: 430px;
  left: 410px;
}

@media (min-width: 1440px){
  top: 450px;
  left: 490px;
}

`;

export const MobileNav = style.div`
  position: absolute;
  top: 20px;
  left: 350px;

  button {
    border: 1px ${darkMain} solid;
    background: none !important;
 
  }

  .active {
    color: ${mainColor};
    }

  @media (min-width: 769px){
    display: none;
  }

  @media (max-width: 768px){
    left: 710px;
    top: 20px;
  }

  @media (max-width: 425px){
    left: 350px;
  }

  @media (max-width: 385px){
    left: 300px;
  }

  @media (max-width: 320px){
    left: 260px;
  }

}
`;

export const MobileDropDown = style.div`
  position: absolute;
  top: 50px;
  right: -15px;
  background-color: ${darkMain};
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  transition: all 10s ease-in 10s;
  max-width: 100px;
  z-index: 999;

  @media (min-width: 769px){
    display: none;
  }

  @media (max-width: 768px){
    display: block;
  }

  @media (max-width: 385px){
    right: -39px;
  }

  @media (max-width: 360px){
    right: -15px;
  } 

  @media (max-width: 320px){
     right: -13px;
  }

  a{
    text-decoration: none;
    color: ${white};
  }

  ul {
    font-size: 1.3rem;
    list-style-type: none;

  }

  li {
    margin: 3rem 1.5rem;
    &:hover {
        cursor: pointer;
        color: ${darkMain};
      }
  }
`;