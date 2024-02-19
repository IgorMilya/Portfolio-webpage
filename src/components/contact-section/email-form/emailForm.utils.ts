import { object, string } from 'yup'
import { ContactFormType } from '@/types'

export const initialValues: ContactFormType = {
  email: "",
  subject: "",
  message: "",
};

export const validationSchema = object().shape({
  email: string().email('You entered the wrong email')
    .required("Required email address"),
  subject: string()
    .min(2, "Too Short! Please enter no more than 50, and no less than 2")
    .max(50, "Too Long! Please enter no more than 50, and no less than 2")
    .matches(/\p{Lu}/u, 'First Name must contain at least one uppercase letter')
    .required("Required subject"),
  message: string()
    .min(5, "Too Short! Please enter no less than 5")
    .required("Required subject"),
})