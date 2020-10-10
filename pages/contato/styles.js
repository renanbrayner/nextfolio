import float from '../../styles/animations/float'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  .form-container {
    width: 50%;
    height: 100%;
    display: grid;
    place-items: center;

  }

  .img-container {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    .rotate {
      height: 30%;
      width: 100%;
      transition: transform 800ms ease-in-out;
      :hover {
        transform: rotate(-15deg);
        .img {
          background-color: ${props => props.theme.colors.primary};
        }
      }
      .img {
        height: 100%;
        width: 90%;
        mask: url(./mail.svg);
        mask-size: contain;
        mask-position: center;
        mask-repeat: no-repeat;
        background-color: ${props => props.theme.colors.foreground};
        animation: ${float} 3s ease-in-out infinite; 
      transition: background-color 500ms ease-in-out;
      }

    }
  }
`

export default Container
