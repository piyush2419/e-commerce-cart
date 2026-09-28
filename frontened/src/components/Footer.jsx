import React from 'react'
import { assets } from "../assets/frontend_assets/assets";
const Footer = () => {
  return (
    <div>
      <div className='-mr-4 flex flex-col sm:grid grid-cols-3 gap-14 my-10 mt-40 text-sm'>
        <div>
            <img className='w-30 mb-5' src={assets.logo} alt=""/>
            <p className='w-full sm:w-[30vw] md:w-[30vw] lg:w-[27vw] text-gray-600 text-sm'>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc.
            </p>
        </div>
        <div className='ml-6'>
        <p className='text-xl  flex flex-col mb-2 font-medium border border-gray-400 mx-auto'>Company Info</p>
        <ul className='flex flex-col gap-1 '>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
        <div className='flex flex-col gap-1 text-gray-600'>
            <p className='text-2xl font-medium text-gray-700 border border-gray-400 mb-4'>Contanct Us</p>
            <p className='text-sm text-gray-600'>1-22-333-4444</p>
            <p className='text-sm text-gray-600'>contact@company.com</p>
        </div>
        </div>
        <div>
            <hr/>
            <p className=' w-full py-5 text-sm text-center text-gray-600'>© 2026 FOREVER All rights reserved.</p>
      </div>

    </div>
  )
}
export default Footer
