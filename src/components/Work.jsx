import React, { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from "framer-motion"


const Work = () => {
  
const [images, setImages] = useState(  [
  { url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14-p-800.webp", top: "50%", left: "50%", isActive: false },
  { url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203-p-800.png", top: "56%", left: "44%", isActive: false },
  { url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65f1160e50447ddfb490fb59_portfolioCard_cc-02%20(1)-p-800.webp", top: "45%", left: "56%", isActive: false },
  { url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cd6ecc885579ba1b4ffc97_10-p-800.jpg", top: "60%", left: "53%", isActive: false }, 
  { url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201-p-800.png", top: "43%", left: "40%", isActive: false },
  { url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc29f66c6594c072ba1a38_02-p-800.jpg", top: "65%", left: "55%", isActive: false },
]);
  const { scrollYProgress } = useScroll()
 
scrollYProgress.on("change", (data) => {
function imageShow(arr){
  setImages(prev => (prev.map((item , index) => (
arr.indexOf(index) === -1 ? (
  {...item, isActive: false}
)
:{...item, isActive: true}
  ))))
}



  switch(Math.floor(data*100)){
    case 0:
      imageShow([])
      break;
      case 1:
        imageShow([0])
        break;
        case 2:
          imageShow([0, 1])
          break;
          case 3:
            imageShow([0, 1, 2])
            break;
            case 4:
              imageShow([0, 1, 2, 3])
              break;
              case 5:
                imageShow([0, 1, 2, 3, 4])
                break;
                case 6:
                  imageShow([0, 1, 2, 3, 4, 5])
                  break;
  }
})



  return (
    <div className='w-full'>
      <div className='max-w-screen-xl relative mx-auto'>
        <h1 className='text-[30vw] text-center leading-none font-medium select-none'>
          work
        </h1>
        <div className='w-full top-0 h-full absolute'>
          {images.map((image, i) => (
            image.isActive && (
              <img
                key={i}
                className='w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]'
                src={image.url}
                style={{ top: image.top, left: image.left }}
                alt=""
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
