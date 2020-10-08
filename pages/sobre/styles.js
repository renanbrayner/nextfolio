import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  .text {
    width: 50%;
    text-align: justify;
  }

  .image {
    opacity: 0.9;
    filter: brightness(1.1) ;
    width: 50%;
    height: 100%;
    background-image: url("./about.png");
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 1rem;
  }
`

export default Container
