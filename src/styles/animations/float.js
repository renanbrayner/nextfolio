import { keyframes } from 'styled-components'

const float = keyframes`
  0% {
    transform: translateY(-4%);
  }

  50% {
    transform: translateY(+4%);
  }

  100% {
    transform: translateY(-4%);
  }
`

export default float
