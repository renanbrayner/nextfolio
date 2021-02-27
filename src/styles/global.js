import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    color: ${props => props.theme.colors.foreground};
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
  }
  
  a {
    color: ${props => props.theme.colors.foreground};
    text-decoration: none;
  }

  input,
  textarea {
    font-family: 'Montserrat', sans-serif;
    padding: 0.5rem;
    border: 1px solid ${props => props.theme.colors.backgroundAlt};
    border-radius: 8px;
    color: ${props => props.theme.colors.foreground};
    background: ${props => props.theme.colors.background};
    filter: brightness(0.75);
  }

  button {
    border: none; 
    border-radius: 8px;
    outline: none;
    color: ${props => props.theme.colors.foreground};
  }
`

export default GlobalStyle
