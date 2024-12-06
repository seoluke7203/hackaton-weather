'use client'

import CartItems from '@/app/components/main/cartItems'
import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

export default function Cart() {
  const [ isCartOpen, setIsCartOpen ] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div className="relative">
      <div
        onClick={ toggleCart }
        className="absolute flex items-center justify-center bg-green-300 rounded-full p-4 cursor-pointer glass"
      >
        <FaShoppingCart className="text-4xl text-black" />
      </div>
      { isCartOpen && (
        <div className="fixed bottom-10 right-5 w-80 bg-white shadow-lg rounded-lg p-6 z-50 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-500">장바구니</h2>
            <button
              onClick={ toggleCart }
              className="text-2xl text-black hover:text-red-700"
            >
              <IoClose />
            </button>
          </div>
          <div className="mt-4">
            { /* Cart Items */ }
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
          </div>
          <button className='w-full bg-primary py-2 rounded-xl'>주문하기</button>

        </div>
      ) }

      { isCartOpen && (
        <div
          onClick={ toggleCart }
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      ) }
    </div>
  )
}
