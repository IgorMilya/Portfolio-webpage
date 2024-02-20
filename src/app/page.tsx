import { AboutSection, ContactSection, GreetingSection, Header, ProjectsSection, Footer } from '@/components'
import { dataLinks } from '@/app/home.utils'

const Home = () => {
  return (
    <>
      <Header dataLinks={dataLinks} />
      <main className="flex min-h-screen flex-col pt-24">
        <div className="container mx-auto px-12 py-4">
          <GreetingSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
