'use client'

import DeliveryInfo from '@/app/components/payment/deliveryInfo'
import ItemList from '@/app/components/payment/itemList'
import { MdOutlinePayment } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa6'
import QRCode from '@/app/components/payment/qrCode'
import { useState, useEffect } from 'react'

interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  size: string;
  count: number;
}


export default function Page() {
  const [ userPassword, setUserPassword ] = useState('')
  const [ cartItems, setCartItems ] = useState<CartItem[]>([])
  const [ isLoading, setIsLoading ] = useState(false)

  // 나중에 난수화 하기
  const password = '1234'

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()

  const onClickConfirm = (data: any) => {
    console.log('Form Data:', data)
  }

  function cleanName(name: string) {
    let cleanedName = name.replace(/<\/?[^>]+(>|$)/g, '')
    cleanedName = cleanedName.replace(/[^가-힣ㄱ-ㅎㅏ-ㅣ\s]/g, '')
    return cleanedName
  }

  function getTotalPrice() {
    return cartItems.reduce((total, item) => total + (item.price * item.count), 0);
  }

  let totalPrice = 0

  console.log('cartItems:', totalPrice)



  useEffect(() => {
    const fetchCartItems = async () => {
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
  }, [])





  return (
    <div className="bg-white text-black">
      <div>
        <div className="flex justify-center mt-4">
          <MdOutlinePayment className="text-pink-700 mb-4 text-6xl" />
        </div>
        <div className="text-3xl text-center font-bold text-pink-700 mb-6">결제 하기</div>
        <div className="flex flex-col gap-y-2 px-20">
          { cartItems.map((item) => (
            console.log('item:', item.count),
            <ItemList count={item.count} key={ item.id } name={ cleanName(item.name) } price={ item.price } img={ item.img } size={ item.size } />
          )) }
        </div>
      </div>
      <div className="flex mt-10 py-2 place-content-center">
        <div className="card rounded-box grid h-32 place-items-center w-1/3 bg-gray-200">
          <div className='flex gap-x-4 text-center'>
            <div className='flex flex-col'>
              <p className='text-xs'>선택 상품 금액</p>
              <p className=' font-semibold'>{ getTotalPrice() } 원</p>
            </div>
            <FaPlus className='mt-3'/>
            <div className='flex flex-col'>
              <p className='text-xs'>배송비</p>
              <p className=' font-semibold'>완.전.무.료</p>
            </div>
            <FaMinus className='mt-3'/>
            <div className='flex flex-col'>
              <p className='text-xs'>즉시 할인 금액</p>
              <p className='text-red-500 font-semibold'> 0 원</p>
            </div>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="card rounded-box grid h-32 place-items-center w-1/3 bg-gray-200">
          <div className='flex gap-x-3 text-center'>
            <div className='flex flex-col'>
              <p className='text-xs mb-2'>총 결제 금액</p>
              <p className=' font-semibold text-3xl'>{ getTotalPrice() }원</p>
            </div>
          </div>
        </div>
      </div>
      <div className='divider text-black text-2xl my-10 font-bold'>주문자 정보</div>
      <form onSubmit={ handleSubmit(onClickConfirm) } className="m-4">
        <div className="flex flex-col md:flex-row gap-8 p-6 bg-gray-100 rounded-lg shadow-md">
          <div className="w-full md:w-1/2">
            <div className="p-4 bg-white rounded-lg shadow-sm h-full">

              <DeliveryInfo register={ register } errors={ errors } />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">아래 QR 코드를 스캔해서 결제를 완료해주세요</h2>
              <QRCode password="1234"/>
              <p className="mt-4 text-gray-600 text-sm">아래 입력칸에 결제 완료 후 생성되는 비밀번호를 작성해주세요</p>
              <div className='flex gap-3'>
                <input
                  type="password"
                  className="mt-4 w-2/3 h-12 px-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="결제 비밀번호"
                  onChange={ (e) => setUserPassword(e.target.value) }
                />
                <button className='btn mt-4 btn-warning'>
                  인증 하기
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          { userPassword != password ? (
            <button
              type="submit"
              disabled ={ true }
              className="w-3/5 mt-10 py-3 bg-gray-400 text-white rounded-md shadow-md hover:bg-red-500"
            >
          인증 번호를 입력해주세요
            </button>
          ) : (
            <button
              type="submit"
              className="w-3/5 mt-10 py-3 bg-success text-white rounded-md shadow-md hover:bg-primary"
            >
        구매하기
            </button>
          )
          }

        </div>
      </form>
    </div>
  )
}
