import Link from 'next/link'
import Container from './styles'

export default function Home() {
  return (
    <Container>
      <div className='text'>
        <h1>Oi, eu sou Renan,<br/> Desenvolvedor Web.</h1>
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
