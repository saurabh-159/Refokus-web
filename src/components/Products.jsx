import React, { useState } from 'react';
import Product from './Product';
import { motion } from 'framer-motion';

const Products = () => {
    var products = [
        {
            title: "Nike", description: "Nike, Inc. is a global leader in athletic footwear, apparel, equipment, and accessories. Founded in 1964 as Blue Ribbon Sports by Bill Bowerman and Phil Knight, the company officially became Nike, Inc. in 1971. Named after the Greek goddess of victory ", live: true, case: false 
        }, 
        {
            title: "Adidas", description: "Adidas AG, founded in 1949 by Adolf Dassler, is a multinational corporation specializing in sportswear, footwear, and accessories.", live: true, case: false 
        }, 
        {
            title: "Puma", description: "Puma SE, founded in 1948 by Rudolf Dassler (Adolf Dassler's brother), is another major player in the sportswear industry. Headquartered in Herzogenaurach, Germany, Puma is known for its athletic footwear, apparel, and accessories.", live: true, case: false 
        }, 
        {
            title: "Under Armour", description: "Under Armour, Inc., founded in 1996 by Kevin Plank, is an American company that manufactures sportswear, casual apparel, and footwear. Headquartered in Baltimore, Maryland:", live: true, case: true 
        }, 
        {
            title: "Reebok", description: "Reebok International Limited, founded in 1958 in Bolton, England, is a subsidiary of Adidas since 2005. The brand specializes in athletic footwear, apparel, and accessories, with a focus on fitness and training.", live: true, case: false 
        }
    ];

const [pos, setpos] = useState(0);
const mover = (val) => { setpos(val * 23); };

  return (
    <div className='mt-32 relative'>
      {products.map((val, index) => <Product key={index} val={val} mover={mover} count={index} />)}
      <div className='w-full h-full absolute pointer-events-none top-0'>
        <motion.div 
          initial={{ y: pos, x: "-50%" }} 
          animate={{ y: pos + `rem` }} 
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }} 
          className='window w-[32rem] h-[23rem] bg-sky-400 left-[44%] overflow-hidden absolute -translate-x-[50%]'>
          
          <motion.div 
            animate={{ y: -pos + `rem` }} 
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }} 
            className='w-full h-full bg-green-400'>
            <video 
              src="https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4" 
              className='w-full h-full object-cover' 
              autoPlay 
              muted 
              loop>
            </video>
          </motion.div>

          <motion.div 
            animate={{ y: -pos + `rem` }} 
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }} 
            className='w-full h-full bg-orange-400'>
                 <video 
              src="https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm" 
              className='w-full h-full object-cover' 
              autoPlay 
              muted 
              loop>
            </video>
          </motion.div>

          <motion.div 
            animate={{ y: -pos + `rem` }} 
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }} 
            className='w-full h-full bg-sky-900'>
                 <video 
              src="https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4" 
              className='w-full h-full object-cover' 
              autoPlay 
              muted 
              loop>
            </video>
          </motion.div>

          <motion.div 
            animate={{ y: -pos + `rem` }} 
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }} 
            className='w-full h-full bg-zinc-400'>
                 <video 
              src="https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm" 
              className='w-full h-full object-cover' 
              autoPlay 
              muted 
              loop>
            </video>
          </motion.div>

          <motion.div 
            animate={{ y: -pos + `rem` }} 
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }} 
            className='w-full h-full bg-red-400'>
                 <video 
              src="https://cdn.refokus.com/website/Maniv-Compressed.mp4" 
              className='w-full h-full object-cover' 
              autoPlay 
              muted 
              loop>
            </video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
