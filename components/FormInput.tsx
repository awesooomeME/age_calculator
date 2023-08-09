'use client'

import React, { useState } from 'react'

type FormInputProps = {
    name: string,
    label: string,
    min: number,
    max: number,
    starting: number
}

const FormInput = ({name, label, min, max, starting}: FormInputProps) => {
  const [value, setValue] = useState(starting)
  const handleChange = (e: any) => {
    const max_digits = max.toString().length
    if (e.target.value.length > max_digits) {
      e.target.value = e.target.value.substring(1)
    }
    if (Number(e.target.value) >  max) {
      e.target.value = e.target.value.slice(-1)
    }
    const val = Math.max(min, Number(e.target.value))
    setValue(val)
  }

  return (
    <div>
        <label className='text-base text-smokey_grey font-heavy 
            tracking-[0.275em] uppercase'>
            {label}
        </label>
        <input className='border-2 border-light_grey w-full
            text-off_black font-extra_heavy placeholder:text-off_black
            px-3 py-2 rounded-lg text-xl'
            placeholder='00' type='number' name={name}
            value={value} onChange={handleChange}></input>
    </div>
  )
}

export default FormInput