import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";



const Card = ({width, start, para, hover="false"}) => {
  return (
    <motion.div whileHover={{backgroundColor:  hover==="true" && "#7443ff", padding: "25px"}} className= { `${width} hover:${hover} bg-zinc-800 p-5 rounded-xl`}>
        <div
        className='w-full'
        >
            <div className='w-full flex'>
                <h3>one heading</h3>
                <IoIosArrowRoundForward className='text-xl ml-auto'/>
            </div>
            <h1 className='text-3xl font-medium  mt-10'>whatever heading</h1>
        </div>
        <div className='down w-full mt-60  '>
{
start === true ? (
  <>
  

<h1 className='text-6xl font-bold tracking-tight leading-none'>start a project</h1>
<button className='py-2 mt-3 px-5 rounded-full border-[1px] border-zinc-50'>Get Started</button>
  
  </>
) : null

}
{
  para===true ? (<>
  
  <p className='text-sm   font-medium text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
  
  </>) : null
}
        </div>
</motion.div>
  )
}

export default Card