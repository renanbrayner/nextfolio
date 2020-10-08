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

    .project:nth-child(1),
    .project:nth-child(4),
    .project:nth-child(5) {
      background-color: ${props => props.theme.colors.backgroundAlt};
    }
  }

  .selected {
    width: 50%;
    height: 100%;
    background-color: ${props => props.theme.colors.backgroundHighlight}; 
  }
`

export default Container
