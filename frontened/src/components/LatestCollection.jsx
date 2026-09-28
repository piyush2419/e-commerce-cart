import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from './Title'
import { useState } from 'react'
import { useEffect } from 'react'
import ProductItem from './ProductItem'
const LatestCollection = () => {
    const {products} = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])
  return (
    <div className='my-10 sm:my-15'>
      <div>
        <Title  text1={'Latest'} text2={'Collection'}/>
      </div>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 mt-6'>
        {latestProducts.map((items,index)=>(
            <ProductItem key={index} id={items._id} image={items.image} name={items.name} price={items.price} />
        )
        )}
      </div>
    </div>
  )
}

export default LatestCollection
