import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { useState } from 'react'
import { useEffect } from 'react'
import Title from './Title'
import ProductItem from './ProductItem'
const BestSeller = () => {
    const {products}=useContext(ShopContext);
    const [BestSeller,setBestSeller]=useState([]);
    useEffect(()=>{
        const BestProduct = products.filter((item)=>item.bestseller===true);
        setBestSeller(BestProduct.slice(0,5));
    },[])
  return (
    <div className='my-8 -mt-4'>
        <div className='text-center text-2xl py-5'>
            <Title text1={"Best"} text2={"Sellers"}/>
        </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {
            BestSeller.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))
        }
        </div>
    </div>
  )
}

export default BestSeller
