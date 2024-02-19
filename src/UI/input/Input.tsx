'use client'
import React, { FC } from 'react'
import { useField } from 'formik'
import { ErrorMessage } from '@/UI'


interface InputProps {
  name: string,
  labelText?: string,
  type?: 'text' | 'password' | 'email' | 'number',
  placeholder?: string,
  labelClass?: string,
  disabled?: boolean
}

const Input: FC<InputProps> = ({ type, placeholder, name, labelClass, labelText, disabled }) => {
  const [field, meta] = useField(name)


  return (
    <label className={labelClass}>
      {labelText && <span>{labelText}</span>}
      <input
        placeholder={placeholder}
        className={`${meta.touched && meta.error && 'placeholder:text-red-700 '} bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5`}
        type={type || 'text'}
        {...field}
        disabled={disabled} />
      <ErrorMessage meta={meta} />
    </label>
  )
}

export default Input