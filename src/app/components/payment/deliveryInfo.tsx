'use client'

import clsx from 'clsx'


function UserNameInput({ register, error = undefined }: { register: any, error?: any }) {
  return (
    <div>
      <div className="flex my-4">
        <label htmlFor="name" className="w-1/2">주문자명</label>
        <input
          id="name"
          name="name"
          placeholder="주문자명을 입력해주세요"
          className="w-full border-2 pl-2 border-black"
          { ...register('name', {
            required: { value: true, message: '주문자명을 입력해주세요' }
          }) }
        />
      </div>
      <div className={ clsx(error && 'text-red-500') }>
        { error && <span>{ error.message }</span> }
      </div>
    </div>
  )
}

function UserAddressInput({ register, error = undefined }: { register: any, error?: any }) {
  return (
    <div>
      <div className="flex my-4">
        <label htmlFor="address" className="w-1/2">주문자 주소</label>
        <input
          id="address"
          name="address"
          placeholder="주문자의 주소를 입력해주세요"
          className="w-full border-2 pl-2 border-black"
          { ...register('address', {
            required: { value: true, message: '주문자의 주소를 입력해주세요' }
          }) }
        />
      </div>
      <div className={ clsx(error && 'text-red-500') }>
        { error && <span>{ error.message }</span> }
      </div>
    </div>
  )
}

function UserPhoneInput({ register, error = undefined }: { register: any, error?: any }) {
  return (
    <div>
      <div className="flex my-4">
        <label htmlFor="phone_number" className="w-1/2">주문자 휴대폰</label>
        <input
          id="phone_number"
          name="phone_number"
          placeholder="휴대전화 번호를 입력해주세요"
          className="w-full border-2 pl-2 border-black"
          { ...register('phone_number', {
            required: { value: true, message: '휴대전화 번호를 입력해주세요' }
          }) }
        />
      </div>
      <div className={ clsx(error && 'text-red-500') }>
        { error && <span>{ error.message }</span> }
      </div>
    </div>
  )
}

function UserEmailInput({ register, error = undefined }: { register: any, error?: any }) {
  return (
    <div>
      <div className="flex my-4">
        <label htmlFor="email" className="w-1/2">이메일 주소</label>
        <input
          id="email"
          name="email"
          placeholder="이메일 주소를 입력해주세요"
          className="w-full border-2 pl-2 border-black"
          { ...register('email', {
            required: { value: true, message: '이메일 주소를 입력해주세요' },
            pattern: {
              value: /^\S+@\S+$/i,
              message: '이메일 형식이 올바르지 않습니다.',
            },
          }) }
        />
      </div>
      <div className={ clsx(error && 'text-red-500') }>
        { error && <span>{ error.message }</span> }
      </div>
    </div>
  )
}

export default function DeliveryInfo({ register, errors }: { register: any, errors: any }) {
  return (
    <div className="flex flex-col text-black">
      <div className="w-full max-w-lg mx-auto text-2xl">
        <UserNameInput register={ register } error={ errors?.name } />
        <UserAddressInput register={ register } error={ errors?.address } />
        <UserPhoneInput register={ register } error={ errors?.phone_number } />
        <UserEmailInput register={ register } error={ errors?.email } />
      </div>
    </div>
  )
}
