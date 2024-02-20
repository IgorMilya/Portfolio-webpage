'use client'
import { FC, useEffect, useState } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { Button, Input, Textarea } from '@/UI'
import { ContactFormType } from '@/types'
import { initialValues, validationSchema } from './emailForm.utils'

const EmailForm: FC = () => {
  const [formValue, setFormValue] = useState<ContactFormType>()
  const [emailSuccess, setEmailSuccess] = useState<boolean>(false)

  const handleSubmit = (value: ContactFormType, actions: FormikHelpers<ContactFormType>) => {
    setFormValue(value)
    actions.resetForm()
  }

  const formikConfig = {
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  }

  const handleEmailSubmit = async () => {
    const JSONdata = JSON.stringify(formValue)
    const endpoint = '/api/send'

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSONdata,
    }

    const res = await fetch(endpoint, options)
    const resData = await res.json()
    console.log(resData)

    if (res.status === 200) {
      setEmailSuccess(true)
    }
  }

  useEffect(() => {
    !!formValue && handleEmailSubmit()
  }, [formValue])

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
        <Button className="bg-primary-darkBlue hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                linkageToForm="email-form-send" type="submit">Send Message</Button>

        {emailSuccess && (<p className="text-green-500 text-sm mt-2">Email sent successfully</p>)}
      </Form>
    </Formik>
  )
}

export default EmailForm