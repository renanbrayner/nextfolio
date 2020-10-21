import Head from 'next/head'
import Container from './styles'
import Form from '../../components/Form'

function Contato() {
  return (
    <Container>
      <Head>
        <title>Renan Brayner | Fale comigo</title>
        <meta name="description" content="Preencha o formulário para entrar em contato." />
      </Head>
      <div className='form-container'>
        <Form />
      </div>
      <div className='img-container'>
        <div className='rotate'>
          <div className ='img' /> 
        </div>
      </div>
    </Container>
  )
}

export default Contato
