import styled from 'styled-components'

const Container = styled.div`
  /*THEME TRANSITION*/
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
  background-color: ${props => props.theme.colors.background};
  width: 100%;
  height: 100vh;
  padding: 2rem 7rem 0rem 6rem;
`

export default Container
