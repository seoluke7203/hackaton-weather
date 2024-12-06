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
      <div className="cursor-pointer card bg-white max-w-[25vw] max-h-[60vh] shadow-2xl text-black mb-32 rounded-xl p-2">
        <Link href={ `/products/${id}` }>
          <div className="flex justify-center mt-5">
            <figure className="w-[200px] h-[200px] mt-10 object-contain">
              <Image
                src={ img }
                width={ 300 }
                height={ 300 }
                placeholder='blur'
                blurDataURL="data:image/jpeg;base64"
                alt="item"
                className="object-contain w-full h-full rounded-lg"
              />
            </figure>
          </div>
          <div className="card-body flex flex-col justify-between gap-y-2 min-h-[25vh]">
            <div className="flex flex-col items-start gap-y-2">
              <h1 className="card-title text-2xl text-start">{ name }</h1>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-end text-xl"> { price }원 </p>
            </div>
          </div>
        </Link>

        <div className="card-footer">
          <div className="flex justify-between items-center">
            <button
              onClick={ () => onAddToCart(name, price) }
              className="btn btn-info text-white w-full mb-5"
            >
              장바구니에 추가하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
