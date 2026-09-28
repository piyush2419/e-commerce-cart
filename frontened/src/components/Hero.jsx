  import React from 'react'
  import { assets } from '../assets/frontend_assets/assets'
  import { useContext } from 'react'
  import { ShopContext } from '../context/shopContext' 
const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border  border-gray-500 rounded-b-xl'>
      <div className='w-full sm:w-1/2 flex items-center justify-center py-8 sm:py-2'>
      <div className='text-black text-lg'>
        <div className='flex gap-2 items-center'>
        <p className='ml-1 w-8 sm:w-12 h-1 bg-[#414141]'></p>
        <p className='-mb-1 text-lg font-family'>Our Bestseller</p>
      </div>
      <h1 className='prata-regular text-2xl font-family'>Latest Products</h1>
      <div className='flex gap-2 items-center'>
        <p className='ml-1 text-lg font-family'>Shop Now</p>
        <p className=' w-8 sm:w-12 h-1 bg-[#414141]'></p>
      </div>
      </div>
      </div>
      <img src={assets.hero_img} className='w-full sm:w-1/2 h-80 sm:h-auto object-cover rounded-b-xl' alt="" />
    </div>
  )
}

export default Hero
