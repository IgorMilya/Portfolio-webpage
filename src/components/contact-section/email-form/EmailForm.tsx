'use client'
import { FC, useState } from 'react'
import { Form, Formik } from 'formik'
import { Button, Input, Textarea } from '@/UI'
import { ContactFormType } from '@/types'
import { initialValues, validationSchema } from './emailForm.utils'

const EmailForm: FC = () => {
  const [formValue, setFormValue] = useState<ContactFormType>()
  const handleSubmit = (value: ContactFormType) => {
    setFormValue(value)
  }

  const formikConfig = {
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  }

  return (
    <Formik {...formikConfig}>
      <Form id="email-form-send" className="flex flex-col phone:w-full w-[50%]">
        <div className="mb-6">
          <Input
            type="email"
            labelClass="text-white block mb-2 text-sm font-medium"
            placeholder="jacob@google.com"
            name="email"
            labelText="Your email"
          />
        </div>
        <div className="mb-6">
          <Input
            labelClass="text-white block mb-2 text-sm font-medium"
            placeholder="Just saying Hi"
            name="subject"
            labelText="Subject"
          />
        </div>
        <div className="mb-6">
          <Textarea
            labelClass="text-white block mb-2 text-sm font-medium"
            placeholder="Let's talk about"
            name="message"
            labelText="Message"
          />
        </div>
        <Button className="bg-[#4C10BE] hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                linkageToForm="email-form-send" type="submit">Send Message</Button>
      </Form>
    </Formik>
  )
}

export default EmailForm