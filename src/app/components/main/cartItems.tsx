'use client'

import Image from 'next/image'
import { FaRegTrashAlt } from "react-icons/fa";


interface CartItemsProps {
  name: string
  price: number
  img: string
  id: number
  size: string
}

function cleanName(name: string) {
  let cleanedName = name.replace(/<\/?[^>]+(>|$)/g, '')
  cleanedName = cleanedName.replace(/[^가-힣ㄱ-ㅎㅏ-ㅣ\s]/g, '')
  return cleanedName
}


export default function CartItems({ name, price, img, id, size }: CartItemsProps) {

  return (
    <div>
      <div className="flex p-1 text-black">
        <div className="w-1/3">
          <Image
            src={ img }
            width={ 100 }
            height={ 100 }
            placeholder='blur'
            blurDataURL="data:image/jpeg;base64"
            alt="product" />
        </div>
        <div className="w-2/3 ml-2">
          <h3 className="text-xl font-semibold overflow-hidden mb-4">{ cleanName(name) } - { size } 사이즈</h3>
          <p className="text-gray-500 text-end text-lg font-bold">{ price }원</p>
        </div>
        <div>
        <FaRegTrashAlt className='text-red-500' />
        </div>
      </div>
      <div className="divider"></div>
    </div>
  )
}