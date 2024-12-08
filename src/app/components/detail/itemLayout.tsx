'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
interface ItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItemTemp {
  id: number;
  name: string;
  price: number;
  img: string;
  size: string;
}

export default function ItemLayout({ id, name, price, image }: ItemProps) {
  const [ modalData, setModalData ] = useState<CartItemTemp>({ id: 0, name: '', price: 0, img: '', size: '' })

  const handleCartClick =() =>{
    setModalData({ id, name, price, img: image, size: '' })
    addToCart()
  }

  const handlePurchaseClick = () => {
    setModalData({ id, name, price, img: image, size: '' })
    addToCart()
    window.location.href = '/payment'
  }

  const addToCart = async () => {
    const selectedSize = (document.querySelector('input[name="radio-10"]:checked') as HTMLInputElement)?.value

    if (!selectedSize) {
      alert('Please select a size before adding to the cart.')
      return
    }
    try {
      const response = await fetch('http://localhost:8080/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: modalData.id,
          size: selectedSize,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to add item to cart')
      }
      console.log('Item added to cart successfully')

    } catch (error) {
      console.error('Error adding item to cart:', error)
    }
  }

  console.log(modalData)

  return (
    <div className="bg-gray-50 py-10 px-5">
      
      <div className="flex flex-wrap lg:flex-nowrap bg-white rounded-lg overflow-hidden">
        { /* Image Section */ }
        <div className="flex justify-center items-center bg-gray-100 w-full">
          <div className="m-5 p-5 border-4 border-gray-300 rounded-lg bg-white">
            <Image
              src={ image }
              alt={ name }
              width={ 500 }
              height={ 500 }
              placeholder='blur'
              blurDataURL="data:image/jpeg;base64"
              className="rounded-lg"
            />
          </div>
        </div>
        { /* Info Section */ }
        <div className="flex flex-col gap-y-6 w-full lg:w-1/2 p-10">
          { /* Title */ }
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 tracking-tight">
            { name }
          </h1>
          { /* Price */ }
          <p className="text-4xl font-bold text-green-600 text-end">{ price.toLocaleString() } 원</p>
          { /* Size Selection */ }
          <div className='flex flex-col text-black gap-y-3'>
            <div className="form-control border-b-2 border-opacity-25 border-black px-3">
              <label className="label cursor-pointer">
                <span className="text-xl">S (90)</span>
                <input type="radio" name="radio-10" value="S" className="radio checked:bg-red-500" defaultChecked />
              </label>
            </div>
            <div className="form-control border-b-2 border-opacity-25 border-black px-3">
              <label className="label cursor-pointer">
                <span className="text-xl">M (95)</span>
                <input type="radio" name="radio-10" value="M" className="radio checked:bg-blue-500" />
              </label>
            </div>
            <div className="form-control border-b-2 border-opacity-25 border-black px-3">
              <label className="label cursor-pointer">
                <span className="text-xl">L (100)</span>
                <input type="radio" name="radio-10" value="L" className="radio checked:bg-green-500" />

              </label>
            </div>
            <div className="form-control border-b-2 border-opacity-25 border-black px-3">
              <label className="label cursor-pointer">
                <span className="text-xl">XL (105)</span>
                <input type="radio" name="radio-10" value="XL" className="radio checked:bg-yellow-500" />
              </label>
            </div>
          </div>
          { /* Buttons */ }
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button className="flex-1 bg-blue-600 text-white text-xl font-semibold py-3 rounded-lg shadow-md hover:bg-blue-500 transition" onClick={ handleCartClick }>
              장바구니에 담기
            </button>
            <button className="flex-1 bg-green-600 text-white text-xl font-semibold py-3 rounded-lg shadow-md hover:bg-green-500 transition" onClick={ handlePurchaseClick}>
              구매하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
