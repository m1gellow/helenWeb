import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
  return (
    <main className='flex-center paddigs mx-auto w-full max-w-screen-2xl flex-col'>
        <section className='flex relative w-full xl:flex-row h-screen flex-center  lg:gap-8 gap-20 items-center'>
          <Skeleton className="w-full bg-gray-300 h-[500px] rounded-lg"/>
          <Skeleton className="w-full bg-gray-300 h-[400px] rounded-lg"/>
        </section>
        <section className='flex relative w-full xl:flex-row h-screen flex-center  lg:gap-8 gap-20 items-center'>
          <Skeleton className="w-1/2 bg-gray-300 h-[700px] rounded-lg"/>
          <Skeleton className="w-full bg-gray-300 h-[700px] rounded-lg"/>
        </section>
       

    </main>
  )
}

export default loading