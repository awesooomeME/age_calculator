import Image from 'next/image'
import FormInput from './FormInput'
import submit from '@/public/images/icon-arrow.svg'
import { useState } from 'react'

type FormProps = {
  findAge: any
}

const Form = ({findAge}: FormProps) => {
  const [errorMessage, setErrorMessage] = useState('')

  const dateFields = [
    {label: 'day', min: 1, max: 31, starting: new Date().getDate()}, 
    {label: 'month', min: 1, max: 12, starting: new Date().getMonth() + 1}, 
    {label: 'year', min: 1, max: new Date().getFullYear(), starting: new Date().getFullYear()}]

  const calculateAge = (values: any) => {
    // Get difference in ms
    const birthdate = new Date(`${values.year}-${values.month}-${values.day}`)
    const age = Date.now() - birthdate.getTime()
    if (isNaN(birthdate.getTime())) {
      setErrorMessage("Invalid Date")
      return
    }

    if (age < 0) {
      setErrorMessage("Date must be in the past")
      return
    }
    //calculate days from ms
    const diffInDays = Math.floor(age / (1000 * 60 * 60 *24))
    let years = prettifyValue(Math.floor(diffInDays / 365))
    let months = prettifyValue(Math.floor(diffInDays / 30.44) % 12)
    let days = prettifyValue(diffInDays - (years * 365) - (Math.floor(months * 30.44)))
    setErrorMessage('')
    findAge({days: days, months: months, years: years})
  }

  const prettifyValue = (val: any) => {
    val = val.toString()
    if (val.length < 2) val = `0${val}`
    return val
  }
  
  const handleSubmit = (e:any) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const values = Object.fromEntries(data.entries())
    
    calculateAge(values)
  }
  return (
    <form className='grid gap-5' onSubmit={handleSubmit}>
        <div className='grid grid-cols-3 gap-3 desktop:pr-[10rem]'>
            {dateFields.map((dateField) => <FormInput name={dateField.label} key={dateField.label} {...dateField}/>)}
        </div>
        { errorMessage ? <p className='text-light_red text-xs'>{errorMessage}</p> : ''}
        <div className='relative my-[3.5rem] desktop:my-[2rem]'>
            <hr className='border-light_grey'/>
            <button className='bg-purple rounded-full p-5
                absolute left-1/2 -translate-x-1/2 -translate-y-1/2
                desktop:left-full'>
                <Image src={submit} alt='' className='pointer-events-none
                    min-w-[20px]'
                    width={30}/>
            </button>
        </div>
    </form>
  )
}

export default Form