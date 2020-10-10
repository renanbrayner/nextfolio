import styled from 'styled-components'

const Container = styled.div`
  /*THEME TRANSITION*/
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
  background-color: ${props => props.theme.colors.background};
  width: 100%;
  height: 100vh;
  padding-left: 4rem;
  .error {
    display: none;
  }
  
  @media (max-width: 768px) {
    .error {
      display: grid;
      place-items: center;
      padding: 10vw;
      position: fixed;
      background-color: ${props => props.theme.colors.background};
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1000;

      .error-text {
        text-align: center;
        .red {
          color: ${props => props.theme.colors.error}
        }
        p {
          font-size: 1.8rem;
        }
      }
    }

  }
`

export default Container
