'use client'

import Form from '@/components/Form'
import Image from 'next/image'
import { useState } from 'react'
import CountUp from 'react-countup'

export default function Home() {
  const [calculatedAge, setCalculatedAge] = useState({days: '__', months: '__', years: '__'})

  return (
    <main className="min-h-screen grid place-content-center px-3">
      <article className='bg-white rounded-3xl rounded-br-[7rem]
        px-7  grid place-content-center pt-10 pb-16 gap-3 max-w-[650px]
        desktop:px-16'>
        <Form findAge={setCalculatedAge}/>
        <h1 className='font-extra_heavy text-[2.75rem] text-purple
          italic'>
          {calculatedAge.years==='__' ? '__' : <CountUp duration={2} end={Number(calculatedAge.years)}/>} 
          <span className='text-off_black text-[3rem]'>&nbsp;year{Number(calculatedAge.years) > 1 ? 's' : ''}</span>
        </h1>
        <h1 className='font-extra_heavy text-[2.75rem] text-purple
          italic'>
          {calculatedAge.months==='__' ? '__' : <CountUp duration={2} end={Number(calculatedAge.months)}/>} 
          <span className='text-off_black text-[3rem]'>&nbsp;month{Number(calculatedAge.months) > 1 ? 's' : ''}</span>
        </h1>
        <h1 className='font-extra_heavy text-[2.75rem] text-purple
          italic'>
          {calculatedAge.days==='__' ? '__' : <CountUp duration={2} end={Number(calculatedAge.days)}/>} 
          <span className='text-off_black text-[3rem]'>&nbsp;day{Number(calculatedAge.days) > 1 ? 's' : ''}</span>
        </h1>
      </article>
    </main>
  )
}
