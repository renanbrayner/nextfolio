import { useForm, ValidationError } from '@formspree/react'

import Container from './styles'

function Form() {
  const [state, handleSubmit] = useForm('contactForm')

  if (state.succeeded) {
    return (
      <Container>
        <h1 className='success'>Obrigado por<br/> entrar em contato!</h1>
      </Container>
    )
  } else {
    return (
      <Container>
        <input type="hidden" name="_language" value="pt-BR" />
        <form className='form' onSubmit={handleSubmit}>
          <h1 className='title'>Fale comigo.</h1>
          <label htmlFor='name'>
            Nome
          </label> 
          <input
            className='input'
            id='name'
            type='text'
            name='name'
            placeholder='Nome'
          />
          <label htmlFor='email'>
            Email
          </label> 
          <input
            className='input'
            id='email'
            type='email'
            name='email'
            placeholder='seu@email.com'
          />
          <ValidationError
            prefix='Email'
            field='email'
            errors={state.errors}
          />
          <label htmlFor='message'>
            Mensagem
          </label>
          <textarea
            className='textarea'
            id='message'
            name='message'
            rows='4'
            placeholder='Olá! Tenho essa proposta, o que você acha dela?'
          />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
          <button className='submit' type='submit' disabled={state.submitting}>
            {state.submitting ? 'EVIANDO...' : 'ENVIAR MENSAGEM'}
          </button>
        </form>
      </Container>
    )
  }
}

export default Form
