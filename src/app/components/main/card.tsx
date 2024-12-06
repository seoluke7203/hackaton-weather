'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface CardProps {
  name: string
  price: number
  img: string
  id: number
  onAddToCart: (name: string, price: number) => void
}

export default function Card({ name, price, img, id, onAddToCart }: CardProps) {
  return (
    <div>
      <div className="cursor-pointer card bg-white w-[20vw] shadow-2xl text-black mb-32 rounded-xl p-1">
        <Link href={ `/products/${id}` }>
          <div className="flex justify-center mt-5">
            <figure className="w-[110px] h-[110px] mt-10 object-contain">
              <Image
                src={ '' }
                width={ 200 }
                height={ 200 }
                alt="logo"
                className="object-contain w-full h-full rounded-lg"
              />
            </figure>
          </div>
          <div className="card-body flex flex-col justify-between gap-y-2">
            <div className="flex flex-col items-start gap-y-2">
              <h1 className="card-title text-2xl text-start">{ name }</h1>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="mt-2"> { price } </p>
            </div>
          </div>
        </Link>

        <div className="card-footer">
          <div className='divider'></div>
          <div className="flex justify-between items-center">
            <button
              onClick={ () => onAddToCart(name, price) }
              className="btn btn-info text-white w-full"
            >
              장바구니에 추가하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
