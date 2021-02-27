import Head from 'next/head'
import Container from './styles'
import pdfData from '../../utils/pdfData'

function Curriculo() {
  return (
    <Container>
      <Head>
        <title>Renan Brayner | Meu currículo</title>
        <meta name="description" content="Um profissional ágil e prático, habituado a trabalhar sob pressão. Bacharelando em Análise e Desenvolvimento de Sistemas, carrega consigo experiência em ReactJS, NodeJS, React Native e NextJS." />
      </Head>
      <object className="pdf" type="application/pdf" aria-labelledby="Meu curriculo." data={pdfData}>
        <p className="text"><span className='error'>😞Ops!</span><br/>
          parece que seu navegador não tem suporte para pdf.<br/>
          <a className="download" href={pdfData} download>clique aqui para baixar o currículo.</a></p>
      </object>
    </Container>
  )
}

export default Curriculo
