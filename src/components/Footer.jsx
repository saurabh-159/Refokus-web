import React from 'react'

const Footer = () => {
  return (
    <div
    className='w-full'
    >
      <div className='max-w-screen-xl mx-auto flex   py-10 gap-3'>
<div className='1/2'><h1 className='text-[9rem] font-semibold leading-none tracking-tight px-[4rem]'>Refokus.</h1></div>
<div className='1/2 flex gap-5'>
<div className='basis-1/3  '>
<h4 className='mb-10'>Socials</h4>
{["Linkedin", "Twitter", "FaceBook", "Google"].map((item , index) =><a key={index} className='mt-2 capitalize block text-zinc-600'>{item}</a>)}
</div>
<div className='basis-1/3  '>
<h4 className='mb-10'>Socials</h4>
{["Linkedin", "Twitter", "FaceBook", "Google"].map((item, index) =><a key={index} className='mt-2 capitalize block text-zinc-600'>{item}</a>)}
</div>
<div className='basis-1/2 flex flex-col items-end '>
    <p className= 'text-right'>Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit . </p>
 
    <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" srcset="" className='w-32 mt-10' />
</div>
</div>
      </div>
    </div>
  )
}

export default Footer
