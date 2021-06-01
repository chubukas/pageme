import style from "styled-components"

import { darkMain, white } from "../../components/StyledComponents"

export const Label = style.label.attrs({
  htmlFor: `${(props: { name: string; }) => props.name}`
})`
color: ${darkMain};
margin-left: 15px;
font: italic bold 1rem Georgia, serif;
`;

export const InsideForm = style.div`
border: solid 1px ${darkMain};
padding: 30px;
border-radius: 20px;
font: italic bold 1rem Georgia, serif;

  input, textarea, select {
  border: none;
  border-bottom: solid 2px ${darkMain};
  border-radius: 0px;

    &:hover, &:focus, &:active {
      outline: none !important;
      -webkit-appearance:none !important;
      box-shadow: none !important;
    }
  }
`;

export const Button = style.button.attrs({ type: "submit", className: `btn` })`
background-color: ${darkMain};
color: ${white};
`;