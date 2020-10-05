import styled from 'styled-components'

const Container = styled.div`
  /* THEME TRANSITION */
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
  background-color: ${props => props.theme.colors.backgroundAlt};
  position: fixed;
  height: 100vh;
  width: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 300ms ease-in-out;
  
  :hover {
    width: 13.5rem;

    .tooltip {
      opacity: 1;
      transform: translateX(0);
    }

    .branding {
      .branding-link {
        :hover {
          color: ${props => props.theme.colors.primary};
        }

        .branding-link-text {
          opacity: 1;
          width: 100%;
          margin-left: 2.5rem;
        }

        .branding-link-icon {
          transform: rotate(-180deg);
        }
      }
    }
  }

  .branding {
    /* THEME TRANSITION */
    background-color: ${(props) => props.theme.colors.backgroundHighlight};
    background-color: ${props => props.theme.colors.backgroundHighlight};

    .branding-link {
      display: flex;
      align-items: center;
      height: 4rem;
      transition: color 200ms;

      .branding-link-text {
        width: 0;
        opacity: 0;
        transition: margin 300ms ease-in, width 300ms ease-in, opacity 300ms ease-in;
        font-size: 1.2rem;

        .renan {
          letter-spacing: 6px;
        }
      }

      .branding-link-icon {
        height: 4rem;
        min-width: 4rem;
        padding: 0.8rem;
        transition: transform 300ms ease-in;
      }
    }
  }

  .nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .nav-link {
      height: 4rem;

      .nav-link-icon {
        height: 4rem;
        width: 4rem;
        padding: 1rem;
      }
    }
  }

  .contact {
    .contact-item {
      height: 2rem;
      width: 100%;

      :hover {
        background-color: ${props => props.theme.colors.backgroundHighlight};
      }
    
      .contact-link {
        width: 100%;

        .contact-link-icon {
          height: 2rem;
          width: 4rem;
          padding: 0.4rem;
        }

        .contact-link-text {
          font-size: 0.9rem;
        }
      }
    }
  }

  .nav-link,
  .contact-link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: 0.8;
    transition: opacity 300ms, background-color 300ms;

    :hover {
      background-color: ${(props) => props.theme.colors.backgroundHighlight};
      opacity: 1;

      .contact-link-icon,
      .contact-link-text,
      .nav-link-icon,
      .nav-link-text {
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  .tooltip {
    left: 100px;
    position: absolute;
    margin: auto;
    opacity: 0;
    transform: translateX(-300px);
    transition: opacity 200ms;
    transition-delay: 300ms;
  }
`

export default Container
