import Link from 'next/link'
import Container from './styles'

import {
  ChevronsRight,
  Home,
  User,
  Code,
  FileText,
  MessageSquare,
  Mail,
  Phone,
  Instagram,
  GitHub,
  Linkedin
} from 'react-feather'

export default function Sidebar() {
  return (
    <Container>
      <div className='branding'>
        <Link href='/'>
          <a className='branding-link'>
            <p className='branding-link-text'>
              <span className='renan'>RENAN</span><br/>
              <span className='brayner'>BRAYNER</span>
            </p>
            <ChevronsRight className='branding-link-icon' />
          </a>
        </Link>
      </div>
      <ul className='nav'>
        <li className='nav-item'>
          <Link href='/'>
            <a className='nav-link'>
              <Home className='nav-link-icon'/>
              <span className='nav-link-text tooltip'>Home</span>
            </a>
          </Link>
        </li> 
        <li className='nav-item'>
          <Link href='/sobre'>
            <a className='nav-link'>
              <User className='nav-link-icon'/>
              <span className='nav-link-text tooltip'>Sobre</span>
            </a>
          </Link>
        </li> 
        <li className='nav-item'>
          <Link href='/projetos'>
            <a className='nav-link'>
              <Code className='nav-link-icon'/>
              <span className='nav-link-text tooltip'>Projetos</span>
            </a>
          </Link>
        </li> 
        <li className='nav-item'>
          <Link href='/curriculo'>
            <a className='nav-link'>
              <FileText className='nav-link-icon'/>
              <span className='nav-link-text tooltip'>Curriculo</span>
            </a>
          </Link>
        </li> 
        <li className='nav-item'>
          <Link href='/contato'>
            <a className='nav-link'>
              <MessageSquare className='nav-link-icon'/>
              <span className='nav-link-text tooltip'>Contato</span>
            </a>
          </Link>
        </li> 
      </ul>
      <ul className='contact'>
        <li className='contact-item'>
          <a className='contact-link' href='mailto: renanbrayner@gmail.com'>
            <Mail className='contact-link-icon'/>
            <span className='contact-link-text tooltip'>Email</span>
          </a> 
        </li>
        <li className='contact-item'>
		  <a className='contact-link' href='https://wa.me/5581981815475' target='_blank' rel='noreferrer'>
            <Phone className='contact-link-icon'/>
            <span className='contact-link-text tooltip'>(81)98181-5475</span>
          </a> 
        </li>
        <li className='contact-item'>
          <a className='contact-link' href='https://www.instagram.com/renan.brayner/?hl=pt-br' target='_blank' rel='noreferrer'>
            <Instagram className='contact-link-icon'/>
            <span className='contact-link-text tooltip'>Instagram</span>
          </a> 
        </li>
        <li className='contact-item'>
          <a className='contact-link' href='https://www.github.com/renanbrayner' target='_blank' rel='noreferrer'>
            <GitHub className='contact-link-icon'/>
            <span className='contact-link-text tooltip'>GitHub</span>
          </a> 
        </li>
        <li className='contact-item'>
          <a className='contact-link' href='https://www.linkedin.com/in/renanbrayner/' tanget='_blank' rel='noreferrer'>
            <Linkedin className='contact-link-icon'/>
            <span className='contact-link-text tooltip'>Linkedin</span>
          </a> 
        </li>
      </ul>
    </Container>
  )
}
