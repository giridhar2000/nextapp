import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-5 bg-gray-800 items-center'>
        <Link href={'/'}><h1 className='cursor-pointer text-white text-xl'>Memoir</h1></Link>
        <div>
            <Link href={'/addpost'} className='text-gray-800 font-bold'><button className='px-5 py-3 bg-white rounded-lg shadow-2xl'>Add post</button></Link>
        </div>
    </div>
  )
}

export default Navbar