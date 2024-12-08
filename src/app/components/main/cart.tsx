'use client'

import CartItems from '@/app/components/main/cartItems'
import { useState, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import Link from 'next/link'

interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  size: string;
}

export default function Cart() {
  const [ isCartOpen, setIsCartOpen ] = useState(false)
  const [ cartItems, setCartItems ] = useState<CartItem[]>([])
  const [ isLoading, setIsLoading ] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!isCartOpen) return

      setIsLoading(true)
      try {
        const response = await fetch('http://localhost:8080/api/cart/find')
        if (!response.ok) {
          throw new Error('Failed to fetch cart items')
        }
        const data: CartItem[] = await response.json()
        setCartItems(data)
      } catch (error) {
        console.error('Error fetching cart items:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCartItems()
  }, [ isCartOpen ])

  return (
    <div className="relative">
      <div
        onClick={ toggleCart }
        className="absolute flex items-center justify-center bg-green-300 rounded-full p-4 cursor-pointer glass"
      >
        <FaShoppingCart className="text-4xl text-black" />
      </div>
      { isCartOpen && (
        <>
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
              { isLoading ? (
                <p className="text-gray-500 text-center">로딩 중...</p>
              ) : cartItems.length === 0 ? (
                <p className="text-gray-500 text-center">장바구니가 비었습니다.</p>
              ) : (
                cartItems.map((item) => (
                  <CartItems
                    key={ item.id }
                    name={ item.name }
                    price={ item.price }
                    img={ item.img }
                    id={ item.id }
                    size={ item.size }
                  />
                ))
              ) }
            </div>
            { cartItems.length > 0 && (
              <Link href="/payment">
                <button className="w-full bg-primary py-2 rounded-xl mt-4">
                주문하기
                </button>
              </Link>
            ) }
          </div>
          <div
            onClick={ toggleCart }
            className="fixed inset-0 bg-black opacity-50 z-40"
          ></div>
        </>
      ) }
    </div>
  )
}
