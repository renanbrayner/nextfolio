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
    opacity: 0.8;
    filter: brightness(1.2);
    width: 50%;
    height: 100%;
    background: url("./about.png");
    background-position: center;
    margin-left: 1rem;
  }
`

export default Container
