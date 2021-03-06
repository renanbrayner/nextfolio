import { keyframes } from 'styled-components'

const bob = keyframes`
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-5deg);
  }

  50% {
    transform: rotate(0deg);
  }

  75% {
    transform: rotate(5deg);
  }

  100% {
    transform: rotate(0deg);
  }
`

export default bob
