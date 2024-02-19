import { FC } from 'react'
import { ContactsTools } from './contacts-tools'
import { EmailForm } from './email-form'

const ContactSection: FC = () => {

  return (
    <section className="flex flex-col md:flex-row my-12 md:my-12 py-24 gap-10 relative justify-between">
      <div
        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <ContactsTools />
      <EmailForm />
    </section>
  )
}

export default ContactSection