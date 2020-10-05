import styled from 'styled-components'

const Container = styled.div`
  /*THEME TRANSITION*/
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
  background-color: ${props => props.theme.colors.backgroundAlt};
  color: ${props => props.theme.colors.foreground};
  position: fixed;
  top: 2rem;
  right: 2rem;
  height: 4rem;
  width: 4rem;
  border-radius: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;
`

export default Container
