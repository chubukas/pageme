import style from "styled-components"

import { darkMain, mainColor, white } from "../../components/StyledComponents"

export const MainPortfolio = style.div`
height: 240px;
margin-bottom: 15px;
background-position: center;
background-size: cover;
padding: 10px;
position: relative;
z-index: 1;
overflow: hidden;
border-radius: 10px 10px;

  &:after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    background-color: ${mainColor};
    opacity: 0.5;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    z-index: -1;
  }

  &:hover:after {
    height: 100%;
  }

  &:hover .portfolioHover {
    bottom: 0;
    opacity: 1;
    visibility: visible;
  }
`;

export const PortfolioHover = style.div.attrs({ className: "portfolioHover" })`
position: absolute;
width: 100%;
left: 0;
bottom: -60px;
padding: 5px;
z-index: 3;
-webkit-transition: 0.3s;
transition: 0.3s;
opacity: 0;
visibility: hidden;

text-transform: uppercase;
text-align: center;

  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-color: ${darkMain};
    z-index: -1;
  }
`;

export const BreadCrumb = style.div`
  span {
    background-color: ${darkMain};
    color: ${white};
    font: italic bold .8rem Georgia, serif;
    text-shadow: -1px 1px 0 ${darkMain}, -1px 2px 0 #0a0e27;
    border-radius: 10px;
  }

  a {
    text-decoration: none;
    color: ${darkMain};
    font: italic bold .8rem Georgia, serif;
    text-shadow: -1px 1px 0 ${darkMain}, -1px 2px 0 #0a0e27;
    border-radius: 10px;
  }

  a:hover{
    color: ${white};
    background-color: ${darkMain};
  }

  i {
    color: ${darkMain};
  }

`;