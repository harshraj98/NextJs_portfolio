// links
import Link from 'next/link';

//icons
import {
  RiYoutubeLine, 
  RiInstagramLine, 
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine, 
} from 'react-icons/ri';

const Socials = () => {
  return (
  <div className='flex items-center gap-x-5 text-lg'>
    <Link href={`https://www.youtube.com/@txmadcatgaming7472`} className=' hover:to-accent transition-all duration-300'>
      <RiYoutubeLine />
    </Link>
    <Link href={`https://www.facebook.com/harshsingh.rathod?mibextid=ZbWKwL`} className=' hover:to-accent transition-all duration-300'>
      <RiFacebookLine />
    </Link>
    <Link href={`https://www.instagram.com/spykar_harsh?igsh=MWNrYXhpNG9zMGg1Zg==`} className=' hover:to-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>
    <Link href={`https://www.linkedin.com/in/harsh-raj-1a1428237`} className=' hover:to-accent transition-all duration-300'>
      <RiLinkedinLine />
    </Link>
    <Link href={`https://github.com/harshraj98`} className=' hover:to-accent transition-all duration-300'>
      <RiGithubLine />
    </Link>
  </div>
  );
};

export default Socials;
