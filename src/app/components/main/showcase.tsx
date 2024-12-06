'use client'

import Card from './card'
import { useState } from 'react'
import { CiCircleCheck } from 'react-icons/ci'


export default function Showcase() {
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const [ modalData, setModalData ] = useState({ name: '', price: 0 })
  const [ showToast, setShowToast ] = useState(false)
  const [ isDisappearing, setIsDisappearing ] = useState(false)


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleCardClick = (name: string, price: number) => {
    setModalData({ name, price })
    toggleModal()
  }

  const addToCart = () => {
    toggleModal()
    setShowToast(true)
    setIsDisappearing(false)

    setTimeout(() => {
      setIsDisappearing(true)
      setTimeout(() => {
        setShowToast(false)
      }, 1000)
    }, 2000)
    console.log('added to cart')
  }

  return (
    <div className='flex flex-col justify-center items-center my-10'>
      { /* Modal 창 */ }
      { isModalOpen && (
        <div className="absolute inset-0 z-50 flex justify-center items-center h-screen">
          <div className="bg-white fixed p-10 rounded-xl border-8 border-purple-200">
            <h1 className="text-xl font-bold text-black mb-3">사이즈를 선택해주세요</h1>
            <p className='text-black'>상품명: { modalData.name }</p>
            <p className='text-black'>가격: { modalData.price }</p>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">S (90)</span>
                <input type="radio" name="radio-10" className="radio checked:bg-red-500" defaultChecked />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">M (95)</span>
                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">L (100)</span>
                <input type="radio" name="radio-10" className="radio checked:bg-green-500" />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">XL (105)</span>
                <input type="radio" name="radio-10" className="radio checked:bg-yellow-500" />
              </label>
            </div>
            <div className='flex gap-x-2 mt-3'>
              <button onClick={ toggleModal } className="btn btn-warning w-1/3">닫기</button>
              <button onClick={ addToCart } className="btn btn-accent w-2/3">장바구니에 담기</button>
            </div>
          </div>
        </div>
      ) }

      { showToast && (
        <div
          className={ `toast toast-center toast-bottom z-50 ${
            isDisappearing ? 'animate-appear-out' : 'animate-appear-in'
          }` }
        >
          <div className="alert alert-success text-white flex items-center gap-2">
            <CiCircleCheck className="text-3xl" />
            <span className="text-xl">장바구니에 저장됬습니다!</span>
          </div>
        </div>
      ) }
      <h1 className="text-3xl font-bold text-black mb-10 divider">상의</h1>
      <h1 className='text-2xl font-bold text-black'>옷차의 추천: { [ '셔츠', '맨투맨' ].join(', ') }</h1>
      <div className="inline-flex w-full flex-nowrap overflow-hidden">
        <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8 m-4">
          <li className='carousel-item'>
            <Card name='상의1' price={ 10000 } img='' id={ 1 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의2' price={ 20000 } img='' id={ 2 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의3' price={ 30000 } img='' id={ 3 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의3' price={ 30000 } img='' id={ 3 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의3' price={ 30000 } img='' id={ 3 } onAddToCart={ handleCardClick } />
          </li>
        </ul>
        <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8 m-4">
          <li className='carousel-item'>
            <Card name='상의1' price={ 10000 } img='' id={ 1 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의2' price={ 20000 } img='' id={ 2 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의3' price={ 30000 } img='' id={ 3 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의3' price={ 30000 } img='' id={ 3 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의3' price={ 30000 } img='' id={ 3 } onAddToCart={ handleCardClick } />
          </li>
        </ul>
      </div>


      <h1 className="text-3xl font-bold text-black mb-10 divider">하의</h1>
      <h1 className='text-2xl font-bold text-black'>옷차의 추천: { [ '셔츠', '맨투맨' ].join(', ') }</h1>
      <div className="inline-flex w-full flex-nowrap overflow-hidden">
        <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8 m-4">
          <li className='carousel-item'>
            <Card name='상의1' price={ 10000 } img='' id={ 1 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의2' price={ 20000 } img='' id={ 2 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의3' price={ 30000 } img='' id={ 3 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의3' price={ 30000 } img='' id={ 3 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의3' price={ 30000 } img='' id={ 3 } onAddToCart={ handleCardClick } />
          </li>
        </ul>
        <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8 m-4">
          <li className='carousel-item'>
            <Card name='상의1' price={ 10000 } img='' id={ 1 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의2' price={ 20000 } img='' id={ 2 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의3' price={ 30000 } img='' id={ 3 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의3' price={ 30000 } img='' id={ 3 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의3' price={ 30000 } img='' id={ 3 } onAddToCart={ handleCardClick } />
          </li>
        </ul>
      </div>


      <h1 className="text-3xl font-bold text-black mb-10 divider">아우터</h1>
      <h1 className='text-2xl font-bold text-black'>옷차의 추천: { [ '셔츠', '맨투맨' ].join(', ') }</h1>
      <div className="inline-flex w-full flex-nowrap overflow-hidden">
        <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8 m-4">
          <li className='carousel-item'>
            <Card name='상의1' price={ 10000 } img='' id={ 1 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의2' price={ 20000 } img='' id={ 2 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의3' price={ 30000 } img='' id={ 3 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의3' price={ 30000 } img='' id={ 3 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의3' price={ 30000 } img='' id={ 3 } onAddToCart={ handleCardClick } />
          </li>
        </ul>
        <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8 m-4">
          <li className='carousel-item'>
            <Card name='상의1' price={ 10000 } img='' id={ 1 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의2' price={ 20000 } img='' id={ 2 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의3' price={ 30000 } img='' id={ 3 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의3' price={ 30000 } img='' id={ 3 } onAddToCart={ handleCardClick } />
          </li>
          <li className='carousel-item'>
            <Card name='상의3' price={ 30000 } img='' id={ 3 } onAddToCart={ handleCardClick } />
          </li>
        </ul>
      </div>

    </div>
  )
}
