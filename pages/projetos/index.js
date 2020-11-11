import Head from 'next/head'
import { useState } from 'react'
import Container from './styles'

import projectsData from '../../utils/projectData'

function Projetos() {
  const [project, setProject] = useState(projectsData.cats)

  const handleClick = (newProject) => {
    setProject(newProject)
  }

  return (
    <Container>
      <Head>
        <title>Renan Brayner | Meus projetos</title>
        <meta name="description" content="Feito com NodeJS, ReactJS, React Native e mongodb" />
      </Head>
      <div className='grid'>
        <img 
          className='project' 
          src={projectsData.cats.img} 
          onClick={() => handleClick(projectsData.cats)}
        />
        <img
          className='project'
          src={projectsData.todo.img}
          onClick={() => handleClick(projectsData.todo)}
        />
        <img
          className='project'
          src={projectsData.beTheHero.img}
          onClick={() => handleClick(projectsData.beTheHero)}
        />
        <img 
          className='project'
          src={projectsData.borderRadius.img}
          onClick={() => handleClick(projectsData.borderRadius)}
        />
        <img 
          className='project'
          src={projectsData.sorteador.img}
          onClick={() => handleClick(projectsData.sorteador)}
        />
        <img 
          className='project'
          src={projectsData.jogoDaVelha.img}
          onClick={() => handleClick(projectsData.jogoDaVelha)}
        />
      </div>
      <div className='selected'>
        <img className='big' src={project.img} />
        <div className='text-container'>
          <h1 className='title'>{project.title}</h1> 
          <p className='text'>{project.description}</p>
          <div className='buttons'>
            <a className='repo' href={project.repository} target='_blank' rel='noreferrer'>repositorio</a> 
            { project.site ? <a href={project.site} target='_blank' rel='noreferrer'>site</a> : null}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Projetos
