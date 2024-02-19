'use client'
import React, { FC } from 'react';
import { useField } from 'formik'
import { ErrorMessage } from '@/UI'

interface TextareaProps {
  name: string;
  labelText?: string;
  placeholder?: string;
  labelClass?: string;
  disabled?: boolean;
}

const Textarea: FC<TextareaProps> = ({ name, labelText, placeholder, labelClass, disabled }) => {
  const [field, meta] = useField(name)

  return (
    <label className={labelClass}>
      {labelText && <span>{labelText}</span>}
      <textarea
        placeholder={placeholder}
        className={`${meta.touched && meta.error && 'placeholder:text-red-700 '} bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5`}
        disabled={disabled}
        {...field}
      />
      <ErrorMessage meta={meta} />
    </label>
  );
};

export default Textarea;
