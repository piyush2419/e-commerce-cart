import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='  flex justify-center gap-2'>
      <p className='text-black  text-3xl '>{text1}
        <span className='text-black  text-3xl ml-2'>{text2}</span>
      </p>
      <p className=' mt-5 w-8 sm:w-11 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title
