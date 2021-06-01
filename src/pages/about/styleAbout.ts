import style from "styled-components"

import { HeaderFont, darkMain, white } from "../../components/StyledComponents"


export const Header = style.h2`
  font-family: ${HeaderFont};
  font-weight: bold;
  color: ${darkMain};
`;

export const MyServices = style.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 17px 2px;
  padding: 10px 20px;
  border-bottom-left-radius:10px ;
  border-top-right-radius:10px ;
  background-color: ${darkMain};
  color: ${white};

  max-width: 120px;
  max-height: 140px

  &:hover {
  color:  ${darkMain};
  background-color: ${white};
  cursor: pointer;
  }

  span{
    font-size: 0.8rem;
    }

  @media (max-width: 320px){
    span{
    font-size: 0.6rem;
    }
  }
`;