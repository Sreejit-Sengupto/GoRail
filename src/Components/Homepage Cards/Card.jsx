// import image from '../assets/train-img.jpg'
import { HiOutlineArrowCircleRight } from 'react-icons/hi'
import { NavLink } from 'react-router-dom';

export default function Card( { to, image, heading, description }) {
  return (
    <NavLink to={to} className='w-[70%] lg:w-[20%] my-2 mx-2 h-64 hover:scale-105 transition-all custom--hover'>
      <div className='bg-white rounded-t-xl h-[50%]'>
        <img src={image} alt="" className='h-full w-full object-cover rounded-t-xl'/>
      </div>

      <div className=' bg-[#F6C90E] rounded-b-xl p-6 font-lexend h-[50%] flex flex-col cursor-pointer'>
        <div>
          <p className='font-medium'>{heading}</p>
          <p className='text-xs'>{description}</p>
        </div>
        <div className='w-full flex items-center justify-end text-2xl mt-auto arrow--icon'>
          <HiOutlineArrowCircleRight />
        </div>
      </div>
    </NavLink>
  );
}
