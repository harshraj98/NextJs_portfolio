// next image 
import Image from 'next/image';
import ProfileImg from "../public/avatar1.png"

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image src={ProfileImg} width={737} height={678} alt='' className='translate-z-0 w-full h-full'/>
    </div> 
  ); 
};

export default Avatar;
