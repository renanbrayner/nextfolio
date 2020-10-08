import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem 7rem 1rem 1rem;

  .pdf {
    height: 100%;
    width: 100%;
    border-radius: 8px;
    display: grid;
    place-items: center;

    .text {
      font-size: 1.6rem;
      text-align: center;

      .error {
        font-size: 2.5rem;
        font-weight: bold;
      }

      .download {
        color: ${props => props.theme.colors.primary};
        text-decoration: underline;
      }
    }
  }
`

export default Container
