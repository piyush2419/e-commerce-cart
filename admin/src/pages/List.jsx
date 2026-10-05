import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {

  const [list, setList] = useState([])

  // Fetch all products
  const fetchList = async () => {
    try {

      const response = await axios.get(
        backendUrl + 'api/product/list',
        {
          headers: {
            token: token
          }
        }
      )

      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.error(error)
      toast.error(
        error.response?.data?.message || error.message
      )
    }
  }


  // Fetch products when token is available
  useEffect(() => {
    if (token) {
      fetchList()
    }
  }, [token])


  // Remove product
  const removeProduct = async (id) => {

    try {
      if (!token) {
        toast.error('Authentication token not found')
        return
      }
      const response = await axios.post(
        backendUrl + 'api/product/remove',
        { id },
        {
          headers: {
            token: token
          }
        }
      )

      if (response.data.success) {

        toast.success(response.data.message)
        // Refresh product list
        await fetchList()

      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.error(error)
      toast.error(
        error.response?.data?.message || error.message
      )
    }
  }


  console.log("Fetched Products:", list)


  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>

        {/* Table Header */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/* Product List */}
        {
          list.map((item, index) => (

            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'
              key={index}>
              {/* Product Image */}
              <img className='w-12'
                src={item.images?.[0] || 'https://via.placeholder.com/150'}
                alt={item.name}/>
              {/* Product Name */}
              <p>{item.name}</p>
              {/* Category */}
              <p>{item.category}</p>
              {/* Price */}
              <p>
                {currency}
                {item.price}
              </p>
              {/* Delete */}
              <p
                onClick={() => removeProduct(item._id)}
                className='text-right md:text-center cursor-pointer text-lg'>X
              </p>

            </div>

          ))
        }

      </div>
    </>
  )
}

export default List