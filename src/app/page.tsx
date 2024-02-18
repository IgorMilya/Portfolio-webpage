import { AboutSection, GreetingSection, Header } from '@/components'
import { Navbar } from '@/UI'
import { dataLinks } from '@/app/home.utils'

const Home = () => {
  return (
    <>
      <Header dataLinks={dataLinks}/>
      <main className="flex min-h-screen flex-col pt-24">
        <div className="container mx-auto px-12 py-4">
          <GreetingSection />
          <AboutSection />
        </div>
      </main>
    </>
  )
}

export default Home
