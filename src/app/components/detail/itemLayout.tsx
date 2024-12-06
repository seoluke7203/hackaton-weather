import Image from 'next/image'

interface ItemProps {
  name: string;
  price: number;
  image: string;
}

export default function ItemLayout({ name, price, image }: ItemProps) {
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
                <input type="radio" name="radio-10" className="radio checked:bg-red-500" defaultChecked />
              </label>
            </div>
            <div className="form-control border-b-2 border-opacity-25 border-black px-3">
              <label className="label cursor-pointer">
                <span className="text-xl">M (95)</span>
                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" />
              </label>
            </div>
            <div className="form-control border-b-2 border-opacity-25 border-black px-3">
              <label className="label cursor-pointer">
                <span className="text-xl">L (100)</span>
                <input type="radio" name="radio-10" className="radio checked:bg-green-500" />
              </label>
            </div>
            <div className="form-control border-b-2 border-opacity-25 border-black px-3">
              <label className="label cursor-pointer">
                <span className="text-xl">XL (105)</span>
                <input type="radio" name="radio-10" className="radio checked:bg-yellow-500" />
              </label>
            </div>
          </div>
          { /* Buttons */ }
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button className="flex-1 bg-blue-600 text-white text-xl font-semibold py-3 rounded-lg shadow-md hover:bg-blue-500 transition">
              장바구니에 담기
            </button>
            <button className="flex-1 bg-green-600 text-white text-xl font-semibold py-3 rounded-lg shadow-md hover:bg-green-500 transition">
              구매하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
