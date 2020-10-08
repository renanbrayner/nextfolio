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
`

export default GlobalStyle
