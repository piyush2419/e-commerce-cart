import React from 'react'

const NewsletterBox = () => {
   const onSubmitHandler = (e) => {
      e.preventDefault();
    }
  return (
   
    <div className='text-center'>
      <p className='text-2xl font-medium inline-block pb-2 border-gray-400 text-gray-800 font-semibold text-center'>Subscribe and get 25% off</p>
      <form  className='flex w:full h-full sm:w-1/2 items-center p-2 mx-auto '>
        <input className='w-full h:full'type='email' placeholder='enter your email' required/>
        <button type='submit' className= 'bg-black text-white  mt-1 border-2 border-gray-400 h-10 w-32 px-2 w:full'>Subscribe</button>
        </form>
    </div>  
  )
}
export default NewsletterBox
