import React from 'react';
import { PiArrowBendDownRightBold } from "react-icons/pi";


const Button = ({title="Get Started"}) => {
  return (
    <div className='w-60 px-3 py-2 bg-zinc-100 text-black rounded-full flex item-center justify-between'>
  <span className='text-sm font-semibold'> {title}</span>

  <PiArrowBendDownRightBold />
    </div>
  )
}

export default Button
