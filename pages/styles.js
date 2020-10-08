import styled from 'styled-components'
import float from '../styles/animations/float'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  .text {
    width: 50%;
    font-size: 1.5rem;
  }

  .img-container {
    width: 50%;
    height: 100%;
    display: grid;
    place-items: center;

    .link {
      width: 70%;
      height: 70%;
      animation: ${float} 3s ease-in-out infinite; 

      .img {
        width: 100%;
        height: 100%;
        mask: url(./logo.svg);
        mask-size: contain;
        mask-repeat: no-repeat;
        background: ${props => props.theme.colors.foreground};
        transition: background 200ms ease-in-out;

        :hover {
          background: ${props => props.theme.colors.primary};
        }
      }
    } 
  }
`

export default Container
