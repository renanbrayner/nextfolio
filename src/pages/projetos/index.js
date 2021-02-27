import Head from 'next/head'
import {
	useState
} from 'react'
import Container from './styles'

import projectsData from '../../utils/projectData'

function Projetos() {
	const [project, setProject] = useState(projectsData[0])

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
					{
						projectsData.map((_, i) => {
							return (
								<img
									className='project'
									src={projectsData[i].img}
									key={i}
									onClick={() => handleClick(projectsData[i])}
								/>
							)
						})
					}
				</div>
				<div className='selected'>
					<img className='big' src={project.img} />
					<div className='text-container'>
						<h1 className='title'>{project.title}</h1>
						<p className='text'>{project.description}</p>
						<div className='buttons'>
							<a className='repo' href={project.repository} target='_blank' rel='noreferrer'>
								repositorio
							</a>
							{ project.site ? <a href={project.site} target='_blank' rel='noreferrer'>site</a> : null}
						</div>
					</div>
				</div>
		</Container>
	)
}

export default Projetos
