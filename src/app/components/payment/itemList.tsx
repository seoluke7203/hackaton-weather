import Image from 'next/image'

interface ItemListProps {
  name: string;
  price: number;
  img: string;
  size: string;
  count: number;
}

export default function ItemList({ name, price, img, size, count }: ItemListProps) {
  return (
    <div>
      <div className="flex place-items-center text-center p-4 bg-gray-200 text-black rounded-md">
        <div className="w-1/4 ml-3">
          <Image src={ img } alt={ name } width={ 150 } height={ 150 } />
        </div>
        <div className="w-1/4 ml-2">
          <h3 className="text-lg overflow-hidden mb-4">상품명</h3>
          <h3 className="text-xl font-semibold overflow-hidden mb-4">{ name }</h3>
        </div>
        <div className="w-1/4 ml-2">
          <h3 className="text-lg overflow-hidden mb-4">상품 금액</h3>
          <p className="text-xl font-semibold ">{ price }</p>
        </div>
        <div className="w-1/4 ml-2">
          <h3 className="text-lg overflow-hidden mb-4">사이즈</h3>
          <p className="text-xl font-semibold ">{ size }</p>
        </div>
        <div className="w-1/4 ml-2">
          <h3 className="text-lg overflow-hidden mb-4">수량</h3>
          <p className="text-xl font-semibold ">{ count }</p>
        </div>
        <div className="w-1/4 ml-2">
          <h3 className="text-lg overflow-hidden mb-4">배송비</h3>
          <p className="text-2xl font-semibold ">무료</p>
        </div>
      </div>
    </div>
  )

}