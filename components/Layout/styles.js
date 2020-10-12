import styled from 'styled-components'

const Container = styled.div`
  /*THEME TRANSITION*/
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
  background-color: ${props => props.theme.colors.background};
  width: 100%;
  height: 100vh;
  padding-left: 4rem;
  
  @media (max-width: 768px) {
    padding-left: 0;
  }
`

export default Container
