import { useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import ToggleModeButton from '../ToggleModeButton'
import Sidebar from '../Sidebar'

import GlobalStyle from '../../styles/global'
import { ThemeProvider } from 'styled-components'
import Container from './styles'

import dark from '../../styles/themes/dark'
import light from '../../styles/themes/light'

function Layout({ children }) {
  Layout.propTipes = {
    children: PropTypes.node.isRequired
  }
  const [theme, setTheme] = useState(dark)

  const handleClick = () => {
    setTheme(theme.title == 'light' ? dark : light) 
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <div onClick={handleClick}>
        <ToggleModeButton theme={theme}/>
      </div>
      <Sidebar />
      <Container>
        <div className='error'>
          <div className='error-text'>
            <h1 className='red'>Ops!</h1> 
            <p>o site ainda não existe para celulares e despositivos menores, Estou trabalhando nisso assim que terminar o hackathon!</p>
          </div>
        </div>
        { children }
      </Container>
    </ThemeProvider>
  )
}

export default Layout
