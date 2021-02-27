import { useState, useEffect } from 'react'
import {
  Sun,
  Moon
} from 'react-feather'

import Container from './styles'

function ToggleModeButton({ theme }) {
  const [icon, setIcon] = useState('T')
  
  useEffect(() => {
    setIcon(theme.title == 'light' ? <Sun /> : <Moon />)
  }, [theme])

  return (
    <Container>
      {icon}
    </Container>
  )
}

export default ToggleModeButton
