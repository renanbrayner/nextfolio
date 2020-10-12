import Container from './styles'
import pdfData from '../../utils/pdfData'

function Curriculo() {
  return (
    <Container>
      <object className="pdf" type="application/pdf" aria-labelledby="Meu curriculo." data={pdfData}>
        <p className="text"><span className='error'>😞Ops!</span><br/>
          parece que seu navegador não tem suporte para pdf.<br/>
          <a className="download" href={pdfData} download>clique aqui para baixar o currículo.</a></p>
      </object>
    </Container>
  )
}

export default Curriculo
