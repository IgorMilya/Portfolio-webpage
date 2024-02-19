import { FC } from 'react'
import { TabProjects } from '@/components'
import { tabCardData, titleTab } from './projectsSection.utils'


const ProjectsSection: FC = () => {

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <TabProjects titleTab={titleTab} tabCardData={tabCardData}/>
    </section>
  )
}

export default ProjectsSection