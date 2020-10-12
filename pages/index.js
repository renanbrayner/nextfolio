import Head from 'next/head'
import Link from 'next/link'
import Container from './styles'
import {
  Mail,
  GitHub,
  Instagram,
  Linkedin
} from 'react-feather'

export default function Home() {
  return (
    <Container>
      <div className='text'>
        <h1>Oi, eu sou Renan,<br/> Desenvolvedor Web.</h1>
        <ul className='contact'>
          <li className='contact-item'>
            <a className='contact-link' href='mailto: renanbrayner@gmail.com'>
              <Mail className='contact-link-icon'/>
            </a> 
          </li>
          <li className='contact-item'>
            <a className='contact-link' href='https://www.instagram.com/renan.brayner/?hl=pt-br' target='_blank' rel='noreferrer'>
              <Instagram className='contact-link-icon'/>
            </a> 
          </li>
          <li className='contact-item'>
            <a className='contact-link' href='https://www.github.com/renanbrayner' target='_blank' rel='noreferrer'>
              <GitHub className='contact-link-icon'/>
            </a> 
          </li>
          <li className='contact-item'>
            <a className='contact-link' href='https://www.linkedin.com/in/renanbrayner/' tanget='_blank' rel='noreferrer'>
              <Linkedin className='contact-link-icon'/>
            </a> 
          </li>
        </ul>
      </div>
      <div className='img-container'>
        <Link href='/'>
          <a className='link'>
            <div className='img' />
          </a>
        </Link>
      </div>
    </Container>
  )
}
