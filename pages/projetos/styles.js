import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  .grid {
    display: grid;
    width: 50%;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    z-index: 2;

    .project {
      height: 100%;
      width: 100%;
      object-fit: cover;
      cursor: pointer;
      filter: brightness(0.8) grayscale(0.8);
      transition: filter 200ms ease-in;
      background-color: ${props => props.theme.colors.background}; 

      :hover {
          filter: brightness(1) grayscale(0);
      }
    }

    .project:nth-child(1),
    .project:nth-child(4),
    .project:nth-child(5) {
      background-color: ${props => props.theme.colors.backgroundAlt};
    }
  }

  .selected {
    position: relative;
    width: 50%;
    height: 100%;
    background-color: ${props => props.theme.colors.background}; 
    .big {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .text-container {
      position: absolute;
      padding: 1rem;
      opacity: 0.9;
      bottom: 0px;
      width: 100%;
      height: 25%;
      box-shadow: 0px -10px 50px 50px ${props => props.theme.colors.background};
      background-color: ${props => props.theme.colors.background};
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .repo {
          margin-right: auto
        }
        
        a {
          background-color: ${props => props.theme.colors.backgroundAlt};
          padding: 12px 0;
          width: 49%;
          text-align: center;
          transition: background-color 200ms;
          font-weight: bold;

          :hover {
          background-color: ${props => props.theme.colors.backgroundHighlight};
          }
        }
      }
    }
  }
`

export default Container
