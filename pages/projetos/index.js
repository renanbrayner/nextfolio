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
      <div className='grid'>
        <img 
          className='project' 
          src="/projects/cats.png" 
          onClick={() => handleClick(projectsData.cats)}
        />
        <img
          className='project'
          src="/projects/todo.png"
          onClick={() => handleClick(projectsData.todo)}
        />
        <img
          className='project'
          src="/projects/beTheHero.png"
          onClick={() => handleClick(projectsData.beTheHero)}
        />
        <img 
          className='project'
          src="/projects/borderRadius.png"
          onClick={() => handleClick(projectsData.borderRadius)}
        />
        <img 
          className='project'
          src="/projects/sorteador.png"
          onClick={() => handleClick(projectsData.sorteador)}
        />
        <img 
          className='project'
          src="/projects/jogoDaVelha.png"
          onClick={() => handleClick(projectsData.jogoDaVelha)}
        />
      </div>
      <div className='selected'>
        <img className='big' src={project.img} />
        <div className='text-container'>
          <h1>{project.title}</h1> 
          <p>{project.description}</p>
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
