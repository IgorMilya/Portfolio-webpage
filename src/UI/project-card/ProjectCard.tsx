import { FC } from 'react'
import Hover from './hover/Hover'

interface ProjectCardProps {
  image: string,
  title: string,
  description: string,
  gitUrl: string,
  previewUrl: string
}

const ProjectCard: FC<ProjectCardProps> = ({ image, title, description, gitUrl, previewUrl }) => {

  return (
    <>
      <div className="h-52 md:h-72 rounded-t-xl relative group"
           style={{ background: `url(${image})`, backgroundSize: 'cover' }}>
        <Hover gitUrl={gitUrl} previewUrl={previewUrl} />
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-background-gray py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-gray">{description}</p>
      </div>
    </>
  )
}

export default ProjectCard