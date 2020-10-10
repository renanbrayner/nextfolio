import Container from './styles'
import Form from '../../components/Form'

function Contato() {
  return (
    <Container>
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
