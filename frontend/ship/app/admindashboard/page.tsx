'use client'
import React from 'react'

import Link from 'next/link'


function page() {

  return (
   <div className="min-h-screen flex flex-col items-center  mt-10 border-2">
    <div className='flex w-full items-center justify-between px-10 border-2'>
        <div className="flex border-2 rounded-lg border-black w-50 h-50 items-center justify-center">
            <h1>Number of ships</h1>
        </div>
        <div className="flex border-2 rounded-lg border-black w-50 h-50 items-center justify-center">
            <h1>Number of ships</h1>
        </div>
        <div className="flex border-2 rounded-lg border-black w-50 h-50 items-center justify-center">
            <h1>Number of ships</h1>
        </div>
        <div className="flex border-2 rounded-lg border-black w-50 h-50 items-center justify-center">
            <h1>Number of ships</h1>
        </div>
    </div>
    <div className='flex w-full flex-1 items-center border-5 border-green-600'>
        <div className='flex border-4 w-full h-100 border-red-600'>
            <div className='flex border-4 w-full h-100 border-red-600'>
                <h1>Charts</h1>
            </div>
            <div className='flex border-4 w-full h-100 border-red-600'>
                <h1>Charts</h1>
            </div>
            
        </div>
    </div>
    

   </div>
  )
}

export default page