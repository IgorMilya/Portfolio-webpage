import { FC } from 'react'
import { ContactsTools } from './contacts-tools'
import { EmailForm } from './email-form'

const ContactSection: FC = () => {

  return (
    <section id="contacts" className="flex flex-col md:flex-row my-12 md:my-12 py-24 gap-10 relative justify-between">
      <div
        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-darkBlue to-transparent rounded-full md:h-60 md:w-60 xl:h-80 xl:w-80 h-52 w-52 z-0 blur-lg absolute xl:top-[75%] md:top-[90%] top-[95%] -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <ContactsTools />
      <EmailForm />
    </section>
  )
}

export default ContactSection