import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    .success {
      box-shadow: 0px 0px 10px 2px #00000044;
      color: ${props => props.theme.colors.success};
      font-size: 3rem;
      text-align: center;
      padding: 2rem;
      background-color: ${props => props.theme.colors.backgroundAlt};
      border-radius: 8px;
    }

    .form {
      height: 60%;
      width: 60%;
      display: flex; 
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      
      label {
        margin-right: auto;
      }

      .input {
        height: 2rem;
        width: 100%;
        border: 1px solid ${props => props.theme.colors.backgroundAlt};
        border-radius: 8px;
        color: ${props => props.theme.colors.foreground};
        background: ${props => props.theme.colors.background};
        filter: brightness(0.75);
      }

      .textarea {
        height: 8rem;
        width: 100%;
        resize: none;
      }

      .submit {
        height: 3rem;
        width: 100%;
        font-size: 1.2rem;
        font-weight: bold;
        background-color: ${props => props.theme.colors.success};
        filter: brightness(1);
        transition: filter 200ms;
        cursor: pointer;
        :hover {
        filter: brightness(1.2);
        }
      }

      @media (max-width: 1024px) {
        .title {
          font-size: 1.3rem;
        }
        label {
          font-size: 0.9rem;
        }
        .submit {
          font-size: 1rem;
          height: 2.8rem;
        }
      }
    }

    @media (max-width: 768px) {
      .form {
        width: 80%;
      }
    }
`

export default Container
