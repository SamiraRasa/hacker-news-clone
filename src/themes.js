import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#E4E6EB",
  fontColor: "#181818",
  opacity: 1
};

export const darkTheme = {
  body: "#212121",
  fontColor: "#CF6679",
  opacity: 1,
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
    display: flex;
    justify-content: center;
    align-items: center;
    
	}
`;
