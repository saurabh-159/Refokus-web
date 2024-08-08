import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div
    className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700'
    >
 <div 
 className='nleft '
 >
  
 <div
 className='links flex gap-14 ml-20'
 >
   <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" srcset="" /> 
    {["Home", "About", "workshop", "", "News"].map((elem, index) =>   elem.length === 0 ? <span className="w-0.5 h-5 bg-zinc-800"> </span> : (<a key={index} className='flex items-center text-sm' href='#'>
        {index === 1 ? ( <span style={{boxShadow: "0 0 0.45em #00FF19"}} className='inline-block w-1 h-1 rounded-full bg-green-500 '></span>) : null}
        {elem}</a>))}
 </div>
 </div>
 <Button />
    </div>
     
  )
}

export default Navbar
