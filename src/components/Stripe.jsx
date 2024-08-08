import React from 'react';

const Stripe = ({ url, number }) => {
  return (
    <div className='w-[16.66%] px-10 py-3 border-t-[1px] border-b-[1px] border-r-2 border-zinc-700 flex justify-between items-center'>
      <img src={url} alt="Some image" className='w-16 h-16 object-contain' />
      <span>{number}</span>
    </div>
  );
}

export default Stripe;
