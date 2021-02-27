import styled from 'styled-components'
import float from '../styles/animations/float'

const Container = styled.div`
  padding-left: 2rem;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  .contact-buttom {
    margin-top: 15px;
    display: inline-block;
    padding: 0.6rem 1rem;
    border: 2px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    transition: all 200ms;
    cursor: pointer;
    :hover {
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.background};
    }
  }

  .text {
    width: 50%;
    font-size: 1.5rem;
    
    .contact {
      display: none;
      justify-content: space-evenly;
      flex-direction: row;
      list-style-type: none;
      margin: 15px 10%;
    }
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
        mask-position: center;
        background-color: ${props => props.theme.colors.foreground};
        transition: background 200ms ease-in-out;

        :hover {
          background: ${props => props.theme.colors.primary};
        }
      }
    } 
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0;
    .text {
      text-align: center;
      width: 100%;
      font-size: 2.9vw;
      margin-bottom: auto;
      .contact {
        display: flex;
      }
    }
    .img-container {
      margin-top: 4rem;
      width: 100%;
      height: 45%;
    }
    .contact-buttom {
      display: none;
    }
  }
`

export default Container
