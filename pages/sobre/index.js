import { useState, useEffect } from 'react'
import Container from './styles'

function Sobre() {
  const [greeting, setGreeting] = useState('Oi')

  var today = new Date()
  var time = today.getHours()

  useEffect(() => {
    if (time >= 0 && time < 6) {
      setGreeting('Boa madrugada')
    } else if (time >= 6 && time < 12) {
      setGreeting('Bom dia')
    } else if (time >= 12 && time < 18) {
      setGreeting('Boa tarde')
    } else if (time >= 18) {
      setGreeting('Boa noite')
    }
  }, [time])
  return (
    <Container>
      <div className='text'>
        <h1>Sobre mim.</h1>
        <p>
          <b>{greeting}</b>, meu nome é Renan, tenho 20 anos e sou um
          desenvolvedor. Estou ingresso na faculdade de análise e
          desenvolvimento de sistemas com o objetivo de me profissionalizar e
          busco ingressar no mercado de trabalho e por em prática meus
          conhecimentos em JavaScript, Html, CSS, Sass, Node, React, React
          Native e Next.
        </p>
        <p>
          Tenho um bom pensamento analítico e sou atencioso com detalhes, gosto
          de trabalhar em equipe principalmente se a comunicação for clara e
          objetiva, sou uma pessoa criativa e além de programar tenho hobbys
          como desenhar e pintar.
        </p>
      </div>
      <div className='image' />
    </Container>
  )
}

export default Sobre
