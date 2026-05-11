import React from 'react'
import Link from 'next/link'

function AdminNav() {
  return (
    <div>
         <div className='flex flex-col items-center top-0'>
        <div className='flex justify-between items-center mt-2 bg-black text-white w-200 h-20 rounded-lg'>
            <div><Link href={'/admindashboard'} className='font-bold ml-5'>Admin Dashboard</Link></div>
            <div className='flex gap-4 mr-5'>
                <Link href={'/admindashboard/ships'} className=' hover:bg-gray-600 rounded-sm p-1 transform: hover:scale-110 ease-in duration-200'>Ships</Link>
                <Link href={'/admindashboard/users'} className=' hover:bg-gray-600 rounded-sm p-1 transform: hover:scale-110 ease-in duration-200'>Users</Link>
                <Link href={'/admindashboard/task'} className=' hover:bg-gray-600 rounded-sm p-1 transform: hover:scale-110 ease-in duration-200'>Tasks</Link>
                <Link href={'/admindashboard/drills'} className=' hover:bg-gray-600 rounded-sm p-1 transform: hover:scale-110 ease-in duration-200'>Drills</Link>

            </div>
        </div>
    </div>
    </div>
  )
}

export default AdminNav