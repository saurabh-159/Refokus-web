import React from 'react';
import Stripe from './Stripe';

const Stripes = () => {
  const data = [
    { url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number: 48 },
    { url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number: 4 },
    { url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number: 8 },
    { url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number: 3 },
    { url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number: 9 },
    { url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number: 0 },
  ];

  return (
    <div className='mt-32 flex item-center justify-between '>
      {data.map((item, index) => (
        <Stripe key={index} url={item.url} number={item.number} />
      ))}
    </div>
  );
}

export default Stripes;
